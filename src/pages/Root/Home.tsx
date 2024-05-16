import { Box, Button, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material'
import Header from 'layouts/MainLayout/Header';

import React, { useState } from 'react'
import { Search, FilterAltOutlined, CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/system';
import { customColors } from 'theme';
import Sidebar from 'layouts/MainLayout/Sidebar';
import ResponsiveModal from 'components/modal/ResponsiveModal';
import SuccessCustomIcon from 'components/SharedUI/SuccessCustomIcon';
type Props = {}

const MainWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100vh',
    width: '100%',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    padding: '10px',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    marginRight: 10
}));

const CustomButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    '&:hover': { backgroundColor: theme.palette.secondary.main }
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
    backgroundColor: customColors.lightGray
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 'bold'
}));

const Home = (props: Props) => {
    const theme = useTheme();
    const drawerWidth = 240;

    const members: any = []
    // const members = [
    //     {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         email: 'john.doe@example.com',
    //         mobile: '+1 123 456 7890',
    //         role: 'Admin'
    //     },
    //     {
    //         firstName: 'Jane',
    //         lastName: 'Smith',
    //         email: 'jane.smith@example.com',
    //         mobile: '+1 987 654 3210',
    //         role: 'Member'
    //     },
    //     {
    //         firstName: 'Bob',
    //         lastName: 'Johnson',
    //         email: 'bob.johnson@example.com',
    //         mobile: '+1 555 555 5555',
    //         role: 'Member'
    //     },
    //     {
    //         firstName: 'Alice',
    //         lastName: 'Williams',
    //         email: 'alice.williams@example.com',
    //         mobile: '+1 777 888 9999',
    //         role: 'Member'
    //     }
    // ];

    return (
        <MainWrapper >
            <Box p={1} display={'flex'} width={'100%'}>
                {/* Sidebar section */}
                <Box width={drawerWidth} >
                    <Sidebar />
                </Box>

                {/* Main section */}
                <Box flexGrow={1} mx={1} pl={1} position={'relative'}>
                    {/* header */}
                    <Header />

                    {/* ~~~~~~~ Response Modal ~~~~~~~ */}
                    <ResponsiveModal
                        open={true}
                        onClose={() => { }}
                        icon={<SuccessCustomIcon />}
                        title="Member Successfully Created"
                        description="Your new members will receive an invitation by email."
                        actions={[
                            { label: 'Done', handler: () => { }, color: 'info' },
                            { label: 'Add Another', handler: () => { }, color: 'primary' }
                        ]}
                        maxWidth='sm'
                    />
                    {/* ~~~~~~~ Response Modal ~~~~~~~ */}


                    {/* Input with Buttons */}
                    <Box my={2} display={'flex'} justifyContent={'space-between'}>
                        <StyledPaper>
                            <StyledIconButton type="button" aria-label="search">
                                <Search />
                            </StyledIconButton>
                            <StyledInputBase
                                placeholder="Search here.."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                        </StyledPaper>

                        <Box display={'flex'}>
                            <CustomButton variant="contained" color="inherit" endIcon={<FilterAltOutlined />}>
                                Filter
                            </CustomButton>
                            <CustomButton2>
                                Add New Member
                            </CustomButton2>
                        </Box>
                    </Box>

                    {/* Table Section */}
                    <Paper sx={{ width: '100%', height: '85%', overflowY: 'hidden' }}>
                        <TableContainer>
                            <Table>
                                <StyledTableHead>
                                    <TableRow>
                                        <StyledTableCell>#</StyledTableCell>
                                        <StyledTableCell>MEMBER</StyledTableCell>
                                        <StyledTableCell>FIRST NAME</StyledTableCell>
                                        <StyledTableCell>LAST NAME</StyledTableCell>
                                        <StyledTableCell>EMAIL</StyledTableCell>
                                        <StyledTableCell>MOBILE</StyledTableCell>
                                        <StyledTableCell>ROLE</StyledTableCell>
                                    </TableRow>
                                </StyledTableHead>
                                <TableBody>
                                    {members.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={7} align="center">
                                                <Typography variant="h6" color="secondary.main" fontWeight={'bold'}>There are no any members yet</Typography>
                                                <Typography variant="body2" mb={5}>Add Members to start managing your Virtual Wallets</Typography>


                                                <Button variant="contained" color="primary">
                                                    ADD NEW MEMBER
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        members.map((member: any, index: any) => (
                                            <TableRow key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{index * 2}</TableCell>
                                                <TableCell>{member.firstName}</TableCell>
                                                <TableCell>{member.lastName}</TableCell>
                                                <TableCell>{member.email}</TableCell>
                                                <TableCell>{member.mobile}</TableCell>
                                                <TableCell>{member.role}</TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>
        </MainWrapper >
    )
}

export default Home