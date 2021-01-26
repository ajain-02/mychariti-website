import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import styled from 'styled-components'
import { Affix } from 'antd'
import CharitiesSearch from '../chc/search'
import { filtersListToObj, writeFiltersCache } from '../chc/helpers'

const SearchContainer = styled.div`
  text-align: left;
  background-color: inherit !important;
  box-sizing: border-box;
  padding: 0 0.5em;
  width: 100%;
  border-radius:30px

  transition: padding 0.2s ease-out;

    @media (min-width: 992px) {
      padding: 0 20%;
    }
`

const Search = ({ client }, { router }) => {
  const [fixed, setFixed] = useState(false)
  return (

      <SearchContainer
      >
        <CharitiesSearch
          onAddFilter={item => {
            const filtersList = [item]
            writeFiltersCache(filtersList, client)
            const filtersObj = filtersListToObj(filtersList)
            const filtersString = JSON.stringify(filtersObj)
            return router.history.push(`/chc?filters=${filtersString}`)
          }}
        />
      </SearchContainer>
  )
}
Search.propTypes = {
  client: PropTypes.object,
}
Search.contextTypes = {
  router: PropTypes.object,
}

export default withApollo(Search)
