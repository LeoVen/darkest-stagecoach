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
    key: string
    name: string
    description?: string[]
    similarity?: OriginalHeroes
    religious?: boolean
    transform?: boolean
    originalHero: boolean
    classType?: Record<ClassModType, ClassModTypeValue>
    synergy?: Set<Synergy>
    position?: PreferredPositions
    totalSkills?: number
    resistances: Resistances
    stats: GearStats
    sources: {
        name: string
        link: string
    }[]
    authors?: {
        author: string
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
