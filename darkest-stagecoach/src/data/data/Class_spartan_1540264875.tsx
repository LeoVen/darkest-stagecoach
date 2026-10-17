// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spartan_1540264875: ClassModData = {
    key: 'spartan_1540264875',
    name: `Spartan`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.35,
        move: 0.35,
        debuff: 0.4,
        deathBlow: 0.55,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.09, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.1, prot: 0.1, hp: 30, speed: 0 },
            { dodge: 0.11, prot: 0.15, hp: 34, speed: 0 },
            { dodge: 0.12, prot: 0.2, hp: 38, speed: 0 },
            { dodge: 0.13, prot: 0.25, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1540264875'
        }
    ],
    skills: [
        {
            name: `Into the Fray!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c0ca75674764915c.jpg',
        },
        {
            name: `Work Together`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f0a5183ff10e5c57.jpg',
        },
        {
            name: `Shield Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/31b4c19eaa7be270.jpg',
        },
        {
            name: `Spear Lance`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/f388d7ed9d49290e.jpg',
        },
        {
            name: `Backline Tactics`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/a0963a0e435f095b.jpg',
        },
        {
            name: `Mysterious Viscous Liquid`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/71d2fe9df722d6e6.jpg',
        },
        {
            name: `Phalanx`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/765ee502386edca2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a126ff92d51ac168.jpg',
            'img/1be18d48ab0a55ef.jpg',
            'img/ba80642e6b8ce283.jpg',
            'img/3ffeaca2c26a3521.jpg',
            'img/f75353a27bfe201b.jpg',
        ],
        weapon: [
            'img/582bfd296d1a03f5.jpg',
            'img/bfa2bc99c66c05ee.jpg',
            'img/5cf25539a4f98491.jpg',
            'img/7254114a17a01f1c.jpg',
            'img/91f5ea603b1aacb8.jpg',
        ],
    },
    portrait: 'img/81965c87766575dd.jpg',
}
