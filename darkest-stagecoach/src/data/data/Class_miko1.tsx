// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_miko1: ClassModData = {
    key: 'miko1',
    name: `Miko`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.05
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2514647919'
        }
    ],
    skills: [
        {
            name: `Extermination`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1f391affd03c951a.jpg',
        },
        {
            name: `Persuasion Needle`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/c36339e8fe25fd53.jpg',
        },
        {
            name: `Homing Amulet`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/79453034b1339581.jpg',
        },
        {
            name: `Evil-sealing Circle`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8ece5616605b86b0.jpg',
        },
        {
            name: `Disaster-dispelling Prayer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9ec0fd6028d3a8cc.jpg',
        },
        {
            name: `Danmaku Barrier`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/66bad97bd287f50a.jpg',
        },
        {
            name: `Fantasy Seal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/9b341e0132ec9f20.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c1ed85058a00d691.jpg',
            'img/1eb368698f9a6ba2.jpg',
            'img/67a61c1927ee4691.jpg',
            'img/1456e88cda2502a5.jpg',
            'img/b7c64ebac3c0122e.jpg',
        ],
        weapon: [
            'img/6210b6a132a59868.jpg',
            'img/6342fe54e3520e08.jpg',
            'img/6a9e1f8b9fcd4f7e.jpg',
            'img/9c01a664d247999b.jpg',
            'img/c3c559bfb039890c.jpg',
        ],
    },
    portrait: 'img/5041fe389c753afe.jpg',
}
