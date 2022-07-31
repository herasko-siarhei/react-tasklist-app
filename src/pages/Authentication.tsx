import React, {FC} from 'react';
import {Button, Stack, Typography} from '@mui/material';
import {Google} from '@mui/icons-material';

import authActions from 'redux/auth/auth.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';

import FullMain from 'layout/FullMain';

const Authentication: FC = () => {
    const {error} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    function login() {
        dispatch(authActions.login());
    }

    return (
        <FullMain>
            <Stack alignItems="center" spacing={1}>
                <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center">
                    Authentication
                </Typography>
                {error && (
                    <Typography variant="overline" fontSize="1.5rem" fontWeight="medium" align="center" color="error">
                        {error.message}
                    </Typography>
                )}
                <Button onClick={login} variant="outlined" color="inherit" startIcon={<Google/>}>
                    Login
                </Button>
            </Stack>
        </FullMain>
    );
};

export default Authentication;