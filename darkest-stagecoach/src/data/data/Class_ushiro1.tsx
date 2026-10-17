// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ushiro1: ClassModData = {
    key: 'ushiro1',
    name: `Blazing Lord`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.2,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
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
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2182716765'
        }
    ],
    skills: [
        {
            name: `Spirit of the Fox God`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1f5b0f3b338ab50c.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/143f390f55232763.jpg',
        },
        {
            name: `Kick`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6ae976e840a60b54.jpg',
        },
        {
            name: `Foxfire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/0f988f3fbb63b849.jpg',
        },
        {
            name: `Cut Down`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/481e03c2f14a7e33.jpg',
        },
        {
            name: `Essence Steal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e6fc704b37667252.jpg',
        },
        {
            name: `Decimate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/2729f29df8ec05b1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c1c86219aba6b3c2.jpg',
            'img/7535ffe409dbfb73.jpg',
            'img/7aa217a120ecedb4.jpg',
            'img/51620ec9f3dce5ff.jpg',
            'img/19eb1e8a166213cb.jpg',
        ],
        weapon: [
            'img/a0cde26c08f3ea00.jpg',
            'img/5333989c84198122.jpg',
            'img/8079567c13fc5891.jpg',
            'img/1b838bf53c5da353.jpg',
            'img/853e70f92bcc4c47.jpg',
        ],
    },
    portrait: 'img/1ba7b513176b7ff5.jpg',
}
