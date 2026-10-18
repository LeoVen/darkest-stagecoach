import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ClassCardsContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin: 1rem;
`

// content-visibility lets the browser skip layout and paint of cards that are
// off screen; contain-intrinsic-size is their placeholder size until rendered
// once ("auto" then remembers the real size). It also clips painting to the
// element, so the padding leaves room for the card's shadow and hover glow
// (~16px), and the negative margin keeps the layout unchanged. Cards are
// 332px wide and about 183px tall with the portrait loaded.
export const CardWrapper = styled('div')`
    content-visibility: auto;
    contain-intrinsic-size: auto 372px auto 223px;
    padding: 20px;
    margin: -20px;
`

// Positioning context for the icons overlaid on the card
export const CardInner = styled('div')`
    position: relative;
`

export const HeroCard = styled(Paper)`
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
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

export const TopIcons = styled('div')`
    position: absolute;
    right: 1rem;
    top: 1rem;
`

export const TopLeftIcons = styled('div')`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
`

// A full-width last row of the card, so many synergies wrap onto more rows
// (making the card taller) instead of overlapping the positions
export const BottomIcons = styled('div')`
    flex-basis: 100%;
    margin-bottom: -0.5em;
    text-align: right;
    line-height: 0;
`

export const ImageAndIcons = styled('div')`
    display: flex;
`

export const ImageAndPositions = styled('div')`
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
