// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arcanist_1800025310: ClassModData = {
    key: 'arcanist_1800025310',
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
            image: 'img/93c73ba81f9ea378.jpg',
        },
        {
            name: `Dragon's Breath`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/22540fe178149433.jpg',
        },
        {
            name: `Frost Nova`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1459035506ca3e22.jpg',
        },
        {
            name: `Decurse`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c9e820ec3043567e.jpg',
        },
        {
            name: `Invisibility`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/488ee0919ee38b78.jpg',
        },
        {
            name: `Time Warp`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/5c1b2c146ffcc340.jpg',
        },
        {
            name: `Arcane Knowledge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d02c42b5b450ea2f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d4b7edb3c49c09e0.jpg',
            'img/8b39a682fa3a4161.jpg',
            'img/32cc715bd7d21a83.jpg',
            'img/3a9b0db2f384f87d.jpg',
            'img/6bac3386ef51ecf8.jpg',
        ],
        weapon: [
            'img/23c098061774224e.jpg',
            'img/8f58a52d3d6a2bc4.jpg',
            'img/25d23f8e9d8257a6.jpg',
            'img/1ab1f4e965cd0f70.jpg',
            'img/d16249a011351499.jpg',
        ],
    },
    portrait: 'img/2527b8e3189248ba.jpg',
}
