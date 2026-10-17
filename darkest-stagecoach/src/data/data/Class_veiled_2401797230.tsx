// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_veiled_2401797230: ClassModData = {
    key: 'veiled_2401797230',
    name: `Veiled`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.1,
        bleed: 2,
        disease: 0.6,
        move: 0.1,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0
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
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2401797230'
        }
    ],
    skills: [
        {
            name: `Disfigure`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/879957db023633fc.jpg',
        },
        {
            name: `Enfeeblement`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/986d0867b90c1d9b.jpg',
        },
        {
            name: `Give To The Living`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/518627930d76e6dd.jpg',
        },
        {
            name: `Withering Chant`,
            launch: [false,true,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/2bb37517cbf24880.jpg',
        },
        {
            name: `Grave Grasp`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/c1c88f2495295e1c.jpg',
        },
        {
            name: `Pierce The Veil`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f753f70bdc71184f.jpg',
        },
        {
            name: `Death Wish`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/80c961df0176fc86.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b7881974834a3934.jpg',
            'img/5e68ad032b1e549c.jpg',
            'img/1bfba403692475fe.jpg',
            'img/a5c780473518e4c1.jpg',
            'img/e416fc9eb6a8bba4.jpg',
        ],
        weapon: [
            'img/649a43fd944a0381.jpg',
            'img/4e5cc0670cf290aa.jpg',
            'img/acbc59f757b89932.jpg',
            'img/482f3d4226b39d95.jpg',
            'img/7423ef38e2e9b7e6.jpg',
        ],
    },
    portrait: 'img/c362a5d4f5f60a9d.jpg',
}
