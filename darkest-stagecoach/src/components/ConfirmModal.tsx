import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from '@material-ui/core'

interface ConfirmModalProps {
    open: boolean
    title?: string
    confirmText?: string
    cancelText?: string
    children: React.ReactNode
    onClose: () => void
    onConfirm: () => void
}

export const ConfirmModal = ({
    open,
    title,
    confirmText,
    cancelText,
    children,
    onClose,
    onConfirm
}: ConfirmModalProps) => {
    return (
        <Dialog open={open} onClose={onClose}>
            {!!title && (
                <DialogTitle>
                    <Typography variant="body1">{title}</Typography>
                </DialogTitle>
            )}
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={onConfirm}>
                    {confirmText ?? 'Confirm'}
                </Button>
                <Button variant="outlined" onClick={onClose}>
                    {cancelText ?? 'Cancel'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
