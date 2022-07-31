import React, {FC} from 'react';
import {CircularProgress} from '@mui/material';

import FullMain from 'layout/FullMain';

const Loading: FC = () => {
    return (
        <FullMain>
            <CircularProgress/>
        </FullMain>
    );
};

export default Loading;