// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tifa1: ClassModData = {
    key: 'tifa1',
    name: `Tifa`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1133384392'
        }
    ],
    skills: [
        {
            name: `Beat Rush`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/eafbf85be5a281ce.jpg',
        },
        {
            name: `Somersault`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/9903936c4479f3d6.jpg',
        },
        {
            name: `Waterkick`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/65b5d1019908651b.jpg',
        },
        {
            name: `Limit Break`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1a46aa4ca61037f7.jpg',
        },
        {
            name: `Dolphin Blow`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c62692b6fd721e58.jpg',
        },
        {
            name: `Leviathan`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ea5239c3a7d2977b.jpg',
        },
        {
            name: `Final Heaven`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9e56b744ea8e355a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/57af9d9f95aeb855.jpg',
            'img/e8d63a3fc59f12c8.jpg',
            'img/bf59d84c350a37b9.jpg',
            'img/9bf750271c4434e2.jpg',
            'img/7d6f6bed4b66457f.jpg',
        ],
        weapon: [
            'img/04e640312a356b01.jpg',
            'img/ee0bf3f4e85e9c22.jpg',
            'img/f3ea0eebdd3b6d13.jpg',
            'img/178a296756327e19.jpg',
            'img/03c884ca96a5a966.jpg',
        ],
    },
    portrait: 'img/e2bce61f91d32afc.jpg',
}
