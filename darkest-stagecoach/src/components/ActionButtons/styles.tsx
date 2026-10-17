import { MenuItem, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { transient } from '../../styled'

export const BottomButton = styled(Paper, transient)<{ $index: number }>`
    position: fixed;
    right: calc(1rem + ${props => props.$index * 80}px);
    bottom: 1rem;
    z-index: 2;
`

export const DrawerContent = styled('div')`
    padding: min(2rem, 5vw);
    background-color: var(--bg-primary);
`

export const MainSection = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

export const InnerItem = styled('div', transient)<{ $selected: boolean }>`
    ${props =>
        props.$selected ? 'padding: 0;' : 'padding: 0 0 0 20px;'}
    display: flex;
    align-items: center;
`

export const SortItem = styled(MenuItem)`
    ${props =>
        props.selected
            ? 'background-color: var(--bg-secondary);'
            : 'background-color: var(--bg-primary);'}
    color: var(--font-primary);
    user-select: none;

    &:hover {
        background-color: var(--bg-secondary);
    }
`
