// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_armor_2931052996: ClassModData = {
    key: 'armor_2931052996',
    name: `Armor`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.1,
        bleed: 2,
        disease: 2,
        move: 0.3,
        debuff: 0,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.2, hp: 25, speed: 0 },
            { dodge: 0, prot: 0.25, hp: 27, speed: 0 },
            { dodge: 0, prot: 0.3, hp: 29, speed: 0 },
            { dodge: 0, prot: 0.35, hp: 31, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 33, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 0 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.07, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2931052996'
        }
    ],
    skills: [
        {
            name: `Execute`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2e0637f697dfc394.jpg',
        },
        {
            name: `Chop`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/117b979ce1eb8a0e.jpg',
        },
        {
            name: `Offensive Gesture`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7372aee4c99e66aa.jpg',
        },
        {
            name: `Staring`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/34378f2b7985dcf1.jpg',
        },
        {
            name: `Repair`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/35cfb30d9f6af828.jpg',
        },
        {
            name: `Dizzying Light`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/06b903b93fd1b2c6.jpg',
        },
        {
            name: `Defensive Gesture`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e5a8fc1994034125.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f8bf71f85dd7a5f9.jpg',
            'img/b602e216293d63cd.jpg',
            'img/0c16514430e604f8.jpg',
            'img/7d945ddb5a928ffe.jpg',
            'img/18171841fea05b42.jpg',
        ],
        weapon: [
            'img/0b87a816b6c509df.jpg',
            'img/d36b8c9361145d7d.jpg',
            'img/70b9c48a60564b2a.jpg',
            'img/c6aaf94e0626cb46.jpg',
            'img/6322bb010af26866.jpg',
        ],
    },
    portrait: 'img/d97bf399d3abdf45.jpg',
}
