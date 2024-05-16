import React, { ChangeEvent, useState } from 'react';
import { Box, Typography, TextField, Button, styled, OutlinedInput, InputAdornment } from '@mui/material';
import { EmailOutlined, LockClockOutlined } from '@mui/icons-material';
import TextBox from 'components/TextBox';
import { customColors } from 'theme';
import AuthenticationHeader from 'components/SharedUI/AuthenticationHeader';
import { StyledBox, MainContainer } from '../../layouts/LayoutComponents/StyledComponents';
import CustomButton from 'components/Button';

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

const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

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
                            Sign In
                        </Typography>

                        <TextBox
                            title="Your E-mail Address"
                            placeholder="jhondoe@gmail.com"
                            value={email}
                            onChange={handleEmailChange}
                            titleIcon={<EmailOutlined />}
                        // startAdornment={<EmailIcon />}
                        // required
                        // error={!!emailError}
                        // helperText={emailError || 'Please enter your email address'}
                        />
                        <TextBox
                            title="Password"
                            placeholder="*****"
                            value={email}
                            onChange={handleEmailChange}
                            titleIcon={<LockClockOutlined />}
                        />
                        <ItalicTypography variant="body2">
                            Forgot Password?
                        </ItalicTypography>

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
    );
};

export default Login;