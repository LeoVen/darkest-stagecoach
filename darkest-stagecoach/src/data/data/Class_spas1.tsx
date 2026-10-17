// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spas1: ClassModData = {
    key: 'spas1',
    name: `Goblin Huntress`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.03, hp: 35, speed: 0 },
            { dodge: 0.04, prot: 0.04, hp: 42, speed: 0 },
            { dodge: 0.06, prot: 0.08, hp: 49, speed: 0 },
            { dodge: 0.08, prot: 0.16, hp: 56, speed: 0 },
            { dodge: 0.1, prot: 0.21, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2268360314'
        }
    ],
    skills: [
        {
            name: `Buck Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/5ba13305c383a95e.jpg',
        },
        {
            name: `Slug Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/a0863ae2be8c8c7e.jpg',
        },
        {
            name: `Riot Control`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d43e3ad6a1096f9c.jpg',
        },
        {
            name: `Decimate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9f5c14e0d88b5225.jpg',
        },
        {
            name: `Data Link`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `~@`,
            },
            image: 'img/1ea3c11772fc604d.jpg',
        },
        {
            name: `Damage Focus SG`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/64ace58b5c007fbb.jpg',
        },
        {
            name: `Suppression`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/018933cf9de2a096.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ba701f55e737c6d1.jpg',
            'img/8f8f154f0c32aa37.jpg',
            'img/3ce538ebdbfdc84a.jpg',
            'img/98bf9565dd6b0684.jpg',
            'img/629701258c614701.jpg',
        ],
        weapon: [
            'img/990532cbb9a93360.jpg',
            'img/20bbd5c406e4fbd4.jpg',
            'img/8e563a7f14623a2d.jpg',
            'img/c2a0de3a47a19d87.jpg',
            'img/f73505d511bc7609.jpg',
        ],
    },
    portrait: 'img/a7a1363957ffedb2.jpg',
}
