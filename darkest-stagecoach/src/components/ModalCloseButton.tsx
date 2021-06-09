import iconClose from '../assets/img/iconClose.png'

interface ModalCloseButtonProps {
    // Signals that the button was clicked
    onClick: () => void
}

export function ModalCloseButton(props: ModalCloseButtonProps) {
    return (
        <a onClick={props.onClick}>
            <img
                src={iconClose}
                alt="Icon Close"
                style={{
                    position: 'absolute',
                    top: '1em',
                    right: '1em',
                    width: '32px',
                    height: '32px'
                }}
            />
        </a>
    )
}
