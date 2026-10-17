// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_werewolf1: ClassModData = {
    key: 'werewolf1',
    name: `Lobanil`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.4,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1135620886'
        }
    ],
    skills: [
        {
            name: `Garras Derramadoras de Sangue`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/b3eb00c882edee99.jpg',
        },
        {
            name: `Rugido Apavorante`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/dcf6bc76d059798a.jpg',
        },
        {
            name: `Provocar`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: `@`,
            },
            image: 'img/ecf3524d54442623.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Bomba de Fumaça`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c1e2dfbb558f24a0.jpg',
        },
        {
            name: `Banquete Selvagem`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/3b772ef3bd0442bb.jpg',
        },
        {
            name: `Cabeçada`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/398e89d5a9c4f821.jpg',
        },
        {
            name: `Uivo da Meia-Noite`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/7ac538d61ea2c3a6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8605c3a730bd05dc.jpg',
            'img/b7a93998ada4809c.jpg',
            'img/10d2a7e076c65759.jpg',
            'img/ba8e8cdac6f7e255.jpg',
            'img/83a98c7fd5d3ceaa.jpg',
        ],
        weapon: [
            'img/3719c3a52b30ea1b.jpg',
            'img/e2993de36d2252ce.jpg',
            'img/51dcb31cfaef1f51.jpg',
            'img/4440fe8eb059b1e6.jpg',
            'img/7a255f74c5ee1f50.jpg',
        ],
    },
    portrait: 'img/a1cd39078be0e4a2.jpg',
}
