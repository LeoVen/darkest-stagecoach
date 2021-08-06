import styled from 'styled-components'

export const MainSection = styled.div`
    color: var(--font-primary);
`

export const PreviewSection = styled.div`
    position: fixed;
    inset: 0px;
    background-color: var(--bg-primary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const PreviewCloseButton = styled.div`
    display: grid;
    place-items: center;
`
