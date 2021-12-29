import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8000'

const createRequest = (url) => ({ url })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',

  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coins/${coinId}`)
    })
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi