// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_skadi_2323592084: ClassModData = {
    key: 'skadi_2323592084',
    name: `Abyss hunter`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0,
        bleed: 0,
        disease: 0.9,
        move: 0.1,
        debuff: 0,
        deathBlow: 0.5,
        trap: 1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0.1, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0.15, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0.2, hp: 41, speed: 0 }
        ],
        weapons: [
            { accuracy: 0.01, damage: [1.0, 14.0], crit: 0, speed: 4 },
            { accuracy: 0.02, damage: [1.0, 15.0], crit: -0.02, speed: 5 },
            { accuracy: 0.03, damage: [2.0, 17.0], crit: -0.03, speed: 5 },
            { accuracy: 0.04, damage: [2.0, 19.0], crit: -0.04, speed: 6 },
            { accuracy: 0.05, damage: [2.0, 23.0], crit: -0.05, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2323592084'
        }
    ],
    skills: [
        {
            name: `Quick Chop`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d8c31f9b76fb2c63.jpg',
        },
        {
            name: `Rising Tides`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/152761eda917428a.jpg',
        },
        {
            name: `Olden Moonlight`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/95e71e0b0fbf6e46.jpg',
        },
        {
            name: `Quick reaction`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/89673655a53e633d.jpg',
        },
        {
            name: `Prey Time`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4f3e84d33a2de4fb.jpg',
        },
        {
            name: `Blood Of Olden One`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c28daa0a9aad1099.jpg',
        },
        {
            name: `Condensation`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/99d25413c9c6a9d5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e4eb313aa15b69ee.jpg',
            'img/46fac6be628bab38.jpg',
            'img/1d6bece8fe7bbf4c.jpg',
            'img/728f61d38313aa7c.jpg',
            'img/42c47e81c139bde9.jpg',
        ],
        weapon: [
            'img/68e2e6febd3883fd.jpg',
            'img/6324da451d5ff759.jpg',
            'img/eeccedbaec0254e1.jpg',
            'img/85d4dc6ae0489be2.jpg',
            'img/27d750355082ae1c.jpg',
        ],
    },
    portrait: 'img/812fcbc2f27106b5.jpg',
}
