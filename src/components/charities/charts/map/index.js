import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
import charityBase from '../../../../lib/charityBaseClient'
import CharitiesMapView from './CharitiesMapView'
import { zoomToPrecision, getCenterZoom } from '../../../../lib/mapHelpers'

const getGeoFilterString = query => String(query.addressWithin || '')

class CharitiesMap extends Component {
  state = {
    buckets: [],
    geoBoundsString: null,
    isLoading: false,
    resetOnSearch: true,
  }
  componentDidMount() {
    this.getData(this.props.query, undefined)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.queryString !== this.props.queryString) {
      const geoFilter = getGeoFilterString(this.props.query)
      if (this.state.resetOnSearch && geoFilter && geoFilter === getGeoFilterString(prevProps.query)) {
        return this.onBoundsChange()
      }
      this.getData(this.props.query, undefined)
    }
  }
  getData = (query, aggGeoBounds) => {
    const { width, height } = this.props
    const geoFilter = getGeoFilterString(query)
    const zoomEstimate = getCenterZoom(geoFilter, width, height).zoom //doesn't work if of the form addressWithin=3km%2C51.786793%2C-1.272327
    const aggGeoPrecision = zoomToPrecision(zoomEstimate)
    this.setState({
      isLoading: true,
    })
    charityBase.charity.aggregate({
      ...query,
      accessToken: localStorage.getItem('access_token'),
      aggTypes: 'geo',
      aggGeoBounds,
      aggGeoPrecision,
    })
    .then(({ aggregations }) => {
      const exists = aggregations && aggregations.addressLocation
      const buckets = exists ? aggregations.addressLocation.grid.buckets : []
      // const geoBoundsString = exists && esBoundsToString(aggregations.addressLocation.map_zoom.bounds)
      // geoBoundsString = geoBoundsString || getGeoFilterString(query) || defaultGeoBoundsString
      this.setState({
        buckets,
        geoBoundsString: geoFilter,
        isLoading: false,
      })
    })
    .catch(e => {
      this.setState({
        buckets: [],
        geoBoundsString: null,
        isLoading: false,
      })
      message.error('Oops, something went wrong')
    })
  }
  onBoundsChange = geoBoundsString => {
    this.props.onQueryUpdate({
      ...this.props.query,
      'addressWithin': geoBoundsString || undefined
    })
  }
  render() {
    const { width, height } = this.props
    const { buckets, isLoading, geoBoundsString } = this.state
    return (
      <CharitiesMapView
        data={buckets}
        geoBoundsString={geoBoundsString}
        resetOnSearch={this.state.resetOnSearch}
        onBoundsChange={this.onBoundsChange}
        onOptionsChange={({ resetOnSearch }) => this.setState({ resetOnSearch })}
        loading={isLoading}
        width={width}
        height={height}
      />
    )
  }
}
CharitiesMap.propTypes = {
  query: PropTypes.object.isRequired,
  queryString: PropTypes.string.isRequired,
  onQueryUpdate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default CharitiesMap
