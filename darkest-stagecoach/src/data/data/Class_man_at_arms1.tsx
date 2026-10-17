// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_man_at_arms1: ClassModData = {
    key: 'man_at_arms1',
    name: `Man-at-Arms`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Crush`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d8e7edd8261fbb21.jpg',
        },
        {
            name: `Rampart`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0bf8790462018972.jpg',
        },
        {
            name: `Bellow`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a0bfdbb5f34e0008.jpg',
        },
        {
            name: `Defender`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/00b54c452ca1d076.jpg',
        },
        {
            name: `Retribution`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/252f9123ea8babea.jpg',
        },
        {
            name: `Command`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/a199af838c2ed134.jpg',
        },
        {
            name: `Bolster`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/1f01a9d4f7ad4473.jpg',
        },
    ],
    equip: {
        armour: [
            'img/92841c5680e6d27c.jpg',
            'img/425075a6aa971627.jpg',
            'img/9d7e31054a553676.jpg',
            'img/85c8eb2ba13b4568.jpg',
            'img/3168bfcfd3415351.jpg',
        ],
        weapon: [
            'img/bff6950fb4c14724.jpg',
            'img/5ac53b808bcbefee.jpg',
            'img/3fdcf69cdbca6fca.jpg',
            'img/d66cb641a52cc7a4.jpg',
            'img/a23bcb7301e36aaf.jpg',
        ],
    },
    portrait: 'img/ae23c1ff155a1f43.jpg',
}
