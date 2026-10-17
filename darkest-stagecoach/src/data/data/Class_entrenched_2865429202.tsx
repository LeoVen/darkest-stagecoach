// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_entrenched_2865429202: ClassModData = {
    key: 'entrenched_2865429202',
    name: `Entrenched`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.35,
        bleed: 0.35,
        disease: 0.4,
        move: 0.15,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.11, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2865429202'
        }
    ],
    skills: [
        {
            name: `Shovel Bash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/bd72dfba2ecb77c0.jpg',
        },
        {
            name: `Stand Proud`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ab50bc83be700985.jpg',
        },
        {
            name: `Fortifications`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6e09350db66eaab6.jpg',
        },
        {
            name: `Flare Gun`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c10d103b33bece39.jpg',
        },
        {
            name: `Retreating Flare`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/31f8b342d9a179ca.jpg',
        },
        {
            name: `Artillery Fire`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/58674262e9290051.jpg',
        },
        {
            name: `Patch Up`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/900bb969f4823ebf.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ce8b878fe03d18a6.jpg',
            'img/d203fe8393dd92c6.jpg',
            'img/9c0e270075ff9477.jpg',
            'img/16a341935a63e62c.jpg',
            'img/1e122cb85be527d7.jpg',
        ],
        weapon: [
            'img/19024eade44ff489.jpg',
            'img/9d5599ffdd95351b.jpg',
            'img/d693084bc25ccab9.jpg',
            'img/f94c4874e319c498.jpg',
            'img/2a837579e0bb127a.jpg',
        ],
    },
    portrait: 'img/a9874c46da95af84.jpg',
}
