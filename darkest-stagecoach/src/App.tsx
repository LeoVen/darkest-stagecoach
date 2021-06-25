import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { Header } from './components/Header'
import ClassMod from './data/ClassMod'
import { ClassCardsContainer } from './styles'
import { THEME } from './theme'
import { ActionButtons } from './components/ActionButtons'
import { ClassModFilter, SortBy } from './Types'
import { sortClassMods } from './Sorting'
import { ClassModIndex } from './data/ClassModIndex'
import { ClassCard } from './components/ClassCard'

function App() {
    const [classMods, setClassMods] = React.useState<string[]>(
        Array.from(ClassModIndex().keys())
    )
    const [selectedClass, setSelectedClass] = React.useState<
        ClassMod | undefined
    >(undefined)
    const [filter, setFilter] = React.useState<ClassModFilter>({})
    const [sort, setSort] = React.useState<SortBy>({
        key: 'name',
        sortDirection: 1,
        levelRef: 0
    })

    const handleOpenModal = (classMod: ClassMod) => {
        setSelectedClass(classMod)
    }
    const handleCloseModal = () => {
        setSelectedClass(undefined)
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
                    {classMods.map((classKey, i) =>
                        ClassCard({
                            classKey: classKey,
                            index: i,
                            selectedClass: selectedClass,
                            handleOpenModal: handleOpenModal,
                            handleCloseModal: handleCloseModal
                        })
                    )}
                </ClassCardsContainer>
            </div>
        </ThemeProvider>
    )
}

export default App
