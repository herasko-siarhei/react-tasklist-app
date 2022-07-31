import React, {FC} from 'react';
import {Stack, Typography} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import {LoginOutlined, LogoutOutlined} from '@mui/icons-material';

import authActions from 'redux/auth/auth.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';

const Header: FC = () => {
    const {user, loading} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    function login() {
        dispatch(authActions.login());
    }

    function logout() {
        dispatch(authActions.logout());
    }

    return (
        <Stack direction="row" justifyContent="space-between" marginY={1}>
            <Typography variant="h2" fontSize="1.5rem" fontWeight="bold" sx={{cursor: 'pointer'}}>
                TaskList
            </Typography>
            <LoadingButton
                loading={loading}
                onClick={user ? logout : login}
                variant="outlined"
                color="inherit"
            >
                {user ? <LogoutOutlined/> : <LoginOutlined/>}
            </LoadingButton>
        </Stack>
    );
};

export default Header;