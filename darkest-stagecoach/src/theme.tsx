import { createTheme } from '@mui/material'

export const AppTheme = {
    bgPrimary: '#2f3129',
    bgSecondary: '#272822',
    accentPrimary: '#d3552e',
    accentSecondary: '#5e3124',
    accentHover: '#ff6738',
    fontPrimary: '#cccccc',
    fontDisabled: '#444444',
    selectedRed: '#b11900',
    selectedGreen: '#00d7a2'
}

export const THEME = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: AppTheme.accentPrimary
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    backgroundColor: AppTheme.bgPrimary,
                },
                shrink: {
                    color: `${AppTheme.accentHover} !important`,
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: AppTheme.accentPrimary
                },
                underline: {
                    '&:before': {
                        borderBottomColor: AppTheme.accentHover,
                    },
                    '&:after': {
                        borderBottomColor: AppTheme.accentHover,
                    },
                    '&:hover:before': {
                        borderBottomColor: `${AppTheme.accentHover} !important`,
                    },
                },
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: '0'
                },
                content: {
                    margin: '0'
                },
                expandIconWrapper: {
                    marginRight: '8px'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    cursor: 'var(--cursor-pointer)'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: AppTheme.fontPrimary
                },
                outlined: {
                    borderColor: AppTheme.accentPrimary
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontFamily: 'Mate SC',
                    fontSize: '0.8rem',
                    backgroundColor: AppTheme.bgPrimary
                },
                arrow: {
                    '&:before': {
                        backgroundColor: AppTheme.bgPrimary
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    padding: '0'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: ({ ownerState }) =>
                    ownerState.anchor === 'bottom' ? { maxHeight: '50vh' } : {}
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: AppTheme.fontPrimary,
                    fontWeight: 'bold'
                },
                body: {
                    color: AppTheme.fontPrimary
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: AppTheme.bgPrimary,
                    color: AppTheme.fontPrimary
                }
            }
        }
    },
    typography: {
        h1: {
            fontFamily: 'Mate SC',
            fontSize: '2.5em',
            color: AppTheme.fontPrimary,
            marginRight: '1em'
        },
        h2: {
            fontFamily: 'Mate SC',
            fontSize: '2em',
            color: AppTheme.fontPrimary
        },
        h3: {
            fontFamily: 'Mate SC',
            fontSize: '1.5em',
            color: AppTheme.fontPrimary
        },
        h4: {
            fontFamily: 'Mate SC',
            fontSize: '1.2em',
            color: AppTheme.fontPrimary,
            wordWrap: 'break-word',
            marginTop: '1.5rem'
        },
        subtitle1: {
            fontFamily: 'Mate SC',
            fontSize: '1.2em',
            color: AppTheme.fontPrimary,
            wordWrap: 'break-word'
        },
        subtitle2: {
            fontFamily: 'Mate SC',
            fontSize: '1.1em',
            color: AppTheme.fontPrimary,
            wordWrap: 'break-word',
            marginBottom: '20px'
        },
        body1: {
            fontFamily: 'Mate SC',
            fontSize: '1em',
            color: AppTheme.fontPrimary,
            wordWrap: 'break-word'
        }
    },
    palette: {
        background: {
            default: AppTheme.bgPrimary,
            paper: AppTheme.bgSecondary
        }
    }
})
