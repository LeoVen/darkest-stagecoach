// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_kheir1: ClassModData = {
    key: 'kheir1',
    name: `Heir`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.075, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.175, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.225, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.275, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1649053641'
        }
    ],
    skills: [
        {
            name: `Letter Opener`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b3e5933870b309cd.jpg',
        },
        {
            name: `Panic!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/98128500e87799bf.jpg',
        },
        {
            name: `Have a taste!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/2288f98a6a3f9231.jpg',
        },
        {
            name: `A Snifter to Share`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c32512f370b21da7.jpg',
        },
        {
            name: `Drown My Sorrows`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3962334da4502276.jpg',
        },
        {
            name: `Research`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e7fc940a6e5f6e14.jpg',
        },
        {
            name: `Promotion`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/dcf05ca978a7d907.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8b97982756636014.jpg',
            'img/aae61fe2c6d9a6e5.jpg',
            'img/9d7a7abdf3252d0c.jpg',
            'img/057c8ac885641389.jpg',
            'img/6d499bb4867b0623.jpg',
        ],
        weapon: [
            'img/ef5a96deb6a168ff.jpg',
            'img/9dce381d0a3a1c3d.jpg',
            'img/95c9e1e6b6f0e337.jpg',
            'img/56493a76a46ca715.jpg',
            'img/71a67dd8ef49b006.jpg',
        ],
    },
    portrait: 'img/0d8b3aa2ccb7d8b5.jpg',
}
