import ClassMod from './data/ClassMod'
import { classModIndex } from './data/ClassModIndex'
import { SortBy } from './Types'

export const sortClassMods = (classModKeys: string[], sortBy: SortBy) => {
    let newClassModKeys = classModKeys.map(str => str.slice())
    if (sortBy.key === 'name') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            return classA.name.localeCompare(classB.name) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'maxHp') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            return (
                ((classA.stats?.armours[4].hp ?? 0) -
                    (classB.stats?.armours[4].hp ?? 0)) *
                sortBy.sortDirection
            )
        })
    }
    return classModKeys
}
