import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const MainButton = styled(Button)`
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
