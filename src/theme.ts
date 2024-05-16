import { createTheme } from '@mui/material/styles';

// Define your custom colors
export const customColors = {
    customPrimary: '#2196f3',
    customSecondary: '#12365A',
    customError: '#f44336',
    lightGray: '#f5f5f5'
    // Add more custom colors as needed
};

// Create a custom theme with your custom styles
const theme = createTheme({
    palette: {
        primary: {
            main: customColors.customPrimary,
        },
        secondary: {
            main: customColors.customSecondary,
        },
        error: {
            main: customColors.customError,
        },
        info: {
            main: customColors.lightGray,
            contrastText: customColors.customPrimary,
        }

        // Add more palette colors or other styles as needed
    },
    typography: {
        // Customize typography styles
    },
    spacing: 8, // Default spacing factor (can be used with multiples like spacing(2), spacing(3), etc.)
    shape: {
        borderRadius: 8, // Default border radius for components
    },
    // Add more custom styles as needed
});

export default theme;