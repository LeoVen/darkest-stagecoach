import styled from 'styled-components'

export const MainSection = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;
`

export const ImageAndTitle = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const LogoImage = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 1em;
`

export const EndButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-height: 150px;
`

export const MainIconButton = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--bg-secondary);
    display: grid;
    place-items: center;
`
