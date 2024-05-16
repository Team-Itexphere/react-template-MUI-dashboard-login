import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { styled } from '@mui/system';
import React from 'react'
import { NotificationsNone, ArrowDropDown } from '@mui/icons-material';

type Props = {}

const MainWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover': { backgroundColor: theme.palette.secondary.main }
}));

const Header = (props: Props) => {
    return (
        <MainWrapper>

            <Avatar sx={{ bgcolor: deepOrange[500] }}>SE</Avatar>
            <Typography flexGrow={1} ml={1} variant="h6" color="secondary.main" fontWeight={'bold'}>Welcome Supervalue Owner Jacob Miller!</Typography>

            <Box display={'flex'}>
                <IconButtonWrapper >
                    <NotificationsNone />
                </IconButtonWrapper>

                <Box display={'flex'} ml={1}>
                    <Avatar sx={{ bgcolor: "secondary.main" }}>OP</Avatar>
                    <Box ml={1}>
                        <Typography variant='body1' fontSize={12} color="secondary.main" >Owner</Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography variant='body2' fontSize={12} fontWeight={'bold'}>Jacob Miler</Typography>
                            <ArrowDropDown />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </MainWrapper>
    )
}

export default Header