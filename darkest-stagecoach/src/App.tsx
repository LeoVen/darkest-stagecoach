import React from 'react'
import {
    createMuiTheme,
    Modal,
    Paper,
    ThemeProvider,
    Typography
} from '@material-ui/core'
import { AllClasses } from './data'
import { Header } from './components/Header'
import ClassMod from './data/ClassMod'
import { ClassCard } from './components/ClassCard'
import iconClose from './assets/img/iconClose.png'

const theme = createMuiTheme({
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
            color: '#CCCCCC',
            wordWrap: 'break-word'
        },
        subtitle2: {
            fontFamily: 'Mate SC',
            color: '#CCCCCC',
            wordWrap: 'break-word',
            marginBottom: '20px'
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
    const [selectedHero, setSelectedHero] =
        React.useState<ClassMod | null>(null)

    const handleOpenModal = (classMod: ClassMod) => {
        setSelectedHero(classMod)
    }

    const handleCloseModal = () => {
        setSelectedHero(null)
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: theme.palette.background.default }}>
                <Header />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {AllClasses.map(hero => {
                        return (
                            <>
                                <Paper
                                    key={hero.name}
                                    className="paper-with-shadow"
                                    elevation={5}
                                    onClick={() => handleOpenModal(hero)}
                                    style={{
                                        margin: '1em',
                                        padding: '1em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '300px'
                                    }}>
                                    <img
                                        src={hero.hero}
                                        style={{
                                            margin: '1em',
                                            maxWidth: 'calc(100vw - 6em)'
                                        }}
                                        alt="Hero Image"
                                    />
                                    <Typography variant="h3">
                                        {hero.name}
                                    </Typography>
                                </Paper>
                                <Modal
                                    open={
                                        selectedHero !== null &&
                                        selectedHero.name === hero.name
                                    }
                                    onClose={handleCloseModal}>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '80vw',
                                            maxWidth: '1280px'
                                        }}>
                                        <a onClick={handleCloseModal}>
                                            <img
                                                src={iconClose}
                                                alt="Icon Close"
                                                style={{
                                                    position: 'absolute',
                                                    top: '1em',
                                                    right: '1em'
                                                }}
                                            />
                                        </a>
                                        <ClassCard classMod={hero} />
                                    </div>
                                </Modal>
                            </>
                        )
                    })}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
