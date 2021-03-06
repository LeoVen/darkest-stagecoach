import React from 'react'
import { StylesProvider, ThemeProvider } from '@material-ui/core'
import ClassMod from './data/ClassMod'
import { ClassCardsContainer } from './styles'
import { THEME } from './theme'
import { ActionButtons } from './components/ActionButtons'
import { FilterBy, SortBy } from './Types'
import { sortClassMods } from './Sorting'
import { classModIndex } from './data/ClassModIndex'
import { ClassCard } from './components/ClassCard'
import { ScrollTopButton } from './components/ScrollTopButton'
import { filterClassMods } from './Filtering'
import { MainHeader } from './components/MainHeader'
import { SnackbarMessage } from './components/SnackbarMessage'
import { SnackbarContext } from './services/SnackbarService'
import { ClassModalWrapper } from './components/ClassModal/wrapper'

export const App = () => {
    const [filter, setFilter] = React.useState<FilterBy>({
        name: '',
        synergies: new Map()
    })
    const [sort, setSort] = React.useState<SortBy>({
        key: 'name',
        sortDirection: 1,
        levelRef: 0
    })
    const [classMods, setClassMods] = React.useState<string[]>(
        Array.from(sortClassMods(Array.from(classModIndex().keys()), sort))
    )
    const [selectedClass, setSelectedClass] = React.useState<
        ClassMod | undefined
    >(undefined)

    const [snackbarMessage, setSnackbarMessage] = React.useState<
        string | undefined
    >(undefined)

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
    const handleFilterChange = (filterBy: FilterBy) => {
        setClassMods(
            sortClassMods(
                filterClassMods(Array.from(classModIndex().keys()), filterBy),
                sort
            )
        )
        setFilter(filterBy)
    }

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={THEME}>
                <SnackbarContext.Provider
                    value={{
                        setMessage: (message: string) =>
                            setSnackbarMessage(message)
                    }}>
                    <div
                        style={{
                            backgroundColor: THEME.palette.background.default
                        }}>
                        <MainHeader />
                        <ActionButtons
                            filter={filter}
                            sort={sort}
                            onSortChange={sortBy => handleSortChange(sortBy)}
                            onFilterChange={filterBy =>
                                handleFilterChange(filterBy)
                            }
                        />
                        <ScrollTopButton />
                        <ClassCardsContainer>
                            {classMods.map((classKey, i) =>
                                ClassCard({
                                    classKey: classKey,
                                    index: i,
                                    handleOpenModal: handleOpenModal,
                                })
                            )}
                        </ClassCardsContainer>
                        <SnackbarMessage
                            open={!!snackbarMessage}
                            message={snackbarMessage || ''}
                            onClose={() => setSnackbarMessage(undefined)}
                        />
                    </div>
                    <ClassModalWrapper
                        classMod={selectedClass}
                        handleCloseModal={handleCloseModal} />
                </SnackbarContext.Provider>
            </ThemeProvider>
        </StylesProvider>
    )
}
