import { Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const ClassCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin: 1rem;
`

export const HeroCard = styled(Paper)`
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

export const TopIcons = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`

export const TopLeftIcons = styled.div`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
`

export const BottomIcons = styled.div`
    position: absolute;
    right: 1rem;
    bottom: 2px;
`

export const ImageAndIcons = styled.div`
    display: flex;
`

export const ImageAndPositions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ClassName = styled(Typography)`
    margin-left: 1rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    max-width: 150px;
`
