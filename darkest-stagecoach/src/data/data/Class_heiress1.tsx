// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_heiress1: ClassModData = {
    key: 'heiress1',
    name: `Heiress`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.03, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2021307368'
        }
    ],
    skills: [
        {
            name: `Quickshot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/0d52b7c83a20a393.jpg',
        },
        {
            name: `Barrage`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/6fe6266919babd81.jpg',
        },
        {
            name: `Wine Toss`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/2288f98a6a3f9231.jpg',
        },
        {
            name: `Wine Share`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c32512f370b21da7.jpg',
        },
        {
            name: `Bottle Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/08153cb55580853b.jpg',
        },
        {
            name: `Research`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e7fc940a6e5f6e14.jpg',
        },
        {
            name: `Promotion`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/dcf05ca978a7d907.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8b97982756636014.jpg',
            'img/aae61fe2c6d9a6e5.jpg',
            'img/9d7a7abdf3252d0c.jpg',
            'img/057c8ac885641389.jpg',
            'img/6d499bb4867b0623.jpg',
        ],
        weapon: [
            'img/d13f0a1396a6d491.jpg',
            'img/494f10bdf5330599.jpg',
            'img/6c4e8c7b0b0d7be0.jpg',
            'img/11a4ba51f4bdaf3f.jpg',
            'img/e215c7b67db16b73.jpg',
        ],
    },
    portrait: 'img/fe7748789ba76bf5.jpg',
}
