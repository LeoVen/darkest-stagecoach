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
            image: 'img/e4bdf710d21adf30.jpg',
        },
        {
            name: `Page Cutter`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c0406318881e94f0.jpg',
        },
        {
            name: `Sundering Flesh`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8e3b6b4466d5a335.jpg',
        },
        {
            name: `Breakdown`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6b4aae965525df7e.jpg',
        },
        {
            name: `Eldritch Safeguard`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7b2d1dd8124b00fb.jpg',
        },
        {
            name: `Absorbent Mind`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/e1f72321a8115f43.jpg',
        },
        {
            name: `Malevolent Pact`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/96dfb8f32dc2eca9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0787a729c717830b.jpg',
            'img/16cce84c468e7353.jpg',
            'img/90b0029652224848.jpg',
            'img/e634be34f67635de.jpg',
            'img/906a6b96f4bd3f97.jpg',
        ],
        weapon: [
            'img/8e8fbd1cb1e0ea8b.jpg',
            'img/a94f347ba87be5e7.jpg',
            'img/9ee0e01f2cd28d97.jpg',
            'img/d92aabafd6f9ca74.jpg',
            'img/1a35db4f29bc627a.jpg',
        ],
    },
    portrait: 'img/501c0da2d3945410.jpg',
}
