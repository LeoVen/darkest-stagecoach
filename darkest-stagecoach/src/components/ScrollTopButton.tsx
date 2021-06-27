import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Fab } from '@material-ui/core'

export const ScrollTopButton = () => {
    const handleClick = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <Fab
            size="small"
            onClick={handleClick}
            className="cursor-pointer"
            style={{
                position: 'fixed',
                left: '1rem',
                bottom: '1rem',
                zIndex: 2,
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--font-primary)'
            }}>
            <FontAwesomeIcon icon={faArrowUp} size={'1x'} />
        </Fab>
    )
}
