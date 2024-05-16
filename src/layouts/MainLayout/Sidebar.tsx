import React, { ReactElement, useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Box,
    ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from 'theme';
import AuthenticationHeader from 'components/SharedUI/AuthenticationHeader';
import { KeyboardArrowDown, KeyboardArrowUp, CardTravelOutlined, PeopleAlt, SwapVert, HouseOutlined, SettingsOutlined, PowerSettingsNew } from '@mui/icons-material';

type itemType = { icon: ReactElement, label: string, navigation: string }

const mainSideNav = [
    { icon: <HouseOutlined />, label: 'Overview', navigation: 'user-management' },
    { icon: <CardTravelOutlined />, label: 'Planning', navigation: 'access-tokens' },
    { icon: <PeopleAlt />, label: 'Members', navigation: 'ach-topup-ids' },
    { icon: <SwapVert />, label: 'Transactions', navigation: 'user-cards' },
];
const settingsSideNav = [
    { icon: <SettingsOutlined />, label: 'Settings', navigation: 'user-management' },
    { icon: <PowerSettingsNew />, label: 'LogOut', navigation: 'access-tokens' },
];

// const backgroundImageUrl = require('../../assets/imgs/loginbg.png');

const MainWrapper = styled(Box)(({ theme }) => ({
    // backgroundImage: `url(${backgroundImageUrl})`,
    // backgroundSize: 'center',
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
    width: '100%',
    borderRadius: theme.spacing(2),
}));



const Sidebar = () => {
    const [openSettings, setOpenSettings] = useState(true);
    const [expanded, setExpanded] = React.useState(true);
    const [selectedItem, setSelectedItem] = React.useState('Overview');

    const navigationSideNav = (item: itemType) => {
        // navigate(`/${navigation}`);
        setSelectedItem(item.label)
    };

    return (
        <MainWrapper>
            <Box sx={{ padding: 2, paddingTop: 4, paddingBottom: 4 }}>
                <AuthenticationHeader />
            </Box>

            <Box>
                <ListItemButton
                    onClick={() => setExpanded(!expanded)}
                    color='white'
                    sx={{ color: 'white' }}
                >
                    <ListItemText
                        primary={'Menu'}
                        primaryTypographyProps={{}}
                    />
                    {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </ListItemButton>

                {expanded && mainSideNav.map((item: itemType) => (
                    <ListItemButton
                        selected={item.label === selectedItem}
                        onClick={() => navigationSideNav(item)}
                        key={item.label}
                        sx={{ color: 'white', borderRadius: 20, marginX: 1 }}
                    >
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{}}
                        />
                    </ListItemButton>
                ))}
            </Box>

            <Box>
                <ListItemButton
                    onClick={() => setOpenSettings(!openSettings)}
                    color='white'
                    sx={{ color: 'white' }}
                >
                    <ListItemText
                        primary={'Settings'}
                        primaryTypographyProps={{}}
                    />
                    {openSettings ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </ListItemButton>

                {openSettings && settingsSideNav.map((item: itemType) => (
                    <ListItemButton
                        selected={item.label === selectedItem}
                        onClick={() => navigationSideNav(item)}
                        key={item.label}
                        sx={{ color: 'white', borderRadius: 20, marginX: 1 }}
                    >
                        <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{}}
                        />
                    </ListItemButton>
                ))}
            </Box>

        </MainWrapper>
    );
};

export default Sidebar;