import React, {FC, useEffect} from 'react';

import authActions from 'redux/auth/auth.actions';
import {useAppSelector} from 'hooks/useAppSelector';
import {useAppDispatch} from 'hooks/useAppDispatch';

import Container from 'layout/Container';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Main from 'layout/Main';
import Loading from 'components/Loading';
import Application from 'pages/Application';
import Authentication from 'pages/Authentication';

const App: FC = () => {
    const {user, loading} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authActions.initialization());
    }, [dispatch]);
    return (
        <Container>
            <Header/>
            <Main>
                {loading ? (
                    <Loading/>
                ) : user ? (
                    <Application/>
                ) : (
                    <Authentication/>
                )}
            </Main>
            <Footer/>
        </Container>
    );
};

export default App;