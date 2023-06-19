
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


//only call once no matter if multiple slices
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
});

export default store;
