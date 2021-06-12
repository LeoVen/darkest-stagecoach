import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80vh;
    overflow-y: auto;
`

export const HeroCard = styled(Paper)`
    margin: 1em;
    padding: 1em;
    display: flex;
    align-items: center;
    width: 300px;

    &:hover {
        box-shadow: 0px 3px 5px -1px var(--accent-secondary),
            0px 5px 8px 0px var(--accent-secondary),
            0px 1px 14px 0px var(--accent-secondary);
    }

    &:hover,
    & *:hover {
        cursor: var(--cursor-pointer);
    }
`
