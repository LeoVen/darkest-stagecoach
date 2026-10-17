// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arcanist1: ClassModData = {
    key: 'arcanist1',
    name: `Arcanist`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.1,
        blight: 0.5,
        bleed: 0.1,
        disease: 0.5,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.075, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.125, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1800025310'
        }
    ],
    skills: [
        {
            name: `Frostfire Bolt`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ddfa073089c9ab7b.jpg',
        },
        {
            name: `Dragon's Breath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/474d0340d64361c4.jpg',
        },
        {
            name: `Frost Nova`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/916002e33c1996ef.jpg',
        },
        {
            name: `Decurse`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0c5ed0e8b01c7d84.jpg',
        },
        {
            name: `Invisibility`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/115f91b7bf37cd83.jpg',
        },
        {
            name: `Time Warp`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/c8fc8c68a781e104.jpg',
        },
        {
            name: `Arcane Knowledge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/57fc38e343edfccb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4d33b994546366de.jpg',
            'img/c8831c32955259fc.jpg',
            'img/57bd79245e61f7ea.jpg',
            'img/09cca59eff9fb736.jpg',
            'img/b040cabb71e0c614.jpg',
        ],
        weapon: [
            'img/8222d0cbb1e42ace.jpg',
            'img/7eccc0c73a7db0e9.jpg',
            'img/bcafcc7a7aa490c6.jpg',
            'img/b0196e14b7808cd7.jpg',
            'img/e464ecae69ca6f72.jpg',
        ],
    },
    portrait: 'img/70535f4b1cc7e535.jpg',
}
