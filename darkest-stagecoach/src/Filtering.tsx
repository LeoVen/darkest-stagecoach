import { FilterBy } from './Types'

export class ClassModFilter {
    filterState: FilterBy

    constructor(filter: FilterBy) {
        this.filterState = filter
    }
}

export const filterClassMods = (classModKeys: string[], filterBy: FilterBy) => {
    let filter = new ClassModFilter(filterBy)
    // return classModKeys.map(str => str.slice()).sort(sortFuncMap[filterBy.key])
    return classModKeys.map(str => str.slice())
}
