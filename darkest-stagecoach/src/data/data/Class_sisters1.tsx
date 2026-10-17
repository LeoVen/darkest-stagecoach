// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_sisters1: ClassModData = {
    key: 'sisters1',
    name: `Sisters`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1440822424'
        }
    ],
    skills: [
        {
            name: `Possession`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/05b3e1294b410749.jpg',
        },
        {
            name: `Weed Out`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c62d51cc0114e3b6.jpg',
        },
        {
            name: `Blossom`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/755eda195a544660.jpg',
        },
        {
            name: `Bramble`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/817b7c1d5043e06b.jpg',
        },
        {
            name: `Trespass`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b7efab95b1bc8c39.jpg',
        },
        {
            name: `Shroud`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c9a3802132957253.jpg',
        },
        {
            name: `Crimson Dance`,
            launch: [false,true,false,true],
            target: {
                targets: [true,false,true,false],
                mods: `~`,
            },
            image: 'img/9b2c707b60bedab4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e1e16f94cdc946b9.jpg',
            'img/90c48a6ffb6dedee.jpg',
            'img/fa3cd0ed72cdd22e.jpg',
            'img/a026e0ea0cf17228.jpg',
            'img/7bae85030a93c217.jpg',
        ],
        weapon: [
            'img/823b5c886ff2660c.jpg',
            'img/c88edb4d71625f4c.jpg',
            'img/e7937f7939e45f11.jpg',
            'img/4655447df4c8dfe4.jpg',
            'img/73bff51ab9f5f0f8.jpg',
        ],
    },
    portrait: 'img/9f6e318f1f8f9e56.jpg',
}
