import React from 'react'

interface SnackbarContextProps {
    setMessage: (message: string) => void
}

// Snackbar message that can be used anywhere in the application
export const SnackbarContext = React.createContext<
    SnackbarContextProps | undefined
>(undefined)
