import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components'

import './App.css'

const App = () => {
  return (
    <div className = 'app'>
      <div className = 'navbar'>
        <Navbar />
      </div>
      <div className = 'main'>
        <Layout>
          <div className = 'routes'>
            <Routes>
              <Route exact path = '/' element = {<Homepage />} />
              <Route exact path = '/exchanges' element = {<Exchanges />} />
              <Route exact path = '/cryptocurrencies' element = {<Cryptocurrencies />} />
              <Route exact path = '/crypto/:coinId' element = {<CryptoDetails />} />
              <Route exact path = '/news' element = {<News />} />
            </Routes>
          </div>
        </Layout>
        <div className = 'footer' level = {5}>
          <Typography.Title style = {{ color: 'white', textAlign: 'center' }}>
            CryptoVerse <br />
            All Rights Reserved <br />
            <Space>
              <Link to = '/'>Home</Link>
              <Link to = '/exchanges'>Exchanges</Link>
              <Link to = '/news'>News</Link>
            </Space>
          </Typography.Title>
        </div>
      </div>
    </div>
  )
}

export default App
