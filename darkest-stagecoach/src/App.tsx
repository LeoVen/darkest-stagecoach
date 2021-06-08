import {
    createMuiTheme,
    Paper,
    ThemeProvider,
    Typography
} from '@material-ui/core'
import React from 'react'
import './App.css'
import { AllClasses } from './data'

const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: 'Mate SC',
            fontSize: '2em',
            color: '#CCCCCC',
            margin: '0.5em',
        },
        h2: {
            fontFamily: 'Mate SC',
            fontSize: '1.5em',
            color: '#CCCCCC'
        },
        subtitle1: {
            fontFamily: 'Mate SC',
            color: '#CCCCCC',
            margin: '1em',
            wordWrap: 'break-word',
        },
    },
    palette: {
        background: {
            default: '#2F3129',
            paper: '#272822'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: theme.palette.background.default }}>
                <div style={{display: 'flex', alignItems: 'baseline', flexWrap: 'wrap'}}>
                    <Typography variant='h1'>
                        Darkest Stagecoach
                    </Typography>
                    <Typography variant='subtitle1'>
                        A place to explore class mods for the Darkest Dungeon game
                    </Typography>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {AllClasses.map(hero => {
                        return (
                            <Paper
                                elevation={2}
                                style={{ margin: '1em', padding: '1em' }}>
                                <Typography variant='h2'>
                                    {hero.name}
                                </Typography>
                                <img src={hero.image} style={{margin: '1em', maxWidth: 'calc(100vw - 6em)'}}/>
                            </Paper>
                        )
                    })}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
