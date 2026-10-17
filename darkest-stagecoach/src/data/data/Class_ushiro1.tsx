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
            image: 'img/e8a706d87af3ae0b.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2c2af3323aaac68f.jpg',
        },
        {
            name: `Kick`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2c30d4536a7429d9.jpg',
        },
        {
            name: `Foxfire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ae6a15a7d31f7d26.jpg',
        },
        {
            name: `Cut Down`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/d53e1bc4b5f7a36a.jpg',
        },
        {
            name: `Essence Steal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4b88338c296d7ec3.jpg',
        },
        {
            name: `Decimate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/2c5de9da0e4ea6da.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d60a4b4898591c48.jpg',
            'img/f24cc860274f314c.jpg',
            'img/807ee7624f76c1f5.jpg',
            'img/887f9e4ff276d30e.jpg',
            'img/365a512f6ce09357.jpg',
        ],
        weapon: [
            'img/a92c9a4cd1e6e2f2.jpg',
            'img/f43be39bb17cd222.jpg',
            'img/db7ec4819995e2b2.jpg',
            'img/fbb3584fa840230b.jpg',
            'img/bc274a9b3f69ceb7.jpg',
        ],
    },
    portrait: 'img/c9eb9c2361fc7627.jpg',
}
