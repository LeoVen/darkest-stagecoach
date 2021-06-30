import { Button, MenuItem, Paper } from '@material-ui/core'
import styled from 'styled-components'

export const BottomButton = styled(Paper)`
    position: fixed;
    right: calc(1rem + ${(props: { index: number }) => props.index * 80}px);
    bottom: 1rem;
    z-index: 2;
`

export const BottomFilterSection = styled(Button)`
    background-color: var(--bg-primary);
    border: var(--accent-primary) 1px solid;
    padding: 1rem;
    display: flex;
    align-items: center;
    color: var(--font-primary);

    &:hover {
        background-color: var(--accent-primary);
    }
`

export const DrawerContent = styled.div`
    padding: min(2rem, 5vw);
    background-color: var(--bg-primary);
`

export const MainSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

export const InnerItem = styled.div`
    ${(props: { selected: boolean }) =>
        props.selected ? 'padding: 0;' : 'padding: 0 0 0 20px;'}
    display: flex;
    align-items: center;
`

export const SortItem = styled(MenuItem)`
    ${(props: { selected: boolean }) =>
        props.selected
            ? 'background-color: var(--bg-secondary);'
            : 'background-color: var(--bg-primary);'}
    color: var(--font-primary);
    user-select: none;

    &:hover {
        background-color: var(--bg-secondary);
    }
`
