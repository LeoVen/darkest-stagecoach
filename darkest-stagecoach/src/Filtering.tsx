import ClassMod from './data/ClassMod'
import { classModIndex } from './data/ClassModIndex'
import { FilterBy } from './Types'

export class ClassModFilter {
    filterState: FilterBy

    constructor(filter: FilterBy) {
        this.filterState = filter
    }

    filterName = (a: string): boolean => {
        let classA = classModIndex.get(a) as ClassMod
        let value = classA.name
        return value.includes(this.filterState.name)
    }

    filterReligious = (a: string): boolean => {
        let classA = classModIndex.get(a) as ClassMod
        return classA.religious === this.filterState.religious
    }

    filterTransform = (a: string): boolean => {
        let classA = classModIndex.get(a) as ClassMod
        return classA.transform === this.filterState.transform
    }

    getFilters(): Array<(a: string) => boolean> {
        let result = []
        if (this.filterState.name !== '') result.push(this.filterName)
        if (this.filterState.religious !== undefined)
            result.push(this.filterReligious)
        if (this.filterState.transform !== undefined)
            result.push(this.filterTransform)
        return result
    }
}

export const filterClassMods = (classModKeys: string[], filterBy: FilterBy) => {
    let filter = new ClassModFilter(filterBy)
    let result = classModKeys.map(str => str.slice())
    console.log(filterBy.religious)
    filter.getFilters().forEach(filter => (result = result.filter(filter)))
    return result
}
