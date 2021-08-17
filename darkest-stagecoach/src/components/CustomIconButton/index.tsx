import React from 'react'
import { MainButton } from './styles'

interface CustomIconButtonProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const CustomIconButton = ({
    children,
    style,
    className,
    onClick
}: CustomIconButtonProps) => (
    <MainButton className={className} onClick={onClick} style={style}>
        {children}
    </MainButton>
)
