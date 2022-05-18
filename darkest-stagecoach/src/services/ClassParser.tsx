import ClassMod from '../data/ClassMod'
import { GearStats, WeaponStats, Resistances } from '../Types'

// Parses a class from a file and returns a ClassMod
export default class ClassParser {
    content: string

    constructor(content: string) {
        this.content = content
    }

    parseClassMod = (): ClassMod => {
        return {
            key: 'string',
            name: 'string',
            originalHero: false,
            resistances: this.parseResistances(),
            stats: {
                armours: [
                    { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
                    { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
                    { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
                    { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
                    { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
                ],
                weapons: [
                    { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 3 },
                    { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 3 },
                    { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 4 },
                    { accuracy: 0, damage: [7.0, 15.0], crit: 0.08, speed: 4 },
                    { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 5 }
                ]
            },
            sources: []
        }
    }

    parseResistances = (): Resistances => {
        return {
            stun: 1.0,
            blight: 1.0,
            bleed: 1.0,
            disease: 1.0,
            move: 1.0,
            debuff: 1.0,
            deathBlow: 1.0,
            trap: 1.0
        }
    }

    parseGearStats = (): GearStats => {
        let toDoArmour = { dodge: 1.0, prot: 1.0, hp: 1.0, speed: 1.0 }
        let toDoWeapon: WeaponStats = {
            accuracy: 1.0,
            damage: [1.0, 1.0],
            crit: 1.0,
            speed: 1.0
        }

        return {
            armours: [
                toDoArmour,
                toDoArmour,
                toDoArmour,
                toDoArmour,
                toDoArmour
            ],
            weapons: [
                toDoWeapon,
                toDoWeapon,
                toDoWeapon,
                toDoWeapon,
                toDoWeapon
            ]
        }
    }
}
