// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_barbarianAG1: ClassModData = {
    key: 'barbarianAG1',
    name: `Barbarian`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 1,
        blight: 0,
        bleed: 0,
        disease: 0,
        move: 1,
        debuff: 0,
        deathBlow: 0.5,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 38, speed: 0 },
            { dodge: 0, prot: 0, hp: 45, speed: 0 },
            { dodge: 0, prot: 0, hp: 52, speed: 0 },
            { dodge: 0, prot: 0, hp: 59, speed: 0 },
            { dodge: 0, prot: 0, hp: 66, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 18.0], crit: 0.005, speed: 2 },
            { accuracy: 0, damage: [3.0, 21.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [4.0, 24.0], crit: 0.015, speed: 3 },
            { accuracy: 0, damage: [5.0, 27.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 30.0], crit: 0.025, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1686591937'
        }
    ],
    skills: [
        {
            name: `Carve`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4a19c1b4abf27e2d.jpg',
        },
        {
            name: `Sunder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/68748193adc07111.jpg',
        },
        {
            name: `Cleave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ec44611bea00e7d1.jpg',
        },
        {
            name: `Claw`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/1a49f3089fbf7fb6.jpg',
        },
        {
            name: `Trample`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/46c774627e1d33ae.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/be137e5b9983a7f6.jpg',
        },
        {
            name: `Iron Flesh`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c45d6cd603161768.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e81ed2b84e1c0b5c.jpg',
            'img/a2e3e654d161a658.jpg',
            'img/d0ab7ace8e66ef3e.jpg',
            'img/c08da48ad6bb7eba.jpg',
            'img/2a33f996b9d94b71.jpg',
        ],
        weapon: [
            'img/32b0fa65cb519f47.jpg',
            'img/e75044287a46a7d3.jpg',
            'img/e0e0c17804f63d61.jpg',
            'img/a5ab81d0e9147538.jpg',
            'img/3ecf620869063a16.jpg',
        ],
    },
    portrait: 'img/4c2df3097659f2c2.jpg',
}
