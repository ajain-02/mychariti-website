import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { LocaleProvider, Layout, Menu, Divider } from 'antd'
import './App.css'
import enGB from 'antd/lib/locale-provider/en_GB'

import { Router } from './Router'

const { Header, Footer } = Layout

const HeaderTitle = styled(NavLink)`
  color: #EC407A;
  line-height: 59px;
  font-size: 32px;
  letter-spacing: 3px;
  font-weight: 500;
  height: 59px;
  margin: 2px 28px 2px 0;
  float: left;
  :hover {
    color: #D81B60;
  }
`

const internalNavs = [
  { to: '/', label: 'Charities', exact: true },
  { to: '/faq', label: 'FAQ', exact: false },
]

const externalNavs = [
  { href: 'https://charitybase.uk/docs/v2.0.0', label: 'API Docs' },
  { href: 'https://github.com/charity-base', label: 'GitHub' },
]

const NavBar = () => (
  <Header>
    <HeaderTitle to="/">CharityBase</HeaderTitle>
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      selectable={false}
    >
      {internalNavs.map(({ to, label, exact }, i) => (
        <Menu.Item key={`${i}-internal`}>
          <NavLink
            to={to}
            exact={exact}
            activeStyle={{
              color: 'rgba(255,255,255,0.9)',
             }}
          >
            {label}
          </NavLink>
        </Menu.Item>
      ))}
      <Menu.Item style={{ cursor: 'default' }}>
        <Divider type='vertical' style={{ marginLeft: '20px', marginRight: '20px' }} />
      </Menu.Item>
      {externalNavs.map(({ href, label }, i) => (
        <Menu.Item key={`${i}-external`} icon='plus'>
          <a target='_blank' href={href}>{label}</a>
        </Menu.Item>
      ))}
    </Menu>
  </Header>
)

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enGB}>
        <Layout style={{ height: '100vh' }}>
          <NavBar />
          <Router />
          <Footer style={{ textAlign: 'center' }}>
            CharityBase 2018 | <a href='https://github.com/tythe-org'>github.com/tythe-org</a>
          </Footer>
        </Layout>
      </LocaleProvider>
    )
  }
}

export default App;
