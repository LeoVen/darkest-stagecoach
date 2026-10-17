// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_thorn_1785514611: ClassModData = {
    key: 'thorn_1785514611',
    name: `Thorn`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: -0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 6 },
            { accuracy: 0.05, damage: [8.0, 13.0], crit: 0.03, speed: 6 },
            { accuracy: 0.1, damage: [9.0, 14.0], crit: 0.04, speed: 7 },
            { accuracy: 0.15, damage: [10.0, 16.0], crit: 0.05, speed: 7 },
            { accuracy: 0.2, damage: [11.0, 17.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1785514611'
        }
    ],
    skills: [
        {
            name: `Thrust`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/677909b9e63af111.jpg',
        },
        {
            name: `Single Out`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/f72f7d968340597b.jpg',
        },
        {
            name: `Wilt`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/dc4ae89782ab4272.jpg',
        },
        {
            name: `Perforate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/0d3e9e40d1ecd989.jpg',
        },
        {
            name: `Dare`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b4619e081a482169.jpg',
        },
        {
            name: `Blossom`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/a69903af407875a2.jpg',
        },
        {
            name: `Hearken`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/626c783367069a7e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fe403adc4d15fa94.jpg',
            'img/3a380aaa254d3639.jpg',
            'img/def60c665c449518.jpg',
            'img/0db68620d878ae6e.jpg',
            'img/17f70fb250f72cc0.jpg',
        ],
        weapon: [
            'img/09b2ebaeec4f091d.jpg',
            'img/e1ae6eaa6d90fca6.jpg',
            'img/7ada6e57a8ec8197.jpg',
            'img/f7265b4552a3ec38.jpg',
            'img/7250f4cdd0b68031.jpg',
        ],
    },
    portrait: 'img/ce13c4da8d8a94b3.jpg',
}
