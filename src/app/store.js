import { cryptoApi } from '../services/cryptoAPI';


//We import RapidAPI to store 
import { configureStore } from '@reduxjs/toolkit';

//Here we configure our store useing reducer on crptoAPI to connect API 
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),

})