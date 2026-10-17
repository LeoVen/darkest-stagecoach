// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_veiled1: ClassModData = {
    key: 'veiled1',
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
            image: 'img/0d53b38c1be27593.jpg',
        },
        {
            name: `Enfeeblement`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/12e06420e0a94ce5.jpg',
        },
        {
            name: `Give To The Living`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1ef66a5a45d6530d.jpg',
        },
        {
            name: `Withering Chant`,
            launch: [false,true,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/c72cc0f0e1242fa3.jpg',
        },
        {
            name: `Grave Grasp`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/d2883a0ec0d4fc1a.jpg',
        },
        {
            name: `Pierce The Veil`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b42588d904d5934a.jpg',
        },
        {
            name: `Death Wish`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/4a617ca0e12b31de.jpg',
        },
    ],
    equip: {
        armour: [
            'img/121bc95da065c85b.jpg',
            'img/38e4edeed592a23e.jpg',
            'img/b7eb127df47e2373.jpg',
            'img/d92865ab2cbf223b.jpg',
            'img/93aaa618924f0830.jpg',
        ],
        weapon: [
            'img/989ef4726dd18fc9.jpg',
            'img/e45640df9498d834.jpg',
            'img/455d4074ad67fcdc.jpg',
            'img/d706c4c70400ba31.jpg',
            'img/e3399aa1c4e4e825.jpg',
        ],
    },
    portrait: 'img/cdf46d6591af623c.jpg',
}
