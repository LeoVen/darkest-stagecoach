import React from 'react'
import { Fade, Modal, ThemeProvider, Typography } from '@material-ui/core'
import { Header } from './components/Header'
import ClassMod from './data/ClassMod'
import { ClassCard } from './components/ClassCard'
import { ModalCloseButton } from './components/ModalCloseButton'
import {
    BottomIcons,
    ClassCardsContainer,
    HeroCard,
    ModalWrapper
} from './styles'
import { THEME } from './theme'
import { ActionButtons } from './components/ActionButtons'
import { ClassModFilter, SortBy } from './Types'
import { sortClassMods } from './Sorting'
import { classModIndex, ClassModIndex } from './data/ClassModIndex'
import { SynergyIcons } from './components/SynergyIcon'

function App() {
    const [classMods, setClassMods] = React.useState<string[]>(
        Array.from(ClassModIndex().keys())
    )
    const [selectedHero, setSelectedHero] = React.useState<ClassMod | null>(
        null
    )
    const [filter, setFilter] = React.useState<ClassModFilter>({})
    const [sort, setSort] = React.useState<SortBy>({
        key: 'name',
        sortDirection: 1,
        levelRef: 0
    })

    const handleOpenModal = (classMod: ClassMod) => {
        setSelectedHero(classMod)
    }
    const handleCloseModal = () => {
        setSelectedHero(null)
    }
    const handleSortChange = (sortBy: SortBy) => {
        setClassMods(sortClassMods(classMods, sortBy))
        setSort(sortBy)
    }

    return (
        <ThemeProvider theme={THEME}>
            <div style={{ backgroundColor: THEME.palette.background.default }}>
                <Header />
                <ActionButtons
                    filter={filter}
                    sort={sort}
                    onSortChange={sortBy => handleSortChange(sortBy)}
                />
                <ClassCardsContainer>
                    {classMods.map((heroKey, i) => {
                        let hero = classModIndex.get(heroKey) as ClassMod
                        return (
                            <div
                                key={`${hero.name}-${i}`}
                                style={{ position: 'relative' }}>
                                <HeroCard
                                    elevation={5}
                                    onClick={() => handleOpenModal(hero)}>
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
                                </HeroCard>
                                <BottomIcons>
                                    <SynergyIcons synergies={hero.synergy} />
                                </BottomIcons>
                                <Modal
                                    open={
                                        selectedHero !== null &&
                                        selectedHero.name === hero.name
                                    }
                                    onClose={handleCloseModal}>
                                    <Fade
                                        in={
                                            selectedHero !== null &&
                                            selectedHero.name === hero.name
                                        }
                                        timeout={400}
                                        exit={false}>
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
                                    </Fade>
                                </Modal>
                            </div>
                        )
                    })}
                </ClassCardsContainer>
            </div>
        </ThemeProvider>
    )
}

export default App
