import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    maxWidth: '800px',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

export const MainContainer = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
