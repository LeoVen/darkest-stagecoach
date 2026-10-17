// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_thrall1: ClassModData = {
    key: 'thrall1',
    name: `Thrall`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 51, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 65, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0, speed: 0 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.01, speed: 0 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [12.0, 23.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [13.0, 26.0], crit: 0.04, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1175904375'
        }
    ],
    skills: [
        {
            name: `Maim`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4ef1effc21d16a51.jpg',
        },
        {
            name: `Gore`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/24d8f7ff55c75c44.jpg',
        },
        {
            name: `Indomitable`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3a311a523a46ebbc.jpg',
        },
        {
            name: `Menace`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/9f76f52df3ec8f74.jpg',
        },
        {
            name: `Cataclysm`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/f5efbbd4b61bf2dd.jpg',
        },
        {
            name: `Trample`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/a4b1359992559dee.jpg',
        },
        {
            name: `Tremor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/b248eff3fda17951.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b9801ac8a9126c85.jpg',
            'img/41d4972fe54edfec.jpg',
            'img/1a5f194e7fd556bd.jpg',
            'img/b731a00b9042e177.jpg',
            'img/83738da87aa140b5.jpg',
        ],
        weapon: [
            'img/eca1beec87d6c14e.jpg',
            'img/78aaa13f3f1bc733.jpg',
            'img/d8b1876ee0866ea1.jpg',
            'img/c2b2842581158c45.jpg',
            'img/d85eb2f3906df5d0.jpg',
        ],
    },
    portrait: 'img/00d2511ac8da0d25.jpg',
}
