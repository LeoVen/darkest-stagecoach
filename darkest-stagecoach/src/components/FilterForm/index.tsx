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
import { OriginalHeroIcon } from '../OriginalHeroIcon'
import { SynergyIcon } from '../SynergyIcon'
import {
    BottomButtons,
    CharacteristicsSection,
    FormContainedSections,
    FormSection,
    MainSection,
    SectionTitle,
    SelectionBox,
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
    const handleReset = () => {
        filterChange({
            name: '',
            synergies: new Map()
        })
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
    const handleOriginalHeroChange = () => {
        filterBy.originalHero = threeWayValueWrap(filterBy.originalHero)
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
                <FormContainedSections>
                    <FormSection>
                        <TextField
                            id="filter-name"
                            label="Name"
                            onChange={handleNameChange}
                            value={filterBy.name}
                        />
                    </FormSection>
                    <FormSection>
                        <SectionTitle variant="h4">
                            Characteristics
                        </SectionTitle>
                        <CharacteristicsSection>
                            <SelectionBox
                                onClick={handleReligiousChange}
                                selected={filterBy.religious}>
                                <ClassProfileIcon
                                    type="religious"
                                    style={{
                                        padding: '9.5px 16px'
                                    }}
                                />
                            </SelectionBox>
                            <SelectionBox
                                onClick={handleTransformChange}
                                selected={filterBy.transform}>
                                <ClassProfileIcon
                                    type="transform"
                                    style={{
                                        padding: '9.5px 16px'
                                    }}
                                />
                            </SelectionBox>
                            <SelectionBox
                                onClick={handleOriginalHeroChange}
                                selected={filterBy.originalHero}>
                                <OriginalHeroIcon
                                    style={{
                                        padding: '6px 12px'
                                    }}
                                />
                            </SelectionBox>
                        </CharacteristicsSection>
                    </FormSection>
                    <FormSection>
                        <SectionTitle variant="h4">
                            Combat Skills Synergy
                        </SectionTitle>
                        <SynergiesSection>
                            {synergies.map(s => {
                                return (
                                    <SelectionBox
                                        key={`form-synergy-${s}`}
                                        selected={filterBy.synergies.get(s)}
                                        onClick={() => handleSynergyClick(s)}>
                                        <SynergyIcon
                                            icon={s}
                                            style={{
                                                padding: '6px 12px'
                                            }}
                                        />
                                    </SelectionBox>
                                )
                            })}
                        </SynergiesSection>
                    </FormSection>
                </FormContainedSections>
                <BottomButtons>
                    <Button
                        onClick={handleReset}
                        style={{ border: '1px solid var(--bg-secondary)' }}>
                        Reset
                    </Button>
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
