import React, {FC} from 'react';
import {Button, Stack} from '@mui/material';
import {GitHub} from '@mui/icons-material';

const Footer: FC = () => {
    function goToGitHub() {
        window.location.href = 'https://github.com/herasko-siarhei';
    }

    return (
        <Stack marginY={1}>
            <Button onClick={goToGitHub} variant="outlined" color="inherit" startIcon={<GitHub/>}>
                GitHub
            </Button>
        </Stack>
    );
};

export default Footer;