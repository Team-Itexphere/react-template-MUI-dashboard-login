// SuccessCustomIcon.tsx
import React from 'react';

import { Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const SuccessCustomIcon: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 0, 0.2)',
                    boxShadow: '0 0 20px 10px rgba(0, 255, 0, 0.3)',
                    // -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
                },
            }}
        >
            <CheckCircle style={{ fontSize: 60, color: '#00e676' }} />
        </Box>
    );
};

export default SuccessCustomIcon;
