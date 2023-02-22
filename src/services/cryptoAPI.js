import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'bcf9fa71f5msh41ed7dd71c7f465p1c8c87jsn98fc432c255c',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

//Create API request with approprite keys
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

//Specific API used to create and request API data from rapidAPI
//We recive the data here and display it via our componenets
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})


//Setting the value of API date to useGetCryptosQuery to export to components
export const {
    useGetCryptosQuery,

} = cryptoApi;