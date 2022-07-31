import {configureStore} from '@reduxjs/toolkit';

import authReducer from 'redux/auth/auth.reducer';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;