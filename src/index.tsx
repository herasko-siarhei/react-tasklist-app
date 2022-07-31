import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';

import store from 'redux/store';
import {theme} from 'configs/theme';

import App from 'App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
            <CssBaseline/>
        </ThemeProvider>
    </Provider>
);