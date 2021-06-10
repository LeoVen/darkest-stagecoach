import Author from './Author'
import { Credits, OriginalHeroes } from '../Types'

export default interface ClassMod {
    name: string
    description?: string
    similarity?: OriginalHeroes
    portrait: string
    sources: {
        name: 'Steam' | 'Nexus'
        link: string
    }[]
    authors: {
        author: Author
        credits: Credits
    }[]
}
