import styled from 'styled-components'

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80vh;
    max-width: 1280px;
    overflow-y: auto;
    width: 95%;
`

export const ClassCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin: 1rem;
`
