import {
    Slide,
    Snackbar,
    SnackbarCloseReason,
    SnackbarContentProps
} from '@material-ui/core'

interface SnackbarMessageProps {
    open: boolean
    message: SnackbarContentProps['message']
    onClose: (
        event: React.SyntheticEvent<any>,
        reason: SnackbarCloseReason
    ) => void
}

// Simple message for users
export const SnackbarMessage = ({
    open,
    message,
    onClose
}: SnackbarMessageProps) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            onClose={onClose}
            message={message}
            autoHideDuration={4000}
        />
    )
}
