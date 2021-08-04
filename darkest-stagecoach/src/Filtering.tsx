import ClassMod from './data/ClassMod'
import { ClassModIndex } from './data/ClassModIndex'
import { FilterBy } from './Types'

export class ClassModFilter {
    filterState: FilterBy

    constructor(filter: FilterBy) {
        this.filterState = filter
    }

    filterName = (a: string): boolean => {
        let classA = ClassModIndex.get(a) as ClassMod
        let value = classA.name
        return value.toLowerCase().includes(this.filterState.name.toLowerCase())
    }

    filterReligious = (a: string): boolean => {
        let classA = ClassModIndex.get(a) as ClassMod
        return classA.religious === this.filterState.religious
    }

    filterTransform = (a: string): boolean => {
        let classA = ClassModIndex.get(a) as ClassMod
        return classA.transform === this.filterState.transform
    }

    filterOriginalHero = (a: string): boolean => {
        let classA = ClassModIndex.get(a) as ClassMod
        return classA.originalHero === this.filterState.originalHero
    }

    filterBySynergy = (a: string): boolean => {
        let classA = ClassModIndex.get(a) as ClassMod
        if (classA.synergy === undefined)
            return this.filterState.synergies.size === 0
        for (const [key, value] of this.filterState.synergies.entries()) {
            if (classA.synergy.has(key) !== value) return false
        }
        return true
    }

    getFilters(): Array<(a: string) => boolean> {
        let result = []
        if (this.filterState.name !== '') result.push(this.filterName)
        if (this.filterState.religious !== undefined)
            result.push(this.filterReligious)
        if (this.filterState.transform !== undefined)
            result.push(this.filterTransform)
        if (this.filterState.originalHero !== undefined)
            result.push(this.filterOriginalHero)
        if (this.filterState.synergies.size > 0)
            result.push(this.filterBySynergy)
        return result
    }
}

export const filterClassMods = (classModKeys: string[], filterBy: FilterBy) => {
    let filter = new ClassModFilter(filterBy)
    let result = classModKeys.map(str => str.slice())

    filter.getFilters().forEach(filter => (result = result.filter(filter)))
    return result
}
