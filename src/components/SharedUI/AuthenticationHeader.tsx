import { Box, Typography } from '@mui/material'
import React from 'react'
import appConfig, { logo } from '../../config/app';
type Props = {}

const AuthenticationHeader = (props: Props) => {
    return (
        <Box display={'flex'} alignItems={'center'} >
            <img src={logo} alt='logo' width='50px' />
            <Typography variant="h6" ml={1} color={'white'}>
                {appConfig.THEME_DIGITAL_CURRENCY_NAME}
            </Typography>
        </Box>
    )
}

export default AuthenticationHeader