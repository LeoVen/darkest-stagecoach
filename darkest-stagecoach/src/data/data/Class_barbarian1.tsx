// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_barbarian1: ClassModData = {
    key: 'barbarian1',
    name: `Barbarian`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [11.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1600449003'
        }
    ],
    skills: [
        {
            name: `Indomitable Kick`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/041170e137408740.jpg',
        },
        {
            name: `Steady Slice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/6348d89f8c86f9b4.jpg',
        },
        {
            name: `Reckless Rage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/6611a3ab2505c62b.jpg',
        },
        {
            name: `Wild Swing`,
            launch: [false,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/d2f1423b0ab6bb7f.jpg',
        },
        {
            name: `Brutal Focus`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/6a57e7ed3b38bd2e.jpg',
        },
        {
            name: `Primal Champion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bfd5c817e739590c.jpg',
        },
        {
            name: `Swig of Ale`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d7ad1f304d372a26.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2e7574c3b84fd9c6.jpg',
            'img/71539308c8818e7b.jpg',
            'img/fa4393e3d1c76899.jpg',
            'img/5cf4f5d93ec4d574.jpg',
            'img/65cdad90c0dc5a7d.jpg',
        ],
        weapon: [
            'img/c85a81dc45d775f7.jpg',
            'img/8bc50b39c5b24ec3.jpg',
            'img/fe263750da6ce733.jpg',
            'img/ecac38b65b10f84f.jpg',
            'img/580cff83a5d8e8be.jpg',
        ],
    },
    portrait: 'img/bd741abcdaf2dca7.jpg',
}
