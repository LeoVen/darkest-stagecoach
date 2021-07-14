import React from 'react'
import { MainButton } from './styles'

interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function CustomIconButton({ children, style, onClick }: Props) {
    return (
        <MainButton onClick={onClick} style={style}>
            {children}
        </MainButton>
    )
}
