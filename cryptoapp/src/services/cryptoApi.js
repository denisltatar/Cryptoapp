// Creating the firt piece of the data fetching functionality
// Created our api to fetch data!
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '62e047d893msh15bce3fda09f4c2p18e49djsn3bd68e154430'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

// Creating our physical api to call on!
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
});



// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '62e047d893msh15bce3fda09f4c2p18e49djsn3bd68e154430'
//     }
//   };

export const {useGetCryptosQuery} = cryptoApi;