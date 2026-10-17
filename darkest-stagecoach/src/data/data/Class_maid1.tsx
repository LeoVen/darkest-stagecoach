// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_maid1: ClassModData = {
    key: 'maid1',
    name: `Maid`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.1,
        blight: 0.3,
        bleed: 0.6,
        disease: 0.6,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.6
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
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2207614474'
        }
    ],
    skills: [
        {
            name: `Soul Sculpture`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e4f5d228f56bd8ab.jpg',
        },
        {
            name: `Killer Doll`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ef91a00875161792.jpg',
        },
        {
            name: `Indiscriminate`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/036e2264ae5433d2.jpg',
        },
        {
            name: `Misdirection`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0145fed60580e870.jpg',
        },
        {
            name: `Eternal Meek`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/7673eba599577a63.jpg',
        },
        {
            name: `Ludo Bile`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/01d79a23dd6ea053.jpg',
        },
        {
            name: `The World`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/98e4eda62b303498.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f526ce1ffa016ab8.jpg',
            'img/5e942aae6f8b5689.jpg',
            'img/2f6e7bb9f3fb0491.jpg',
            'img/693920f67b7c9bee.jpg',
            'img/28d3712f3c926caa.jpg',
        ],
        weapon: [
            'img/2c4d7b418fc97fb8.jpg',
            'img/3a75a1ae5a8e6cdb.jpg',
            'img/79623c9437154527.jpg',
            'img/061fc0ffec4fd932.jpg',
            'img/491547fced44b2fc.jpg',
        ],
    },
    portrait: 'img/62bcfe5734c31773.jpg',
}
