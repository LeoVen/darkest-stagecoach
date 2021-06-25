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

export const ClassCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin: 1rem;
`
