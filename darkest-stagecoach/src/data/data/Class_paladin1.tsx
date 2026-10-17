// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_paladin1: ClassModData = {
    key: 'paladin1',
    name: `Paladin`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1332249328'
        }
    ],
    skills: [
        {
            name: `Crusader Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ed33fc474c8a0a28.jpg',
        },
        {
            name: `Holy Light`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f4f619c69357f10a.jpg',
        },
        {
            name: `Judgment`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6b78b09c6b034165.jpg',
        },
        {
            name: `Sacred Shield`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6289874a08952e06.jpg',
        },
        {
            name: `Divine Storm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/61c8b3b0e8d27e3f.jpg',
        },
        {
            name: `Blessing of Freedom`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/db7c8728043e2e68.jpg',
        },
        {
            name: `Hammer of Justice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/b654ac716e9b6a1a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/017996f9351ad2a2.jpg',
            'img/d14790bcc7666a93.jpg',
            'img/69a4670d29ead9ee.jpg',
            'img/140b59342c57c342.jpg',
            'img/244d33a072f9f7a3.jpg',
        ],
        weapon: [
            'img/4c8ef93cf780f7f3.jpg',
            'img/b936e4b9d47cfa88.jpg',
            'img/892d5c16e9b7ec3d.jpg',
            'img/061d6da9912cc294.jpg',
            'img/e52746dd9346f835.jpg',
        ],
    },
    portrait: 'img/c59faab8061f8338.jpg',
}
