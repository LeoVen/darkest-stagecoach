// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warden1: ClassModData = {
    key: 'warden1',
    name: `Warden`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.5,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.055, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.065, speed: 5 },
            { accuracy: 0, damage: [12.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=906316834'
        }
    ],
    skills: [
        {
            name: `Rend`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5786606f00f32723.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7faec371be7a6d79.jpg',
        },
        {
            name: `Pommel Smash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/15f0b6d59e767075.jpg',
        },
        {
            name: `Judgement`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/80ca7689a5954beb.jpg',
        },
        {
            name: `Rallying Banner`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/5fdcb4849d37e2d9.jpg',
        },
        {
            name: `Steadfast Banner`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/80d56d13db48d724.jpg',
        },
        {
            name: `Commanding Banner`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/243a35dadb73c3c7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3b88236127afcccc.jpg',
            'img/51025e6a12f37cff.jpg',
            'img/c873daf424d39c9c.jpg',
            'img/06b2756dd8183499.jpg',
            'img/2bb35dddaf01bcc8.jpg',
        ],
        weapon: [
            'img/3fe87cfdbe40a4f8.jpg',
            'img/a9d409548bc97f21.jpg',
            'img/8f84d04918b6a223.jpg',
            'img/b80b1ec7f927217a.jpg',
            'img/b1c53a93add1dbab.jpg',
        ],
    },
    portrait: 'img/a6207203d0774dbd.jpg',
}
