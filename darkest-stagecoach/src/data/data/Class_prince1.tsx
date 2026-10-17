// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_prince1: ClassModData = {
    key: 'prince1',
    name: `Prince`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2146660621'
        }
    ],
    skills: [
        {
            name: `Onslaught`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b8f625e6da22317e.jpg',
        },
        {
            name: `Corrosive Spray`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/8ed0f3cbcb020390.jpg',
        },
        {
            name: `Dragon's Venom`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/45d95ce18919f3c2.jpg',
        },
        {
            name: `Demonic Stare`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/f32eba76e142ac93.jpg',
        },
        {
            name: `Bull Rush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/94f0965eabf5d475.jpg',
        },
        {
            name: `Sawtooth Knife`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ffb6ef95aa7b1198.jpg',
        },
        {
            name: `Bless`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2a97432104ac25a7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a91b1a31091908da.jpg',
            'img/32b8712e4d0057e2.jpg',
            'img/4bb019630bcbe4fd.jpg',
            'img/fe3135eb83a70744.jpg',
            'img/9fcf31ac19356e04.jpg',
        ],
        weapon: [
            'img/227d696b0184afc6.jpg',
            'img/346b86144b5ae091.jpg',
            'img/621725196903b181.jpg',
            'img/2ba8252a90fe07da.jpg',
            'img/084d51f6625c422f.jpg',
        ],
    },
    portrait: 'img/1a9eca12276b176c.jpg',
}
