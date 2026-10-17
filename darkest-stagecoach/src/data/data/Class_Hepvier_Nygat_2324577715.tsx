// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_Hepvier_Nygat_2324577715: ClassModData = {
    key: 'Hepvier_Nygat_2324577715',
    name: `Hepvier-Nygat`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0,
        move: 2,
        debuff: 1,
        deathBlow: 0.87,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.3, prot: 0, hp: 60, speed: 0 },
            { dodge: 0.4, prot: 0, hp: 70, speed: 0 },
            { dodge: 0.5, prot: 0, hp: 80, speed: 0 },
            { dodge: 0.6, prot: 0, hp: 90, speed: 0 },
            { dodge: 0.7, prot: 0.1, hp: 100, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [14.0, 16.0], crit: 0, speed: 10 },
            { accuracy: 0, damage: [16.0, 18.0], crit: 0.05, speed: 20 },
            { accuracy: 0, damage: [20.0, 22.0], crit: 0.09, speed: 30 },
            { accuracy: 0, damage: [24.0, 26.0], crit: 0.15, speed: 40 },
            { accuracy: 0, damage: [50.0, 60.0], crit: 0.3, speed: 999 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2324577715'
        }
    ],
    skills: [
        {
            name: `Magic Blast`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7e43a9444221efb1.jpg',
        },
        {
            name: `Sword Slash`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/dc94c6c1d7b2e609.jpg',
        },
        {
            name: `Afterimage Execution`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ab28c26cf4b3349c.jpg',
        },
        {
            name: `Enchant Circle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/594cde4249c59cd9.jpg',
        },
        {
            name: `Enchant Cloak`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/df0902913261c68e.jpg',
        },
        {
            name: `Dragon Heart`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/79fcb7311b6101d1.jpg',
        },
        {
            name: `Scale Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ff03cf0e4e9c806c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7730df9c3ad83981.jpg',
            'img/d1561ffa30bf7c0b.jpg',
            'img/b0d8d12004134291.jpg',
            'img/d33a4cfa82ada0ec.jpg',
            'img/f341672565c08276.jpg',
        ],
        weapon: [
            'img/6402921d95cb0f8a.jpg',
            'img/278e69bb4afcf879.jpg',
            'img/bb0b7300ac159f6a.jpg',
            'img/44c9d22dab55d263.jpg',
            'img/11a4be6623013545.jpg',
        ],
    },
    portrait: 'img/f8ffaec90e68905f.jpg',
}
