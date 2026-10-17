// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_musketeer2: ClassModData = {
    key: 'musketeer2',
    name: `Musketeer`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1624470590'
        }
    ],
    skills: [
        {
            name: ``,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e9b60eee7dd860c4.jpg',
        },
        {
            name: ``,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8d55b6d3886025ff.jpg',
        },
        {
            name: `Piercing Round`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5e5a74ce6a91dfea.jpg',
        },
        {
            name: ``,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/89435f825c096e70.jpg',
        },
        {
            name: `Retreating Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/482e2e43d92df5ec.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Embolden`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c49f7fdab422b298.jpg',
        },
        {
            name: ``,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4e0d2b7e9a276c5e.jpg',
        },
    ],
    equip: {
        armour: [
            '',
            '',
            '',
            '',
            '',
        ],
        weapon: [
            '',
            '',
            '',
            '',
            '',
        ],
    },
    portrait: '',
}
