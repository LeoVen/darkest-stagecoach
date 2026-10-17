// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_drowner1: ClassModData = {
    key: 'drowner1',
    name: `drowner`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 14.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 19.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [10.0, 22.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1595760408'
        }
    ],
    skills: [
        {
            name: `bite`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d4d5136a4014cc29.jpg',
        },
        {
            name: `Assault`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/85b5aa0678d550ee.jpg',
        },
        {
            name: `Exodia`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e672c0289cbb071c.jpg',
        },
        {
            name: `bombard`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/acd4a18dac07e4cd.jpg',
        },
        {
            name: `Hammer`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ea2a76709a64509a.jpg',
        },
        {
            name: `Contagion`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/03598a6cc45d8cdd.jpg',
        },
        {
            name: `Purify`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/70877200e2c755f3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/72182a156254b585.jpg',
            'img/51636c4ea01d1d4f.jpg',
            'img/97a620364ced7372.jpg',
            'img/d50448d5d0193f8f.jpg',
            'img/a6ffa4b0c414d85c.jpg',
        ],
        weapon: [
            'img/f0474d45a273d02f.jpg',
            'img/8b50311a48df0ce4.jpg',
            'img/60315ac6b43672a2.jpg',
            'img/f50c8e2c212d6e89.jpg',
            'img/5cbe3f1f98a11b19.jpg',
        ],
    },
    portrait: 'img/f3fb1a7b67a7d3c6.jpg',
}
