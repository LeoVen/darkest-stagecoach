// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_heir_1628622327: ClassModData = {
    key: 'heir_1628622327',
    name: `Heir`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.5,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.01, speed: 4 },
            { accuracy: 0.06, damage: [5.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0.1, damage: [6.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0.14, damage: [6.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0.18, damage: [7.0, 14.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1628622327'
        }
    ],
    skills: [
        {
            name: `Protect Me`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7eaab98deccc78fe.jpg',
        },
        {
            name: `Roses Thorn`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/abf2279ad559bc6e.jpg',
        },
        {
            name: `Bloom`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/70a137ed5d6eb6bb.jpg',
        },
        {
            name: `Divine Communion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f18b85b5778887c3.jpg',
        },
        {
            name: `Roses Embrace`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/7d089942e63a08c6.jpg',
        },
        {
            name: `Roses Offering`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f4c8ce99bace88c5.jpg',
        },
        {
            name: `Roses Vine`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/542cccb1664fa83b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/32476ed2a06d2bd4.jpg',
            'img/0ba0e2b197b5a572.jpg',
            'img/ff03e6f10e55191b.jpg',
            'img/e68df36fa9908ba0.jpg',
            'img/7b2f5876f7ec8c4b.jpg',
        ],
        weapon: [
            'img/a331275d491db421.jpg',
            'img/d71b9649c66ac629.jpg',
            'img/c1ba84e4bb05356d.jpg',
            'img/cb5ea6e721837612.jpg',
            'img/648ae7d674b089a4.jpg',
        ],
    },
    portrait: 'img/913fa6027de89f01.jpg',
}
