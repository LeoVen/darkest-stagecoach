// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warden1: ClassModData = {
    key: 'warden1',
    name: `Warden`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.5,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.055, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.065, speed: 5 },
            { accuracy: 0, damage: [12.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=906316834'
        }
    ],
    skills: [
        {
            name: `Rend`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ee8aa8309b11daf2.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2d81f0512bcfc838.jpg',
        },
        {
            name: `Pommel Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/cb356714a0fe3c20.jpg',
        },
        {
            name: `Judgement`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/4d80b9bbbd02ca32.jpg',
        },
        {
            name: `Rallying Banner`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/49209f44da78a5ca.jpg',
        },
        {
            name: `Steadfast Banner`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/8db3c317e056e9e8.jpg',
        },
        {
            name: `Commanding Banner`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/41a76e4e047dd05e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/22f3f89249e5e41a.jpg',
            'img/12a9132b03899b15.jpg',
            'img/75ddb522a32457b6.jpg',
            'img/3007faef375ab5d0.jpg',
            'img/bee5adbe79728517.jpg',
        ],
        weapon: [
            'img/95e586713957cb6c.jpg',
            'img/79721d4766d1c12a.jpg',
            'img/d7610928a3b5a203.jpg',
            'img/ea35eb33ce8e7556.jpg',
            'img/d248e5ffa8bfe7ba.jpg',
        ],
    },
    portrait: 'img/1f83830aeaf90212.jpg',
}
