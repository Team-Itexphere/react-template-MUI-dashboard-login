import React, { ChangeEvent } from 'react';
import { OutlinedInput, InputAdornment, Typography, styled, InputProps, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { customColors } from 'theme';

interface TextBoxProps extends InputProps {
    title?: string;
    placeholder?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: React.ReactNode;
    titleIcon?: React.ReactNode; // New prop for the icon
}

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    borderRadius: 12,
    marginBottom: 10,
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: customColors.customPrimary,
        borderWidth: 2,
    },
}));

const TextBox: React.FC<TextBoxProps> = ({
    title,
    placeholder,
    startAdornment,
    endAdornment,
    fullWidth = true,
    required = false,
    disabled = false,
    error = false,
    helperText,
    value,
    onChange,
    titleIcon,
    ...otherProps
}) => {
    return (
        <div>
            <Box py={1} color={customColors.customPrimary} display={title ? 'flex' : 'none'} alignItems={'center'}>
                {titleIcon && (titleIcon)}
                <Typography variant="body2" color={customColors.customPrimary} ml={1}>
                    {title}
                </Typography>
            </Box>

            <StyledOutlinedInput
                placeholder={placeholder}
                startAdornment={startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>}
                endAdornment={endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>}
                fullWidth={fullWidth}
                required={required}
                disabled={disabled}
                error={error}
                value={value}
                onChange={onChange}
                {...otherProps}
            />
            {helperText && <Typography variant="caption" color={error ? 'error' : 'textSecondary'}>{helperText}</Typography>}
        </div>
    );
};

export default TextBox;