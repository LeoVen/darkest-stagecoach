// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_seer1: ClassModData = {
    key: 'seer1',
    name: `Seer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.6,
        move: 0.3,
        debuff: 0.7,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=934967620'
        }
    ],
    skills: [
        {
            name: `Touch of Death`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/16f4dc19fec6b452.jpg',
        },
        {
            name: `Hypnosis`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/66ab25b981741280.jpg',
        },
        {
            name: `Celestial Renewal`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4a17b58a5826a8a6.jpg',
        },
        {
            name: `Tranquility`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/a04da15c8ec4320a.jpg',
        },
        {
            name: `Rejuvenating Surge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/e6bba21f7e320089.jpg',
        },
        {
            name: `Spectral Blast`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/9f5e7f5eb6186d4d.jpg',
        },
        {
            name: `Ethereal Blessing`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ca31964f75e684ff.jpg',
        },
    ],
    equip: {
        armour: [
            'img/d24c43b39dc19a5c.jpg',
            'img/84a3a29d3c135db4.jpg',
            'img/f3796055c0e07a89.jpg',
            'img/b533ddcc439596bf.jpg',
            'img/7a9f557a589d6f05.jpg',
        ],
        weapon: [
            'img/925804895a312ea0.jpg',
            'img/d4c7543f4c10e139.jpg',
            'img/4fa8fde11b4ac8d3.jpg',
            'img/1b4fe0425894cc36.jpg',
            'img/7be71ee91999fb93.jpg',
        ],
    },
    portrait: 'img/7e9315192999a125.jpg',
}
