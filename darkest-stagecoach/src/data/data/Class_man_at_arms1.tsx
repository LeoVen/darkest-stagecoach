// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_man_at_arms1: ClassModData = {
    key: 'man_at_arms1',
    name: `Man-at-Arms`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Crush`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3e131fd445694e39.jpg',
        },
        {
            name: `Rampart`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a0ff0b3c8a4fc1eb.jpg',
        },
        {
            name: `Bellow`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/bc98d282ea6b8d30.jpg',
        },
        {
            name: `Defender`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/adffc4e118a804fa.jpg',
        },
        {
            name: `Retribution`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a86728095d361b5c.jpg',
        },
        {
            name: `Command`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/4975537ab85e72e1.jpg',
        },
        {
            name: `Bolster`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/1f87083c617c6ea8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d1d59f75f3dc67d7.jpg',
            'img/5edf22f2eff3d350.jpg',
            'img/210a98b4d82ed4a1.jpg',
            'img/8993f4da1f6366e7.jpg',
            'img/b2eea50b85dca454.jpg',
        ],
        weapon: [
            'img/88320934fbb9c53d.jpg',
            'img/4f2e5ac6071943b3.jpg',
            'img/6a1cd3418172bb0d.jpg',
            'img/f10e90a5e96d0cfc.jpg',
            'img/6ea75d032148a8dc.jpg',
        ],
    },
    portrait: 'img/1609fea10399f11e.jpg',
}
