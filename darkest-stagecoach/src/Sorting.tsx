import ClassMod from './data/ClassMod'
import { ClassModIndex } from './data/ClassModIndex'
import { SortBy, SortingKeys } from './Types'

export class ClassModSorter {
    sortingState: SortBy

    constructor(sortBy: SortBy) {
        this.sortingState = {
            key: sortBy.key,
            levelRef: sortBy.levelRef,
            sortDirection: sortBy.sortDirection
        }
    }

    defaultSort = (lhs: number, rhs: number, other: () => number): number => {
        let result = (lhs - rhs) * this.sortingState.sortDirection
        if (result === 0.0) return other()
        return result
    }

    sortByNameDefault = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        return classA.name.localeCompare(classB.name)
    }

    sortByName = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        return (
            classA.name.localeCompare(classB.name) *
            this.sortingState.sortDirection
        )
    }

    sortByHp = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.armours[idx].hp
        let rhs = classB.stats.armours[idx].hp
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByDodge = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.armours[idx].dodge
        let rhs = classB.stats.armours[idx].dodge
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByProt = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.armours[idx].prot
        let rhs = classB.stats.armours[idx].prot
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortBySpeed = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs =
            classA.stats.armours[idx].speed + classA.stats.weapons[idx].speed
        let rhs =
            classB.stats.armours[idx].speed + classB.stats.weapons[idx].speed
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByAccuracy = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.weapons[idx].accuracy
        let rhs = classB.stats.weapons[idx].accuracy
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByCrit = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.weapons[idx].crit
        let rhs = classB.stats.weapons[idx].crit
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByDamage = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let idx = this.sortingState.levelRef
        let lhs = classA.stats.weapons[idx].damage[1]
        let rhs = classB.stats.weapons[idx].damage[1]
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByStun = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.stun
        let rhs = classB.resistances.stun
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByBlight = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.blight
        let rhs = classB.resistances.blight
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByDisease = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.disease
        let rhs = classB.resistances.disease
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByDeathBlow = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.deathBlow
        let rhs = classB.resistances.deathBlow
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByMove = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.move
        let rhs = classB.resistances.move
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByBleed = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.bleed
        let rhs = classB.resistances.bleed
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByDebuff = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.debuff
        let rhs = classB.resistances.debuff
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortByTrap = (a: string, b: string) => {
        let classA = ClassModIndex.get(a) as ClassMod
        let classB = ClassModIndex.get(b) as ClassMod
        let lhs = classA.resistances.trap
        let rhs = classB.resistances.trap
        return this.defaultSort(lhs, rhs, () => this.sortByNameDefault(a, b))
    }

    sortFuncMap: Record<SortingKeys, (a: string, b: string) => number> = {
        name: this.sortByName,
        maxHp: this.sortByHp,
        dodge: this.sortByDodge,
        prot: this.sortByProt,
        speed: this.sortBySpeed,
        accuracy: this.sortByAccuracy,
        crit: this.sortByCrit,
        damage: this.sortByDamage,
        stun: this.sortByStun,
        blight: this.sortByBlight,
        disease: this.sortByDisease,
        deathBlow: this.sortByDeathBlow,
        move: this.sortByMove,
        bleed: this.sortByBleed,
        debuff: this.sortByDebuff,
        trap: this.sortByTrap
    } as const

    getSorter = () => {
        return this.sortFuncMap[this.sortingState.key]
    }
}

export const sortClassMods = (classModKeys: string[], sortBy: SortBy) => {
    let sorter = new ClassModSorter(sortBy)
    return classModKeys.map(str => str.slice()).sort(sorter.getSorter())
}
