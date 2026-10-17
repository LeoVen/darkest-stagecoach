import imageNotFound from '../assets/img/image_not_found.png'

interface ImageProps {
    // Path relative to the public folder, empty if the image is missing
    imgData: string
    className?: string
    style?: React.CSSProperties
}

export const Image = ({ imgData, className, style }: ImageProps) => {
    return (
        <img
            alt={className}
            className={className}
            style={style}
            loading="lazy"
            src={
                imgData.length > 0
                    ? `${import.meta.env.BASE_URL}${imgData}`
                    : imageNotFound
            }
        />
    )
}
