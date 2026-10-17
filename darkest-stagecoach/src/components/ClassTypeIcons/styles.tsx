import { styled } from '@mui/material/styles'
import { transient } from '../../styled'

export const MainSection = styled('div')`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
`

export const IconContainer = styled('div', transient)<{
    $pad: string
    $dim: string
    $color: string
}>`
    width: ${props => props.$dim};
    height: ${props => props.$dim};
    padding: ${props => props.$pad};
    border-radius: 50%;
    background-color: ${props => props.$color}15;
`
