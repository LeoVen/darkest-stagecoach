// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_privateer1: ClassModData = {
    key: 'privateer1',
    name: `Privateer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.35,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.25
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1965654832'
        }
    ],
    skills: [
        {
            name: `Black Powder Pistol`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/627b23ca9d8d93d4.jpg',
        },
        {
            name: `Belay!`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/51faae10cf25b7e2.jpg',
        },
        {
            name: `Avast!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c327bd81d32811bf.jpg',
        },
        {
            name: `Dissonant Chord`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1da4814cea8caae4.jpg',
        },
        {
            name: `Drunken Shanty`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/f58381dc50943dfd.jpg',
        },
        {
            name: `Ration of Grog`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b8959cf6585c2f41.jpg',
        },
        {
            name: `...And a Bottle of Rum`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d5243b8b70b2095b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/27b1c5f921f3ba94.jpg',
            'img/de53eef5507fd7e0.jpg',
            'img/cc95f27c6f8c9a63.jpg',
            'img/625433df6d50b993.jpg',
            'img/1024d7e63444d2b7.jpg',
        ],
        weapon: [
            'img/dfc6e0f95df1c3db.jpg',
            'img/1ba5979a88f6370f.jpg',
            'img/7e91341cecdde894.jpg',
            'img/cce1238f941712de.jpg',
            'img/a666d9be77e87341.jpg',
        ],
    },
    portrait: 'img/179255b2c8f2e76d.jpg',
}
