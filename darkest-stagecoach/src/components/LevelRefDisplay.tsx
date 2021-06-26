interface Props {
    current: number
}

export const LevelRefDisplay = ({ current }: Props) => {
    return (
        <div
            style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                justifyContent: 'space-around',
                overflow: 'visible',
                position: 'relative',
                padding: '2px'
            }}>
            {[0, 1, 2, 3, 4].map(i => (
                <div
                    style={{
                        color:
                            i === current
                                ? 'var(--accent-primary)'
                                : 'var(--font-disabled)',
                        fontSize: '0.8rem'
                    }}>
                    {i + 1}
                </div>
            ))}
        </div>
    )
}
