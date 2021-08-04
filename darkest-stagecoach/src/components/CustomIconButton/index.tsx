import React from 'react'
import { MainButton } from './styles'

interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function CustomIconButton({
    children,
    style,
    className,
    onClick
}: Props) {
    return (
        <MainButton className={className} onClick={onClick} style={style}>
            {children}
        </MainButton>
    )
}
