import React, { ChangeEvent, useRef, useState } from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material';


import { customColors } from 'theme';
import TextBox from 'components/TextBox';
import AuthenticationHeader from 'components/SharedUI/AuthenticationHeader';
import CustomButton from 'components/Button';

type Props = {}
type VerifyNumber = {
    0: string
    1: string
    2: string
}

const StyledBox = styled(Box)(({ theme }) => ({
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

const MainContainer = styled(Box)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const backgroundImageUrl = require('../../assets/imgs/loginbg.png');
const ImageWrapper = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: theme.spacing(2),
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: `white`,
    [theme.breakpoints.down('md')]: {
        height: '300px',
    },
}));

const FormWrapper = styled(Box)(({ theme }) => ({
    flex: 1.3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(4),
}));

const ItalicTypography = styled(Typography)(({ theme }) => ({
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: customColors.customPrimary,
    textAlign: 'end',
    marginBottom: '15px'
}));

const VerificationCode = (props: Props) => {
    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: ""
    })
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null)
    ]

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);

        // Simulate email validation
        if (!value.includes('@')) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    return (
        <MainContainer>
            <StyledBox>
                <ImageWrapper>
                    <Box p={2} mt={6} borderRadius={2} textAlign={'left'}>
                        <AuthenticationHeader />
                        <Typography variant="h6" mb={1} mt={2} color={'#FFC72C'}>
                            Welcome to The Merchant Portal
                        </Typography>
                        <Typography variant="body2" lineHeight={1.2}>
                            The Merchant Portal (MP) is a platform for overseeing Sand Dollar
                            transactions, offering models for corporate structures and project
                            budgets, ensuring efficient management and analysis.
                        </Typography>
                    </Box>
                </ImageWrapper>
                <FormWrapper>
                    <Box bgcolor="#fff" p={4} >
                        <Typography textAlign={'left'} variant="h3" fontWeight={"bold"} color={'#12365A'} mb={2}>
                            Verification
                        </Typography>
                        <Typography variant="body2" textAlign={'left'}>
                            Enter the 6 digit verification code sent to
                        </Typography>
                        <Typography variant="body2" color={customColors.customPrimary} textAlign={'left'}>
                            johndoe@gmail.com
                        </Typography>

                        <Box display={'flex'} pt={9}>
                            {Object.keys(verifyNumber).map((key, index) => (
                                <TextBox
                                    type='number'
                                    key={key}
                                    ref={inputRefs[index]}
                                    value={email}
                                    sx={{ width: '50px', marginRight: 1 }}
                                    onChange={handleEmailChange}
                                    inputProps={{ maxLength: 1 }}
                                />
                            ))}
                            {Object.keys(verifyNumber).map((key, index) => (
                                <TextBox
                                    type='number'
                                    key={key}
                                    ref={inputRefs[index]}
                                    value={email}
                                    sx={{ width: '50px', marginRight: 1, marginLeft: index === 0 ? 3 : 0, }}
                                    onChange={handleEmailChange}
                                    inputProps={{ maxLength: 1 }}
                                />
                            ))}
                        </Box>



                        <Box display={'flex'} mb={5}>
                            <Typography variant="body2" >Resend Code</Typography>
                            <Typography variant="body2" ml={1} color={customColors.customPrimary}>00:29</Typography>
                        </Box>

                        <CustomButton variant="contained" color="primary" fullWidth>
                            Sign In
                        </CustomButton>
                        <Typography variant="body2" py={3} color={'lightgrey'} textAlign={'left'}>
                            This site is protected by reCAPTCHA and Google Privacy Policy.
                        </Typography>
                    </Box>
                </FormWrapper>

            </StyledBox>
        </MainContainer>
    )
}

export default VerificationCode