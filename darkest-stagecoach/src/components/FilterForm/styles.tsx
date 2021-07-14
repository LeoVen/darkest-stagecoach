import { Typography } from '@material-ui/core'
import styled from 'styled-components'

export const MainSection = styled.div`
    width: 100%;
    user-select: none;
`

export const FormContainedSections = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const FormSection = styled.div`
    margin: 1rem 0;
`

export const SectionTitle = styled(Typography)`
    margin: 1rem 0 0.5rem 0;
`

export const BottomButtons = styled.div`
    margin-top: 2rem;
`

export const SynergiesSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 400px;
`

export const CharacteristicsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 350px;
`

export const SelectionBox = styled.div<{ selected?: boolean }>`
    margin: 0.2rem;
    border-radius: 4px;
    border: 1px solid
        ${props =>
            props.selected === undefined
                ? 'var(--bg-secondary)'
                : props.selected
                ? 'var(--selected-green)'
                : 'var(--selected-red)'};
    & * {
        cursor: var(--cursor-pointer) !important;
    }
`
