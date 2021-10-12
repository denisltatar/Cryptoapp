// This is where our store is physically cerated
import { configureStore } from '@reduxjs/toolkit';

// Connecting our API to our store
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});