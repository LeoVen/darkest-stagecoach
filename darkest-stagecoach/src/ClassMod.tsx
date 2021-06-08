import Author from './Author'
import { Credits, OriginalHeroes } from './Types'

export default interface ClassMod {
    name: string
    similarity?: OriginalHeroes
    image: string
    sources: {
        name: 'Steam' | 'Nexus'
        link: string
    }[]
    authors: {
        author: Author
        credits: Credits
    }[]
}
