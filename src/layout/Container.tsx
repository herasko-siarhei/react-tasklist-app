import React, {FC, ReactNode} from 'react';
import {Container as MUIContainer} from '@mui/material';

type ContainerProps = {
    children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <MUIContainer maxWidth="md" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            {children}
        </MUIContainer>
    );
};

export default Container;