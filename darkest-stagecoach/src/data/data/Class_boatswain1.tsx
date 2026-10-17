// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_boatswain1: ClassModData = {
    key: 'boatswain1',
    name: `Boatswain`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2481566601'
        }
    ],
    skills: [
        {
            name: `Mooring Blow`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/98801e44fa779bdd.jpg',
        },
        {
            name: `Head Cracker`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/52084e30fd096d20.jpg',
        },
        {
            name: `Heave Ho`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/48e66cb6ea4a6012.jpg',
        },
        {
            name: `Ramming Manouver`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1242bc4dd0ffe2c9.jpg',
        },
        {
            name: `Brace for Impact!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/64d8baa59aa5b1e0.jpg',
        },
        {
            name: `Stand behind me!`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/79c3e17f03b664bf.jpg',
        },
        {
            name: `Fight by my side!`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: `@`,
            },
            image: 'img/0ad2ccd40e4a1980.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c5f9ba397a6007c1.jpg',
            'img/17607beb1cadb4e3.jpg',
            'img/c0d7aac7355f4220.jpg',
            'img/13f1013b3e0aa064.jpg',
            'img/79ed763277135a61.jpg',
        ],
        weapon: [
            'img/8783c05edfbe2bd1.jpg',
            'img/a0b6286130f44f0d.jpg',
            'img/58e94b3254b8594c.jpg',
            'img/195befce25641b9c.jpg',
            'img/cb22c377bd221e47.jpg',
        ],
    },
    portrait: 'img/c6b8f80564d13d98.jpg',
}
