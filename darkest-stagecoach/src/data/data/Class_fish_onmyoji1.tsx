// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_fish_onmyoji1: ClassModData = {
    key: 'fish_onmyoji1',
    name: `Practitioner`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.25,
        bleed: 0.3,
        disease: 0.3,
        move: 0.25,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2203158200'
        }
    ],
    skills: [
        {
            name: `Combusting Talisman`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/256daafe33c98751.jpg',
        },
        {
            name: `Self-Immolation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/59c0e0bc351ecbd8.jpg',
        },
        {
            name: `Invoke Enenra`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/03e4d99d7912c253.jpg',
        },
        {
            name: `Bustling Gale`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ef2cdcf2e37a7a5e.jpg',
        },
        {
            name: `Calm Mind`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/62245e034cfe4292.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
	Thalassic Remedy`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d36b909a538a311e.jpg',
        },
        {
            name: `Strike the Earth`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/f683bd3226c9ba1f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/74789212b5b65d57.jpg',
            'img/243da68f48ec4ccb.jpg',
            'img/ccdd26b1be2e22ca.jpg',
            'img/2e93d8acff52522e.jpg',
            'img/34f94a46f3e09339.jpg',
        ],
        weapon: [
            'img/efc19abd9a90cced.jpg',
            'img/31890476205259e0.jpg',
            'img/78dddcba6aa5bc42.jpg',
            'img/c5a3c37ea124c738.jpg',
            'img/e21cb805ce693c77.jpg',
        ],
    },
    portrait: 'img/3821a4da9720793f.jpg',
}
