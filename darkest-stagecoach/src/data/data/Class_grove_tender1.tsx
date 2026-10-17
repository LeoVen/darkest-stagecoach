// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_grove_tender1: ClassModData = {
    key: 'grove_tender1',
    name: `Grove Tender`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.16, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.31, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1835237651'
        }
    ],
    skills: [
        {
            name: `Homi Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/aa00fa8cfa45cfd1.jpg',
        },
        {
            name: `Absorbing Light`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/174e8fd3ebd0f8f2.jpg',
        },
        {
            name: `Laxification's Hug`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/a9c0e21a27f7794f.jpg',
        },
        {
            name: `Diluted Elixir`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/63ffc4e95083649e.jpg',
        },
        {
            name: `Lotus Shield`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bf8cbd6821082963.jpg',
        },
        {
            name: `Lantern's Console`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a46251f137c0daa6.jpg',
        },
        {
            name: `Root Powder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/905b276d1cef9c16.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1601302e45b06972.jpg',
            'img/79013c06ee31bfcc.jpg',
            'img/63993ea0dabf57ea.jpg',
            'img/90910c72c708d14d.jpg',
            'img/24e20999b5e7601f.jpg',
        ],
        weapon: [
            'img/394cab2f63d9e69f.jpg',
            'img/200bb3f2ac7038e4.jpg',
            'img/977c52ec20a4d186.jpg',
            'img/ec857732a9f0f249.jpg',
            'img/73b7e7195c78948a.jpg',
        ],
    },
    portrait: 'img/92b7b3c4363cacc1.jpg',
}
