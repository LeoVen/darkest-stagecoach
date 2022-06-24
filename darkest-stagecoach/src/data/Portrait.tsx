import imageNotFound from '../assets/img/image_not_found.png'

interface PortraitProps {
    portrait: string
    className?: string
    style?: React.CSSProperties
}

export const Portrait = ({ portrait, className, style }: PortraitProps) => {
    let src = ""

    if (portrait.length > 0) {
        src = "data:image/jpeg;base64, " + portrait
    }

    return (
        <img
            alt="Hero Portrait"
            className={className}
            style={style}
            src={src.length > 0 ? src : imageNotFound}
        />
    )
}
