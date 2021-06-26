import Author from './Author'
import {
    ClassModType,
    ClassModTypeValue,
    Credits,
    GearStats,
    OriginalHeroes,
    PreferredPositions,
    Resistances,
    Synergy
} from '../Types'

export default interface ClassMod {
    name: string
    description?: string[]
    similarity?: OriginalHeroes
    portrait: string
    religious?: boolean
    transform?: boolean
    classType?: Record<ClassModType, ClassModTypeValue>
    synergy?: Synergy[]
    position?: PreferredPositions
    totalSkills?: number
    resistances: Resistances
    stats: GearStats
    sources: {
        name: string
        link: string
    }[]
    authors?: {
        author: Author
        credits: Credits
    }[]
}

export interface ClassModInfo {
    name: string
    dataId: string
    authors: {
        author: Author
        credits: Credits
    }[]
}
