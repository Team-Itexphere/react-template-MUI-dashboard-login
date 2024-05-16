// ResponsiveModal.tsx
import React, { ReactNode } from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface Action {
    label: string;
    handler: () => void;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant?: 'contained' | 'outlined' | 'text'
}

interface ResponsiveModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    icon?: ReactNode;
    actions?: Action[];
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
}

const ResponsiveModal: React.FC<ResponsiveModalProps> = ({
    open,
    onClose,
    title,
    description,
    icon,
    actions,
    maxWidth = 'xs',
    fullWidth = true,
    sx,
}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth={fullWidth} sx={sx}>
            <Box py={3}>
                <DialogContent>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        {icon && <Box mb={2}>{icon}</Box>}
                        <Typography variant="h5" color="secondary.main" fontWeight={'bold'} align="center" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body2" align="center">
                            {description}
                        </Typography>
                    </Box>
                </DialogContent>
                {actions && (
                    <DialogActions sx={{ justifyContent: 'center', padding: 2 }}>
                        {actions.map((action, index) => (
                            <Button
                                key={index}
                                onClick={action.handler}
                                color={action.color || 'primary'}
                                variant={action.variant || "contained"}
                                sx={{ width: 150 }}
                            // fullWidth
                            >
                                {action.label}
                            </Button>
                        ))}
                    </DialogActions>
                )}
            </Box>

        </Dialog>
    );
};

export default ResponsiveModal;
