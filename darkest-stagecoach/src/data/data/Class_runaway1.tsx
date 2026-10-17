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
            image: 'img/fba48c2b16c2078d.jpg',
        },
        {
            name: `Firefly`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/e519be9a6d9a71ee.jpg',
        },
        {
            name: `Run and Hide`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2373f6e884f3dc9c.jpg',
        },
        {
            name: `Ransack`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a2a858e25737d1ab.jpg',
        },
        {
            name: `Hearthlight`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/6f016a05d1b23992.jpg',
        },
        {
            name: `Controlled Burn`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d107de3c9652589a.jpg',
        },
        {
            name: `Backdraft`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a6bd5e3a45249b1b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4c2fc2c4d469ad42.jpg',
            'img/af75f01772de16fc.jpg',
            'img/a78aa32e6c48dd68.jpg',
            'img/93e6a35291392760.jpg',
            'img/71377314605ad0ba.jpg',
        ],
        weapon: [
            'img/82642ad45bda54b6.jpg',
            'img/e6bd4e2e51eba978.jpg',
            'img/6841a8e8439e5953.jpg',
            'img/67f2192d80b4b188.jpg',
            'img/45b426e324f26451.jpg',
        ],
    },
    portrait: 'img/efd0b2120f6dada0.jpg',
}
