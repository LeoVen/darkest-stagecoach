// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_krakenslayer1: ClassModData = {
    key: 'krakenslayer1',
    name: `Krakenslayer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2928491130'
        }
    ],
    skills: [
        {
            name: `Blood in the Water`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c154bcaad0174733.jpg',
        },
        {
            name: `The Kill`,
            launch: [false,false,false,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/519e4da7764982eb.jpg',
        },
        {
            name: `Ebb and Flow`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8514d8f36900d183.jpg',
        },
        {
            name: `Blood Hunter`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6033f3707e9e397c.jpg',
        },
        {
            name: `Reel 'em In`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d3a7fe76490947aa.jpg',
        },
        {
            name: `Salt in the Wound`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4f1042d306eaeb0d.jpg',
        },
        {
            name: `Skewer`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c6f6ac3afad1e433.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8419390a329c3197.jpg',
            'img/d9f802c38b07d64e.jpg',
            'img/c42ddf66fe33099c.jpg',
            'img/bb3d1d0ba421bc41.jpg',
            'img/43335625a20c79fe.jpg',
        ],
        weapon: [
            'img/c747020b2bb436c1.jpg',
            'img/0763fbc778579a21.jpg',
            'img/9a0ef82c45176a0d.jpg',
            'img/45631f482d701421.jpg',
            'img/f20f837da8790751.jpg',
        ],
    },
    portrait: 'img/df04ea802ee4a80d.jpg',
}
