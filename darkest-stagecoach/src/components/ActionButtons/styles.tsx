import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'

export const BottomButton = styled(Paper)`
    position: fixed;
    right: calc(1rem + ${(props: { index: number }) => props.index * 80}px);
    bottom: 1rem;
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

export const MainModal = styled(Paper)`
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

export const SortItem = styled.div`
    ${(props: { selected: boolean }) =>
        props.selected
            ? 'border: var(--accent-primary) 1px solid; background-color: var(--bg-secondary);'
            : 'border: var(--bg-primary) 1px solid; background-color: var(--bg-primary);'}
    border-radius: 4px;
    color: var(--font-primary);
    padding: 0.5rem;
    margin: 4px;

    &:hover {
        background-color: var(--bg-secondary);
    }
`