// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hexer1: ClassModData = {
    key: 'hexer1',
    name: `Hexer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.73,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2572011671'
        }
    ],
    skills: [
        {
            name: `Melt`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d3e9e3f214264a45.jpg',
        },
        {
            name: `Malicious`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ee1c185335271925.jpg',
        },
        {
            name: `Malform`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a0f22710664fd50c.jpg',
        },
        {
            name: `Excruciating Pain`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/4b1011d783a8ff78.jpg',
        },
        {
            name: `Putrefied Flesh`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8651d65f888dc378.jpg',
        },
        {
            name: `Eroded Mind`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/9b421ad76d1fe922.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Ichor Incantation`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/d1966250775c5679.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6524967605324276.jpg',
            'img/91647eda623d0d8e.jpg',
            'img/3f04eafea569cb01.jpg',
            'img/29f87b2ac5df9d55.jpg',
            'img/d42e618430aad033.jpg',
        ],
        weapon: [
            'img/6321c2cf7ba37c56.jpg',
            'img/f59cd27b4572ffa5.jpg',
            'img/e059a0cd4e06b1aa.jpg',
            'img/7e5d3f664fd9a51c.jpg',
            'img/bd4304bd3372570f.jpg',
        ],
    },
    portrait: 'img/c7a7f40c96234795.jpg',
}
