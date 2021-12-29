import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoAPI'

const Cryptocurrencies = ({ simplified }) => {

  //const count = simplified ? 10 : 100

  let { data: cryptosList, isFetching } = useGetCryptosQuery()

  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {

    const filteredData = [...cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))]

    if ( simplified ) {
      setCryptos(filteredData.splice(0, 10))
    } else {
      setCryptos(filteredData)
    }

  }, [cryptosList, searchTerm, simplified])

  if (isFetching) return 'Loading...'

  return (
    <>
      {
        !simplified && (
          <div className = 'search-crypto'>
            <Input placeholder='Search Cryptocurrency' onChange = {(event) => setSearchTerm(event.target.value)} />
          </div>
        )
      }
      <Row gutter = {[32, 32]} className = 'crypto-card-container'>
        {
          cryptos?.map((currency, index) => (
            <Col key = {index} xs = {24} sm = {12} lg = {6} className = 'crypto-card'>
              <Link to = {`/crypto/${currency.uuid}`}>
                <Card
                  title = {`${currency.rank}. ${currency.name}`}
                  extra = {<img className = 'crypto-image' src = {currency.iconUrl} alt = {`${currency.rank}.${currency.name}`} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Cryptocurrencies
