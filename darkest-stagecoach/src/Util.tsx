import ClassMod from './data/ClassMod'
import { classModIndex } from './data/ClassModIndex'
import { SortBy } from './Types'

const sortByName = (classA: ClassMod, classB: ClassMod) => {
    return classA.name.localeCompare(classB.name)
}

export const sortClassMods = (classModKeys: string[], sortBy: SortBy) => {
    let newClassModKeys = classModKeys.map(str => str.slice())
    let idx = sortBy.levelRef
    if (sortBy.key === 'name') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            return sortByName(classA, classB) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'maxHp') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.armours[idx].hp ?? 0
            let rhs = classB.stats?.armours[idx].hp ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'dodge') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.armours[idx].dodge ?? 0
            let rhs = classB.stats?.armours[idx].dodge ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'prot') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.armours[idx].prot ?? 0
            let rhs = classB.stats?.armours[idx].prot ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'speed') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs =
                (classA.stats?.armours[idx].speed ?? 0) +
                (classA.stats?.weapons[idx].speed ?? 0)
            let rhs =
                (classB.stats?.armours[idx].speed ?? 0) +
                (classB.stats?.weapons[idx].speed ?? 0)
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'accuracy') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.weapons[idx].accuracy ?? 0
            let rhs = classB.stats?.weapons[idx].accuracy ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'crit') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.weapons[idx].crit ?? 0
            let rhs = classB.stats?.weapons[idx].crit ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    } else if (sortBy.key === 'damage') {
        return newClassModKeys.sort((a: string, b: string) => {
            let classA = classModIndex.get(a) as ClassMod
            let classB = classModIndex.get(b) as ClassMod
            let lhs = classA.stats?.weapons[idx].damage[1] ?? 0
            let rhs = classB.stats?.weapons[idx].damage[1] ?? 0
            return (lhs - rhs) * sortBy.sortDirection
        })
    }
    return classModKeys
}
