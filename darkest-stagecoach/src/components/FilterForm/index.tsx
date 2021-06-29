import {
    Button,
    createMuiTheme,
    TextField,
    ThemeProvider
} from '@material-ui/core'
import React from 'react'
import { THEME } from '../../theme'
import { FilterBy } from '../../Types'
import { ClassProfileIcon } from '../ClassProfileIcons'
import { FormSection, IconButton, MainSection, SectionTitle } from './styles'

const FILTER_THEME = createMuiTheme(
    {
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontFamily: 'Mate SC',
                    fontSize: '0.8rem',
                    backgroundColor: 'var(--bg-secondary)'
                },
                arrow: {
                    '&:before': {
                        backgroundColor: 'var(--bg-secondary)'
                    }
                }
            }
        },
        palette: {
            primary: {
                main: '#d3552e'
            },
            secondary: {
                main: '#2f3129'
            }
        }
    },
    THEME
)

interface FilterFormProps {
    filterBy: FilterBy
    filterChange: (filter: FilterBy) => void
    onSubmit: () => void
}

export const FilterForm = ({
    filterBy,
    filterChange,
    onSubmit
}: FilterFormProps) => {
    const threeWayValueWrap = (value?: boolean): boolean | undefined => {
        if (value !== undefined && value) return false
        else if (value !== undefined && !value) return undefined
        else return true
    }
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        filterBy.name = e.currentTarget.value
        filterChange(filterBy)
    }
    const handleReligiousChange = () => {
        filterBy.religious = threeWayValueWrap(filterBy.religious)
        filterChange(filterBy)
    }
    const handleTransformChange = () => {
        filterBy.transform = threeWayValueWrap(filterBy.transform)
        filterChange(filterBy)
    }

    return (
        <ThemeProvider theme={FILTER_THEME}>
            <MainSection>
                <FormSection>
                    <TextField
                        id="filter-name"
                        label="Name"
                        onChange={handleNameChange}
                        value={filterBy.name}
                    />
                </FormSection>
                <FormSection>
                    <SectionTitle variant="h4">Characteristics</SectionTitle>
                    <IconButton
                        className="cursor-pointer"
                        onClick={handleReligiousChange}
                        selected={filterBy.religious}>
                        <ClassProfileIcon
                            type="religious"
                            style={{ padding: '6px 0px', minWidth: '64px' }}
                        />
                    </IconButton>
                    <IconButton
                        className="cursor-pointer"
                        onClick={handleTransformChange}
                        selected={filterBy.transform}>
                        <ClassProfileIcon
                            type="transform"
                            style={{ padding: '6px 0px', minWidth: '64px' }}
                        />
                    </IconButton>
                </FormSection>
                <Button onClick={onSubmit}>Ok</Button>
            </MainSection>
        </ThemeProvider>
    )
}
