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
                cursor: "url('assets/cursor/pointer.png'), auto"
            }
        }
    },
    typography: {
        h1: {
            fontFamily: 'Mate SC',
            fontSize: '2.5em',
            color: '#CCCCCC',
            marginRight: '1em'
        },
        h2: {
            fontFamily: 'Mate SC',
            fontSize: '2em',
            color: '#CCCCCC'
        },
        h3: {
            fontFamily: 'Mate SC',
            fontSize: '1.5em',
            color: '#CCCCCC'
        },
        subtitle1: {
            fontFamily: 'Mate SC',
            fontSize: '1.2em',
            color: '#CCCCCC',
            wordWrap: 'break-word'
        },
        subtitle2: {
            fontFamily: 'Mate SC',
            fontSize: '1.1em',
            color: '#CCCCCC',
            wordWrap: 'break-word',
            marginBottom: '20px'
        },
        body1: {
            fontFamily: 'Mate SC',
            fontSize: '1em',
            color: '#CCCCCC',
            wordWrap: 'break-word'
        }
    },
    palette: {
        background: {
            default: '#2F3129',
            paper: '#272822'
        }
    }
})
