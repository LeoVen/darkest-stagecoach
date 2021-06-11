import React from 'react'
import { Modal, Paper, ThemeProvider, Typography } from '@material-ui/core'
import { AllClasses } from './data'
import { Header } from './components/Header'
import ClassMod from './data/ClassMod'
import { ClassCard } from './components/ClassCard'
import { ModalCloseButton } from './components/ModalCloseButton'
import { ModalWrapper } from './styles'
import { THEME } from './theme'

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
        <ThemeProvider theme={THEME}>
            <div style={{ backgroundColor: THEME.palette.background.default }}>
                <Header />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {AllClasses.map((hero, i) => {
                        return (
                            <div key={`${hero.name}-${i}`}>
                                <Paper
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
                                        src={hero.portrait}
                                        style={{
                                            margin: '1em',
                                            maxWidth: 'calc(100vw - 6em)'
                                        }}
                                        alt="Hero Portrait"
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
                                    <ModalWrapper
                                        style={{
                                            width: '80vw',
                                            maxWidth: '1280px'
                                        }}>
                                        <ModalCloseButton
                                            onClick={handleCloseModal}
                                        />
                                        <ClassCard
                                            key={`${hero.name}-card-${i}`}
                                            classMod={hero}
                                        />
                                    </ModalWrapper>
                                </Modal>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App
