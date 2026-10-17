// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_enigma1: ClassModData = {
    key: 'enigma1',
    name: `Enigma`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.8,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.5,
        move: 0.5,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.4, hp: 20, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 22, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 24, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 26, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 28, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 6.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.035, speed: 0 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.045, speed: 1 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=970030269'
        }
    ],
    skills: [
        {
            name: `Mystic Bolt`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/71e3bf69d1f817ac.jpg',
        },
        {
            name: `Illusionary Slash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/9e490ef7278ae358.jpg',
        },
        {
            name: `Phantasmal Shot`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/8a7902be1308cdf7.jpg',
        },
        {
            name: `Delusional Exertion`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/ebc20d87345f68b2.jpg',
        },
        {
            name: `Unusual Dynamism`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f69815689ac1316f.jpg',
        },
        {
            name: `Arcane Fervor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/ab492878c21a6f82.jpg',
        },
        {
            name: `Esoteric Barrier`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/eefb71376662cc32.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b42a9bfc112fa1c2.jpg',
            'img/156c8649ede7029b.jpg',
            'img/c2060c7fc168a139.jpg',
            'img/724f0a513fcfad6e.jpg',
            'img/63863bc83ce84779.jpg',
        ],
        weapon: [
            'img/f0171445dcef8568.jpg',
            'img/44cc86727cdc130f.jpg',
            'img/de750dfc9a82acc1.jpg',
            'img/46141e11af282db4.jpg',
            'img/45344ba030b11769.jpg',
        ],
    },
    portrait: 'img/3cdc37627772af3d.jpg',
}
