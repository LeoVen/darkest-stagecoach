// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shield_maiden_963658853: ClassModData = {
    key: 'shield_maiden_963658853',
    name: `Shield Maiden`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.7,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0.05, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 39, speed: 0 },
            { dodge: 0.15, prot: 0.07, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0.07, hp: 53, speed: 0 },
            { dodge: 0.25, prot: 0.1, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=963658853'
        }
    ],
    skills: [
        {
            name: `Cross Blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/32396fc27021f96e.jpg',
        },
        {
            name: `Front Guard`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `@~`,
            },
            image: 'img/fe912474f5413352.jpg',
        },
        {
            name: `Ram Shield`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d8ba434b70b862c0.jpg',
        },
        {
            name: `Avenger`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/628ad8f82a59eff8.jpg',
        },
        {
            name: `Guardian`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `@`,
            },
            image: 'img/d37cc4f39f2135d1.jpg',
        },
        {
            name: `Mending Touch`,
            launch: [false,false,false,true],
            target: {
                targets: [false,true,true,false],
                mods: `@`,
            },
            image: 'img/0e03d14806452f79.jpg',
        },
        {
            name: `Indomitable`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2ce5ae8285548c1e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9697da396f1c6eed.jpg',
            'img/c02007cd696c8acd.jpg',
            'img/af20ba99f9957c51.jpg',
            'img/cc47a741c86f4841.jpg',
            'img/a1a68222759267b7.jpg',
        ],
        weapon: [
            'img/0b30c6341ce5de36.jpg',
            'img/bf988169cdcc6605.jpg',
            'img/1b2a47c5f06786a3.jpg',
            'img/6cc21cafbab41565.jpg',
            'img/22161956618ed3ef.jpg',
        ],
    },
    portrait: 'img/028a90523496e235.jpg',
}
