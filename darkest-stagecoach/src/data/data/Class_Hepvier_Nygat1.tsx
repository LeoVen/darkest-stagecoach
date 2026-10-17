// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_Hepvier_Nygat1: ClassModData = {
    key: 'Hepvier_Nygat1',
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
            image: 'img/9bde7b3d380d103a.jpg',
        },
        {
            name: `Sword Slash`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b039226d231e82db.jpg',
        },
        {
            name: `Afterimage Execution`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b4d044727dfb71bb.jpg',
        },
        {
            name: `Enchant Circle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/312fd5f01abc2ea8.jpg',
        },
        {
            name: `Enchant Cloak`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2dbdd65d1271c2fc.jpg',
        },
        {
            name: `Dragon Heart`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b9dd346ccd70e53b.jpg',
        },
        {
            name: `Scale Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e201dc62dd3291b2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1eccd4aefc7f90f6.jpg',
            'img/4dd5a195f8e42ef3.jpg',
            'img/62269da2854439c5.jpg',
            'img/f66f01cd1c33bba7.jpg',
            'img/0229316a3b3c6e2c.jpg',
        ],
        weapon: [
            'img/02860bad1ef07f7f.jpg',
            'img/29a65690450031ff.jpg',
            'img/77934fd3c0ba5a81.jpg',
            'img/99b0c594c786271d.jpg',
            'img/29985bfbbaa808fc.jpg',
        ],
    },
    portrait: 'img/089f3dd8f373a855.jpg',
}
