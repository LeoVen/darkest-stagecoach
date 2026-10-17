// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bounty_hunter: ClassModData = {
    key: 'bounty_hunter',
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
            image: 'img/b741419728683f51.jpg',
        },
        {
            name: `Mark for Death`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `Come Hither`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/ac4cbcfd653cbf9e.jpg',
        },
        {
            name: `Uppercut`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/275af18e92334458.jpg',
        },
        {
            name: `Flashbang`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/b79434c4149e84e0.jpg',
        },
        {
            name: `Finish Him`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/93db3b4009de09b1.jpg',
        },
        {
            name: `Caltrops`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/7953904819a81100.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ad0d5cf34567fecd.jpg',
            'img/58e89a7c7f68a7d3.jpg',
            'img/49440039865d3f51.jpg',
            'img/7380ef769bfdb7a7.jpg',
            'img/757a7ce8d86bf2af.jpg',
        ],
        weapon: [
            'img/395763b61e1b20da.jpg',
            'img/1925a0ffeecdba1e.jpg',
            'img/86f695026770f644.jpg',
            'img/740383ffd109e5a8.jpg',
            'img/008ff5db51772bf2.jpg',
        ],
    },
    portrait: 'img/41a22e712e681093.jpg',
}
