import imageNotFound from '../assets/img/image_not_found.png'

interface ImageProps {
    imgData: string
    className?: string
    style?: React.CSSProperties
}

export const Image = ({ imgData, className, style }: ImageProps) => {
    let src = ""

    if (imgData.length > 0) {
        src = "data:image/jpeg;base64, " + imgData
    }

    return (
        <img
            alt={className}
            className={className}
            style={style}
            src={src.length > 0 ? src : imageNotFound}
        />
    )
}
