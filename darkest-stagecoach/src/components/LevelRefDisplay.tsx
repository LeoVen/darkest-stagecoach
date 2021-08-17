interface LevelRefDisplayProps {
    current: number
}

export const LevelRefDisplay = ({ current }: LevelRefDisplayProps) => {
    return (
        <div
            style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'var(--bg-primary)',
                display: 'flex',
                justifyContent: 'space-around',
                overflow: 'visible',
                position: 'relative',
                padding: '8px 0 0 0'
            }}>
            {[0, 1, 2, 3, 4].map(i => (
                <div
                    key={`levelref-${i}`}
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
