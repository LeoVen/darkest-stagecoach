// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_keeper1: ClassModData = {
    key: 'keeper1',
    name: `Keeper`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.4,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1688250816'
        }
    ],
    skills: [
        {
            name: `Writhe`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f1a77040816ae5e9.jpg',
        },
        {
            name: `Convalescence`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2652cd5aab1daca9.jpg',
        },
        {
            name: `Rebirth`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4aa61e513ad5a0c4.jpg',
        },
        {
            name: `Daemon's Yoke`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/214116f8f732d1fe.jpg',
        },
        {
            name: `Phantom Wail`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ea4574205cf43640.jpg',
        },
        {
            name: `Cacophony`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e2d1d3e420e9581f.jpg',
        },
        {
            name: `Sacrifice`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/f1db076e1dce91a0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/300df05818ff02cd.jpg',
            'img/ab921bf19bda02b0.jpg',
            'img/6d9e516582703415.jpg',
            'img/c394a787948aea9c.jpg',
            'img/81adb7d62671debb.jpg',
        ],
        weapon: [
            'img/ef58241e24904d61.jpg',
            'img/c92f175ba02b0c6e.jpg',
            'img/d640cf6a1f3f94d9.jpg',
            'img/4613f87201fbc077.jpg',
            'img/dbc1c6b2b38b0dc5.jpg',
        ],
    },
    portrait: 'img/4674e00abc79656c.jpg',
}
