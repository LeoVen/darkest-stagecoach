// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_choir_hunter1: ClassModData = {
    key: 'choir_hunter1',
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
            image: 'img/9e122d8c835a6d54.jpg',
        },
        {
            name: `Augur of Ebrietas`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/804571be18b69023.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cde98ce429ba4012.jpg',
        },
        {
            name: `A Call Beyond`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/f18f40e062d51205.jpg',
        },
        {
            name: `The Old Blood`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/52f84ec8af84af7f.jpg',
        },
        {
            name: `Choir Bell`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/a1fc0acbcfb8fa96.jpg',
        },
        {
            name: `Phantasm Shell`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/2afd99abf88c209c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a69f308dcbebb442.jpg',
            'img/267359fcdf961e79.jpg',
            'img/f6afa82745148b6e.jpg',
            'img/f3cda8786d27f722.jpg',
            'img/90039541ccc67a29.jpg',
        ],
        weapon: [
            'img/d99030d066dc8a22.jpg',
            'img/d047d44df0e82598.jpg',
            'img/4bb5512b27b6f22b.jpg',
            'img/a2baca1dc7a41c9c.jpg',
            'img/3f0cdb6616944f43.jpg',
        ],
    },
    portrait: 'img/7d6b91204632558d.jpg',
}
