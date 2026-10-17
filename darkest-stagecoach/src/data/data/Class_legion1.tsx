// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_legion1: ClassModData = {
    key: 'legion1',
    name: `Legion`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2531791079'
        }
    ],
    skills: [
        {
            name: `Legion Standard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3a01b915bd894d59.jpg',
        },
        {
            name: `Testudo Formation`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/e7329099a123589d.jpg',
        },
        {
            name: `March of the Damned`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8c4a48af4a7dd330.jpg',
        },
        {
            name: `Gut Them`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9887e789c86d27da.jpg',
        },
        {
            name: `Veni, Vidi, Vici`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ab596d4cfe6d8323.jpg',
        },
        {
            name: `Martial Pride`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/11f7e964416d2e10.jpg',
        },
        {
            name: `Blood of the Legion`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/81a3b53fcf5f9b36.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ae29476056953198.jpg',
            'img/2051d53fa1a43cee.jpg',
            'img/8089dd019bee0a31.jpg',
            'img/fd4d0ae310c5c3f7.jpg',
            'img/0ba541e3f0dce08f.jpg',
        ],
        weapon: [
            'img/83d203ddd4c0a1a2.jpg',
            'img/78f4a181edfde7b4.jpg',
            'img/25393ea0348ad83f.jpg',
            'img/e8e0bf7c8f10e29e.jpg',
            'img/052fb5eebd70b7e3.jpg',
        ],
    },
    portrait: 'img/c762e7fc4055d2e8.jpg',
}
