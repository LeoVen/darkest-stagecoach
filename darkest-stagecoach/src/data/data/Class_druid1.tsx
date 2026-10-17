// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_druid1: ClassModData = {
    key: 'druid1',
    name: `Druid`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1110338003'
        }
    ],
    skills: [
        {
            name: `Drain Life`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d221c9da8169f337.jpg',
        },
        {
            name: `Healing Mist`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/ded97685d2cd8bac.jpg',
        },
        {
            name: `Tremors`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/3a1494b892a1bf84.jpg',
        },
        {
            name: `Summon Thorn`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b2f7290d7b46c999.jpg',
        },
        {
            name: `Rejuvenate`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bea7716633cd6504.jpg',
        },
        {
            name: `Cleansing Rain`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/e38baeca012f8747.jpg',
        },
        {
            name: `Entangle`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7aecf0b9790bab05.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ba24a29a7a907a52.jpg',
            'img/c28e0cd5ffd981d0.jpg',
            'img/579b0bbbfbd52f38.jpg',
            'img/d76230250e522777.jpg',
            'img/b222bfd0035662aa.jpg',
        ],
        weapon: [
            'img/03978250cd6eebdb.jpg',
            'img/0111814a11be8370.jpg',
            'img/6050baa31cbb31b8.jpg',
            'img/88b8c0d4f74e2196.jpg',
            'img/f2e699ecd4828555.jpg',
        ],
    },
    portrait: 'img/fb0c6734f9659a98.jpg',
}
