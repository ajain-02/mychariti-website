import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Layout } from 'antd'
import { GET_CHARITY } from '../../lib/gql'
import { ContentLayout } from '../general/Layout'
import SideBar from '../general/side-bar'
import CharityContentRouter from './CharityContentRouter'
import Header from './Header'

const {
  Content, Footer,
} = Layout

const Charity = ({ id }) => {
  return (
    <Layout>
      <SideBar />
      <Query
        query={GET_CHARITY}
        variables={{ id }}
      >
        {({ loading, error, data }) => {
          if (error) return 'oops err'
          const charity = (data && data.CHC && data.CHC.getCharities.list[0]) || null


          return (
            <ContentLayout>
              <Header
                loading={loading}
                names={charity ? charity.names : []}
              />

              <Content style={{
                background: '#fff',
                margin: '0 0 0 0',
                overflow: 'initial',
                zIndex: 1,
                position: 'relative',
                height: '100%',
              }}>

                <CharityContentRouter
                  charity={charity}
                  id={id}
                  loading={loading}
                />
              </Content>
           
            </ContentLayout>
          )
        }}
      </Query>
    </Layout>
  )
}
Charity.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Charity
