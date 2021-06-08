import React from 'react'
import {
    Button,
    createMuiTheme,
    Paper,
    ThemeProvider,
    Typography
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { AllClasses } from './data'

const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: 'Mate SC',
            fontSize: '2em',
            color: '#CCCCCC',
            marginRight: '1em'
        },
        h2: {
            fontFamily: 'Mate SC',
            fontSize: '1.5em',
            color: '#CCCCCC'
        },
        subtitle1: {
            fontFamily: 'Mate SC',
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: theme.palette.background.default }}>
                <header
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1em'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            flexWrap: 'wrap'
                        }}>
                        <Typography variant="h1">Darkest Stagecoach</Typography>
                        <Typography variant="subtitle1">
                            A place to explore class mods for the{' '}
                            <a href="https://www.darkestdungeon.com/">
                                Darkest Dungeon
                            </a>{' '}
                            game
                        </Typography>
                    </div>
                    <div>
                        <a href="https://github.com/LeoVen/darkest-stagecoach"
                           target='_blank'>
                            <FontAwesomeIcon icon={faGithub} size={'2x'} />
                        </a>
                    </div>
                </header>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {AllClasses.map(hero => {
                        return (
                            <Paper
                                key={hero.name}
                                elevation={5}
                                style={{
                                    margin: '1em',
                                    padding: '1em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '300px'
                                }}>
                                <img
                                    src={hero.image}
                                    style={{
                                        margin: '1em',
                                        maxWidth: 'calc(100vw - 6em)'
                                    }}
                                />
                                <Typography variant="h2">
                                    {hero.name}
                                </Typography>
                            </Paper>
                        )
                    })}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
