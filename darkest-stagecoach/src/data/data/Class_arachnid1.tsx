// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arachnid1: ClassModData = {
    key: 'arachnid1',
    name: `Arachnid`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.6,
        move: 0.3,
        debuff: 0.35,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.035, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.045, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.055, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1205784606'
        }
    ],
    skills: [
        {
            name: `Impale`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c5e78206c85f7e45.jpg',
        },
        {
            name: `Sting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3e5b3f1b97b31629.jpg',
        },
        {
            name: `Capture`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/b7ba1f482add4851.jpg',
        },
        {
            name: `Own Territory`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~@`,
            },
            image: 'img/a75a142741127ec6.jpg',
        },
        {
            name: `Chrysalis`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d71aa891e2c3a174.jpg',
        },
        {
            name: `Dark Ritual`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/185f5b6a90fee52c.jpg',
        },
        {
            name: `Perception`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/dd81fdb6d4259e24.jpg',
        },
    ],
    equip: {
        armour: [
            'img/21ab890c934befcf.jpg',
            'img/336889b808fa0f1e.jpg',
            'img/53add16454f56279.jpg',
            'img/74f46bc813f52e19.jpg',
            'img/e238a564d18619e1.jpg',
        ],
        weapon: [
            'img/0000f522de65fad8.jpg',
            'img/2d4ef5ad48fa93b8.jpg',
            'img/c475095e66aec81a.jpg',
            'img/41a889de30a232ef.jpg',
            'img/af3b2e19e046c886.jpg',
        ],
    },
    portrait: 'img/0dd68ee5ca4a468e.jpg',
}
