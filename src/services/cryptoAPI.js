import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const cryptoApiHeaders = {
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//   'x-rapidapi-key': '8fc9800f7cmsh24a5ca2d9558d6ep1537c4jsn3a3138fd2d05'
// }

// const cryptoApiHeaders = {
//   'x-access-token': 'coinranking15bb086be6719a35c4dfbfcf019332654ec3a47a7b0fb028'
// }

//const baseUrl = 'https://coinranking1.p.rapidapi.com'

const baseUrl = `http://localhost:8000`

//const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

const createRequest = (url) => ({ url })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',

  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`)
    })
  })
})

export const { useGetCryptosQuery } = cryptoApi