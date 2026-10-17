// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_philomath1: ClassModData = {
    key: 'philomath1',
    name: `Philomath`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.25,
        bleed: 0.25,
        disease: 0.3,
        move: 0.2,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.1, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.11, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.12, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.13, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.14, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2318789444'
        }
    ],
    skills: [
        {
            name: `Head Trauma`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/037eb26cace39687.jpg',
        },
        {
            name: `Page Cutter`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cb4d6eea5f81d452.jpg',
        },
        {
            name: `Sundering Flesh`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/9db1be6ba442dd49.jpg',
        },
        {
            name: `Breakdown`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/880dba5a81d0d58f.jpg',
        },
        {
            name: `Eldritch Safeguard`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bebca64dbeb5bf13.jpg',
        },
        {
            name: `Absorbent Mind`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/3cf20ec39cd10b07.jpg',
        },
        {
            name: `Malevolent Pact`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7f8b004d7e0e6665.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2fc92a44ae0c10d5.jpg',
            'img/77f9bdfe4cd7e5d4.jpg',
            'img/aed341bad0d12e4b.jpg',
            'img/44daef6ea33f5851.jpg',
            'img/9b8211dab2e305f1.jpg',
        ],
        weapon: [
            'img/3dd132e615400e78.jpg',
            'img/ff1da09cf76666a9.jpg',
            'img/71e4bc06f9fda9e4.jpg',
            'img/424cf116c0bb7f6e.jpg',
            'img/b3c969aee6e1dc1e.jpg',
        ],
    },
    portrait: 'img/b0a1cc3036d46d11.jpg',
}
