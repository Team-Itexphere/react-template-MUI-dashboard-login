import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
    borderRadius?: number; // Add borderRadius prop
}

interface StyledButtonProps extends ButtonProps {
    borderRadius?: number;
}

const StyledButton = styled(({ borderRadius, ...other }: StyledButtonProps) => <Button {...other} />)(
    ({ theme, borderRadius, variant, color }: { theme: Theme; borderRadius?: number; variant?: string; color?: string }) => ({
        padding: theme.spacing(1),
        borderRadius: borderRadius !== undefined ? borderRadius : theme.shape.borderRadius * 3, // Use borderRadius prop or default to theme
        fontWeight: 'normal',
        fontSize: 17,
        textTransform: 'none',
        ...(variant === 'contained' && color === 'primary' && {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.primary.dark,
            },
        }),
        ...(variant === 'outlined' && color === 'secondary' && {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
            '&:hover': {
                borderColor: theme.palette.secondary.dark,
                color: theme.palette.secondary.dark,
            },
        }),
    })
);

const CustomButton: React.FC<CustomButtonProps> = ({ children, borderRadius, ...props }) => {
    return <StyledButton borderRadius={borderRadius} {...props}>{children}</StyledButton>;
};

export default CustomButton;
