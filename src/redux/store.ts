import {configureStore} from '@reduxjs/toolkit';

import authReducer from 'redux/auth/auth.reducer';
import taskReducer from 'redux/task/task.reducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        task: taskReducer
    }
});

export default store;