import api from 'api';
import authSlice from 'redux/auth/auth.slice';
import {AppDispatch} from 'types/store';

const authActions = {
    initialization: () => (dispatch: AppDispatch) => {
        api.auth.initialization()
            .then(response => dispatch(authSlice.actions.initialization(response ? {uid: response.uid} : null)))
            .catch(error => dispatch(authSlice.actions.error(error)));
    },
    login: () => (dispatch: AppDispatch) => {
        api.auth.login()
            .then(response => dispatch(authSlice.actions.login({uid: response.uid})))
            .catch(error => dispatch(authSlice.actions.error(error)));
    },
    logout: () => (dispatch: AppDispatch) => {
        api.auth.logout()
            .then(() => dispatch(authSlice.actions.logout()))
            .catch(error => dispatch(authSlice.actions.error(error)));
    }
};

export default authActions;