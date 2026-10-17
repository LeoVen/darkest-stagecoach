// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_skull_knight1: ClassModData = {
    key: 'skull_knight1',
    name: `Skull Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 0.75,
        disease: 0.7,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.74,
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
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2734022187'
        }
    ],
    skills: [
        {
            name: `Vorpal Slash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c60bc980adadc93c.jpg',
        },
        {
            name: `Doom Eater`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/48a48d9b02f94231.jpg',
        },
        {
            name: `Fate Intervention`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ea390433ea647142.jpg',
        },
        {
            name: `Nether Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/98e0bb4c0e6540ae.jpg',
        },
        {
            name: `Interstice Shuffle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/59aeee4800dce850.jpg',
        },
        {
            name: `Brand of Sacrifice`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2f4a5793db5a97f8.jpg',
        },
        {
            name: `Overlord`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/84e37cd502625428.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f7768e81f4784803.jpg',
            'img/583e9fd5a5176c06.jpg',
            'img/c74ad444f1a0ab0f.jpg',
            'img/aa439f64d5b2d96b.jpg',
            'img/753c085e99f53d7f.jpg',
        ],
        weapon: [
            'img/25140f9c734537b2.jpg',
            'img/685d3b1bd856d782.jpg',
            'img/3ee6749afd8e1a42.jpg',
            'img/ec695d547d040772.jpg',
            'img/b0f6af1a69fba625.jpg',
        ],
    },
    portrait: 'img/690afd33badfddb5.jpg',
}
