// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_witcher1: ClassModData = {
    key: 'witcher1',
    name: `Witcher`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.6,
        move: 0.3,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2773469293'
        }
    ],
    skills: [
        {
            name: `Bounty Hunt`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/626a5148f5fb4937.jpg',
        },
        {
            name: `Swords Dance`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7a79a904300c68cc.jpg',
        },
        {
            name: `Samum·MoonDust`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/77c6e5383636fc9f.jpg',
        },
        {
            name: `Vigor Outburst`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c90d847a3f02f6ab.jpg',
        },
        {
            name: `Sign of Axii`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/41c932aecdbc7978.jpg',
        },
        {
            name: `Sign of Aard`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/68867fd8ae064211.jpg',
        },
        {
            name: `Sign of Yrden`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1df128710504844c.jpg',
        },
        {
            name: `Sign of Quen`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b82878717f7a9c27.jpg',
        },
        {
            name: `Sign of Igni`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/0535aad4eb5a5252.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e2ad66ece5d1f134.jpg',
            'img/9f33175f364e334b.jpg',
            'img/0696408a171f884a.jpg',
            'img/8dcf58a5cb00d028.jpg',
            'img/009162402585bf9f.jpg',
        ],
        weapon: [
            'img/b0acd2747d6ee8ca.jpg',
            'img/a364e13b7dc6e882.jpg',
            'img/60f25e76617ad631.jpg',
            'img/9da9d383f2d9b023.jpg',
            'img/081caab68bf99f5e.jpg',
        ],
    },
    portrait: 'img/1717dff51a7acacf.jpg',
}
