// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tempest1: ClassModData = {
    key: 'tempest1',
    name: `Tempest`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3303417614'
        }
    ],
    skills: [
        {
            name: `Phasor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d09aa2ba3c16f78d.jpg',
        },
        {
            name: `High Voltage`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/b47a059facdc4b76.jpg',
        },
        {
            name: `Energize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/044e197d27ffed5a.jpg',
        },
        {
            name: `Feedback Loop`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/72e69602bfd42511.jpg',
        },
        {
            name: `Shock Coma`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/948c45eae3ee32fc.jpg',
        },
        {
            name: `Overcharge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6c626e3cabe44cb9.jpg',
        },
        {
            name: `Amplify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/f5b6ed353df876e7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/715eecc3c110aa64.jpg',
            'img/439156f8c9199579.jpg',
            'img/146ac4bb9df46ba6.jpg',
            'img/f52826f51ca39b5d.jpg',
            'img/69b49d8ec5aff14a.jpg',
        ],
        weapon: [
            'img/3b5c0f40e513b2a8.jpg',
            'img/f62fb0c502b763c6.jpg',
            'img/4c61688ca2f6e60e.jpg',
            'img/7fa45d9a54d7f2a2.jpg',
            'img/de917e9c9e3b703b.jpg',
        ],
    },
    portrait: 'img/5df4fca2fe82e67d.jpg',
}
