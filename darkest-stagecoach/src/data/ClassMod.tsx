import Author from './Author'
import { Credits, OriginalHeroes, Resistances, Synergy } from '../Types'

export default interface ClassMod {
    name: string
    description?: string[]
    similarity?: OriginalHeroes
    portrait: string
    religious: boolean
    transform: boolean
    resistances?: Resistances
    sources: {
        name: 'Steam' | 'Nexus'
        link: string
    }[]
    authors: {
        author: Author
        credits: Credits
    }[]
}
