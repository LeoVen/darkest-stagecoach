// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_keg_hunter1: ClassModData = {
    key: 'keg_hunter1',
    name: `Powder Keg`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
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
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2248772895'
        }
    ],
    skills: [
        {
            name: `Spear Thrust`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8fcb3ce56f0d5b70.jpg',
        },
        {
            name: `Flak Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/aad6e6abeb714daa.jpg',
        },
        {
            name: `Staggering Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d03685e46f056d9f.jpg',
        },
        {
            name: `Nail Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c8dd519fc1aa9973.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cde98ce429ba4012.jpg',
        },
        {
            name: `Rallying Slash`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4c46eaac5ea0178d.jpg',
        },
        {
            name: `Blood Bullets`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/cdadb66a114a7191.jpg',
        },
    ],
    equip: {
        armour: [
            'img/394c6bd1f490b10f.jpg',
            'img/f3f173a2dade2071.jpg',
            'img/7d3b17041b83b0ae.jpg',
            'img/4a7719694dab3912.jpg',
            'img/8856104f840046e5.jpg',
        ],
        weapon: [
            'img/b0b12cf59f8a86e6.jpg',
            'img/387e6c29e8974df1.jpg',
            'img/c5d72f4be22d6cd6.jpg',
            'img/8bc52fc670c7148d.jpg',
            'img/6b3810db40f697b7.jpg',
        ],
    },
    portrait: 'img/047ba8140fb8a92e.jpg',
}
