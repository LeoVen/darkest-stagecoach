import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const MainSection = styled(Paper)`
    padding: 2rem;
    background-color: var(--bg-primary);
`

export const ButtonsGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
`
