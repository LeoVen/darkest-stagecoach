import { FilterBy } from './Types'

var filterState: FilterBy = {}

export const filterClassMods = (classModKeys: string[], filterBy: FilterBy) => {
    filterState = {
        religious: filterBy.religious,
        transform: filterBy.transform,
        synergies: filterBy.synergies
    }
    // return classModKeys.map(str => str.slice()).sort(sortFuncMap[filterBy.key])
    return classModKeys.map(str => str.slice())
}
