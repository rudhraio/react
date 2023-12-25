import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

// Create the Redux store
const store = configureStore({
    reducer: reducers,
});

export default store;
