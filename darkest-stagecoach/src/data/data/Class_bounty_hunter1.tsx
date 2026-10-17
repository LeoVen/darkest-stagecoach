// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bounty_hunter1: ClassModData = {
    key: 'bounty_hunter1',
    name: `Bounty Hunter`,
    originalHero: true,
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
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Collect Bounty`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/458d9b29c2fe4edb.jpg',
        },
        {
            name: `Mark for Death`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `Come Hither`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/86afd977ed93403d.jpg',
        },
        {
            name: `Uppercut`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/aa3fa84f9f42c0a4.jpg',
        },
        {
            name: `Flashbang`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/33ae4d37a04ccb88.jpg',
        },
        {
            name: `Finish Him`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f7f9c4a343fe6ebb.jpg',
        },
        {
            name: `Caltrops`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/a70da04547941755.jpg',
        },
    ],
    equip: {
        armour: [
            'img/139cc5f227240cab.jpg',
            'img/24d94d84a3bedc6c.jpg',
            'img/b3f4c683ac895766.jpg',
            'img/54db09879b3eefd0.jpg',
            'img/ebcd6855c087993e.jpg',
        ],
        weapon: [
            'img/d964e58721096828.jpg',
            'img/138d8d21630ada98.jpg',
            'img/3ee28c6417162ad2.jpg',
            'img/f4c9634cb2723133.jpg',
            'img/82a17ddfcd58abc9.jpg',
        ],
    },
    portrait: 'img/4e18950f7cc63749.jpg',
}
