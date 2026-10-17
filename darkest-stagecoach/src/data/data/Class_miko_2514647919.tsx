// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_miko_2514647919: ClassModData = {
    key: 'miko_2514647919',
    name: `Miko`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.05
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2514647919'
        }
    ],
    skills: [
        {
            name: `Extermination`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/95959052e8776e7e.jpg',
        },
        {
            name: `Persuasion Needle`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/48d3e2df28fdf45c.jpg',
        },
        {
            name: `Homing Amulet`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/46dfa38d0c38ee19.jpg',
        },
        {
            name: `Evil-sealing Circle`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d64b88d1dcda7151.jpg',
        },
        {
            name: `Disaster-dispelling Prayer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/417b70b627a042c8.jpg',
        },
        {
            name: `Danmaku Barrier`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/08ad67489e13e809.jpg',
        },
        {
            name: `Fantasy Seal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/cc3ca4a6a73649a0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4ab4f3153ca84f83.jpg',
            'img/24c9905ec7c0ee55.jpg',
            'img/4d58bef5fe6e9c2d.jpg',
            'img/2716f44326e43741.jpg',
            'img/2e3f91dbd253941a.jpg',
        ],
        weapon: [
            'img/4143d12e75b351b6.jpg',
            'img/b6d560e274de5581.jpg',
            'img/46e062ad4ecea0a9.jpg',
            'img/bf6f72bab6d9eba5.jpg',
            'img/ad9cde703e4072d3.jpg',
        ],
    },
    portrait: 'img/a68fcfda0da39260.jpg',
}
