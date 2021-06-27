import ClassMod from './data/ClassMod'
import { classModIndex } from './data/ClassModIndex'
import { SortBy, SortingKeys } from './Types'

var sortingState: SortBy = {
    key: 'name',
    levelRef: 0,
    sortDirection: 1
}

const defaultSort = (lhs: number, rhs: number, other: () => number): number => {
    let result = (lhs - rhs) * sortingState.sortDirection
    if (result === 0.0) return other()
    return result
}

const sortByNameDefault = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    return classA.name.localeCompare(classB.name)
}

const sortByName = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    return classA.name.localeCompare(classB.name) * sortingState.sortDirection
}

const sortByHp = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.armours[idx].hp
    let rhs = classB.stats.armours[idx].hp
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByDodge = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.armours[idx].dodge
    let rhs = classB.stats.armours[idx].dodge
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByProt = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.armours[idx].prot
    let rhs = classB.stats.armours[idx].prot
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortBySpeed = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.armours[idx].speed + classA.stats.weapons[idx].speed
    let rhs = classB.stats.armours[idx].speed + classB.stats.weapons[idx].speed
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByAccuracy = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.weapons[idx].accuracy
    let rhs = classB.stats.weapons[idx].accuracy
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByCrit = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.weapons[idx].crit
    let rhs = classB.stats.weapons[idx].crit
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByDamage = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let idx = sortingState.levelRef
    let lhs = classA.stats.weapons[idx].damage[1]
    let rhs = classB.stats.weapons[idx].damage[1]
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByStun = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.stun
    let rhs = classB.resistances.stun
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByBlight = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.blight
    let rhs = classB.resistances.blight
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByDisease = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.disease
    let rhs = classB.resistances.disease
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByDeathBlow = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.deathBlow
    let rhs = classB.resistances.deathBlow
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByMove = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.move
    let rhs = classB.resistances.move
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByBleed = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.bleed
    let rhs = classB.resistances.bleed
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByDebuff = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.debuff
    let rhs = classB.resistances.debuff
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortByTrap = (a: string, b: string) => {
    let classA = classModIndex.get(a) as ClassMod
    let classB = classModIndex.get(b) as ClassMod
    let lhs = classA.resistances.trap
    let rhs = classB.resistances.trap
    return defaultSort(lhs, rhs, () => sortByNameDefault(a, b))
}

const sortFuncMap: Record<SortingKeys, (a: string, b: string) => number> = {
    name: sortByName,
    maxHp: sortByHp,
    dodge: sortByDodge,
    prot: sortByProt,
    speed: sortBySpeed,
    accuracy: sortByAccuracy,
    crit: sortByCrit,
    damage: sortByDamage,
    stun: sortByStun,
    blight: sortByBlight,
    disease: sortByDisease,
    deathBlow: sortByDeathBlow,
    move: sortByMove,
    bleed: sortByBleed,
    debuff: sortByDebuff,
    trap: sortByTrap
} as const

export const sortClassMods = (classModKeys: string[], sortBy: SortBy) => {
    sortingState = {
        key: sortBy.key,
        levelRef: sortBy.levelRef,
        sortDirection: sortBy.sortDirection
    }
    return classModKeys.map(str => str.slice()).sort(sortFuncMap[sortBy.key])
}
