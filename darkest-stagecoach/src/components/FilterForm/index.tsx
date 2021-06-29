import {
    Button,
    createMuiTheme,
    TextField,
    ThemeProvider
} from '@material-ui/core'
import React from 'react'
import { CSSProperties } from 'react'
import { THEME } from '../../theme'
import { FilterBy, Synergy } from '../../Types'
import { ClassProfileIcon } from '../ClassProfileIcons'
import { SynergyIcon } from '../SynergyIcon'
import {
    BottomButtons,
    FormSection,
    IconButton,
    MainSection,
    SectionTitle,
    SynergiesSection
} from './styles'

const synergies: Synergy[] = [
    'bleed',
    'blight',
    'cure',
    'heal',
    'stress',
    'buff',
    'debuff',
    'block',
    'guard',
    'guardBreak',
    'reflect',
    'stun',
    'mark',
    'riposte',
    'stealth',
    'deStealth',
    'move',
    'moveSelf'
]

const synergyIconStyles = (selected?: boolean): CSSProperties => {
    return {
        margin: '0.2rem',
        border: `1px solid ${
            selected === undefined
                ? 'var(--bg-secondary)'
                : selected
                ? 'var(--selected-green)'
                : 'var(--selected-red)'
        }`,
        borderRadius: '4px'
    }
}

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
    const handleSynergyClick = (s: Synergy) => {
        let result = filterBy.synergies.get(s)
        if (result === undefined) filterBy.synergies.set(s, true)
        else if (result) filterBy.synergies.set(s, false)
        else filterBy.synergies.delete(s)

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
                <FormSection>
                    <SectionTitle variant="h4">
                        Combat Skills Synergy
                    </SectionTitle>
                    <SynergiesSection>
                        {synergies.map(s => {
                            return (
                                <div
                                    onClick={() => handleSynergyClick(s)}
                                    style={synergyIconStyles(
                                        filterBy.synergies.get(s)
                                    )}>
                                    <SynergyIcon
                                        key={`filter-synergy-${s}`}
                                        icon={s}
                                        style={{
                                            padding: '6px 12px'
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </SynergiesSection>
                </FormSection>
                <BottomButtons>
                    <Button
                        onClick={onSubmit}
                        style={{ border: '1px solid var(--bg-secondary)' }}>
                        Ok
                    </Button>
                </BottomButtons>
            </MainSection>
        </ThemeProvider>
    )
}
