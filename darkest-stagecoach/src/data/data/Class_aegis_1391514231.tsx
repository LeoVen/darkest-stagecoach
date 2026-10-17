// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_aegis_1391514231: ClassModData = {
    key: 'aegis_1391514231',
    name: `Royal Aegis`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [12.0, 22.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1391514231'
        }
    ],
    skills: [
        {
            name: `Two Handed Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/95ed190b9741ce32.jpg',
        },
        {
            name: `Overhead Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/29f415edbcce39a3.jpg',
        },
        {
            name: `Multi-Hit`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8c08d8e3effbb3a9.jpg',
        },
        {
            name: `Dark Solace`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ae6d3adec50ecf8c.jpg',
        },
        {
            name: `Launch`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/92ca250414ceacc6.jpg',
        },
        {
            name: `Oath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9b100015f937f693.jpg',
        },
        {
            name: `Dark Barrage`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/17f0a8f17fee29f3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dcd29135e677f546.jpg',
            'img/1226433be3f61423.jpg',
            'img/24d8c026b453036c.jpg',
            'img/8083e297d3f7a5d6.jpg',
            'img/09f7732411249c11.jpg',
        ],
        weapon: [
            'img/e46f216134cc4488.jpg',
            'img/ea68e57a0f7da50d.jpg',
            'img/178430c0a4e2284b.jpg',
            'img/cc93d325ee2ee2ac.jpg',
            'img/1d861e54896ede08.jpg',
        ],
    },
    portrait: 'img/d85c9e029eea5e00.jpg',
}
