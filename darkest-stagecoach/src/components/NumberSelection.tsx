import { Typography } from '@material-ui/core'

interface NumberSelectionProps {
    index: number
    selected: boolean
}

export function NumberSelection(props: NumberSelectionProps) {
    return (
        <Typography
            variant="body1"
            style={{ fontWeight: 'bold' }}
            className="cursor-pointer">
            <div
                style={{
                    border: `var(${
                        props.selected ? '--accent-primary' : '--bg-secondary'
                    }) 1px solid`,
                    borderRadius: '8%',
                    backgroundColor: `var(${
                        props.selected ? '--bg-primary' : '--bg-secondary'
                    })`,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {props.index}
            </div>
        </Typography>
    )
}
