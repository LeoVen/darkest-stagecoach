import { createMuiTheme } from '@material-ui/core'

export const THEME = createMuiTheme({
    overrides: {
        MuiAccordionSummary: {
            root: {
                padding: '0'
            },
            content: {
                margin: '0'
            },
            expandIcon: {
                marginRight: '8px'
            }
        },
        MuiButtonBase: {
            root: {
                cursor: '--var(--cursor-pointer)'
            }
        }
    },
    typography: {
        h1: {
            fontFamily: 'Mate SC',
            fontSize: '2.5em',
            color: 'var(--font-primary)',
            marginRight: '1em'
        },
        h2: {
            fontFamily: 'Mate SC',
            fontSize: '2em',
            color: 'var(--font-primary)'
        },
        h3: {
            fontFamily: 'Mate SC',
            fontSize: '1.5em',
            color: 'var(--font-primary)'
        },
        h4: {
            fontFamily: 'Mate SC',
            fontSize: '1.2em',
            color: 'var(--font-primary)',
            wordWrap: 'break-word',
            marginTop: '1.5rem'
        },
        subtitle1: {
            fontFamily: 'Mate SC',
            fontSize: '1.2em',
            color: 'var(--font-primary)',
            wordWrap: 'break-word'
        },
        subtitle2: {
            fontFamily: 'Mate SC',
            fontSize: '1.1em',
            color: 'var(--font-primary)',
            wordWrap: 'break-word',
            marginBottom: '20px'
        },
        body1: {
            fontFamily: 'Mate SC',
            fontSize: '1em',
            color: 'var(--font-primary)',
            wordWrap: 'break-word'
        }
    },
    palette: {
        background: {
            default: 'var(--bg-primary)',
            paper: 'var(--bg-secondary)'
        }
    }
})
