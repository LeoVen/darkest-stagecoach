// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_runaway1: ClassModData = {
    key: 'runaway1',
    name: `Runaway`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Searing Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/acbf29d1a4a55b08.jpg',
        },
        {
            name: `Firefly`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/048ce6f381135d0b.jpg',
        },
        {
            name: `Run and Hide`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0c71242d103c41f7.jpg',
        },
        {
            name: `Ransack`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/544831e630db9b36.jpg',
        },
        {
            name: `Hearthlight`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c8acc2a2a2999849.jpg',
        },
        {
            name: `Controlled Burn`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/610fd3e8a6e46576.jpg',
        },
        {
            name: `Backdraft`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7fa6835c387921d8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/bd1ff503b64af058.jpg',
            'img/a9b7b16fb0e9a576.jpg',
            'img/d8b79a4d34092f5d.jpg',
            'img/0a71a6eb6bf487df.jpg',
            'img/d1eebd09c2bb1930.jpg',
        ],
        weapon: [
            'img/4a63dedb7e6510f1.jpg',
            'img/88ea974bf37c749e.jpg',
            'img/774a405632137164.jpg',
            'img/fe07096e2a4763a7.jpg',
            'img/eac72d58b423f800.jpg',
        ],
    },
    portrait: 'img/59e0560c5ab5b2e0.jpg',
}
