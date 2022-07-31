import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User} from 'types/user';

type AuthState = {
    user: User | null;
    loading: boolean;
    error: Error | null;
}

const authState: AuthState = {
    user: null,
    loading: true,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        initialization: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
        error: (state, action: PayloadAction<Error>) => {
            state.user = null;
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default authSlice;