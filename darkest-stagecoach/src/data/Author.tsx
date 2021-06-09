export default interface Author {
    name: string
    about?: string
    links: {
        name: string
        link: string
    }[]
}
