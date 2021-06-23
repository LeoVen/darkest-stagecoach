import { Button, Paper } from '@material-ui/core'
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

export const SortItemsDrawerContent = styled.div`
    padding: 2em;
    background-color: var(--bg-primary);
`

export const MainSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

export const SortItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const InnerItem = styled.div`
    ${(props: { selected: boolean }) =>
        props.selected ? 'padding: 0 14px 0 0;' : 'padding: 0 14px 0 14px;'}
    display: flex;
    align-items: center;
`

export const SortItem = styled.div`
    ${(props: { selected: boolean }) =>
        props.selected
            ? 'border: var(--accent-primary) 1px solid; background-color: var(--bg-secondary);'
            : 'border: var(--bg-primary) 1px solid; background-color: var(--bg-primary);'}
    border-radius: 4px;
    color: var(--font-primary);
    padding: 0.5rem;
    margin: 4px;
    user-select: none;

    &:hover {
        background-color: var(--bg-secondary);
    }
`
