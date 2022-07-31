import React, {FC, ReactNode} from 'react';
import {Stack} from '@mui/material';

type FullMainProps = {
    children: ReactNode;
}

const FullMain: FC<FullMainProps> = ({children}) => {
    return (
        <Stack flex="auto" justifyContent="center" alignItems="center">
            {children}
        </Stack>
    );
};

export default FullMain;