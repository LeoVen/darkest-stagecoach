import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const MainSection = styled.div`
    width: 100%;
`

export const FormSection = styled.div`
    width: 100%;
    margin: 1rem 0rem 1rem 0;
`

export const SectionTitle = styled(Typography)`
    margin: 1rem 0 0.5rem 0;
`

export const IconButton = styled(Button)<{ selected?: boolean }>`
    padding: 0;
    background-color: var(--bg-secondary);
    margin-right: 1rem;

    border: 1px solid
        ${props =>
            props.selected !== undefined
                ? props.selected
                    ? 'var(--selected-green)'
                    : 'var(--selected-red)'
                : 'var(--bg-secondary)'};
`

export const BottomButtons = styled.div`
    margin-top: 2rem;
`

export const SynergiesSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
