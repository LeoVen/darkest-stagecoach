// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_choir_hunter_2505955762: ClassModData = {
    key: 'choir_hunter_2505955762',
    name: `Choir Hunter`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.25,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.25
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.03, speed: 9 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.04, speed: 9 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 10 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 10 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.07, speed: 11 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2505955762'
        }
    ],
    skills: [
        {
            name: `Serrated Cane`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/8ee23381e9b666e5.jpg',
        },
        {
            name: `Augur of Ebrietas`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f8ce2b7a1cbda20e.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/60ac9a9a88cbdd67.jpg',
        },
        {
            name: `A Call Beyond`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8e9f14113fd35956.jpg',
        },
        {
            name: `The Old Blood`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/db234c9715275721.jpg',
        },
        {
            name: `Choir Bell`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/16e5035180399f4b.jpg',
        },
        {
            name: `Phantasm Shell`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ac06b8e8d739fa2d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ccf9b8b04440712c.jpg',
            'img/ef53f8f84fe85dc0.jpg',
            'img/92dec988d63abbb6.jpg',
            'img/65d48623aff45d37.jpg',
            'img/bf8f4de09b1d443c.jpg',
        ],
        weapon: [
            'img/8872a7ee6e4bf9e4.jpg',
            'img/7dd32415458ef9d7.jpg',
            'img/ad9e77f683732bb9.jpg',
            'img/4eadfdd70ef6efa2.jpg',
            'img/491f953162672c15.jpg',
        ],
    },
    portrait: 'img/b813f4ed5ca58e3f.jpg',
}
