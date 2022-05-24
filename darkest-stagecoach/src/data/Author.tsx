export default interface Author {
    name: string
    about?: string
    links: {
        name: string
        link: string
    }[]
}

// Creates an Author that has the minimum required values
export const defaultAuthor = (): Author => {
    return {
        name: "",
        links: [],
    }
}
