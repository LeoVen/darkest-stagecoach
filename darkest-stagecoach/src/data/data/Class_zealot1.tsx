// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_zealot1: ClassModData = {
    key: 'zealot1',
    name: `Zealot`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1129127265'
        }
    ],
    skills: [
        {
            name: `Hateful Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ae069ebb16c05211.jpg',
        },
        {
            name: `Condemnation`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a762db1f3b8a426a.jpg',
        },
        {
            name: `Consecrate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5b0072c33abdd319.jpg',
        },
        {
            name: `Ardent Hammer`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/143de50fdf9ba328.jpg',
        },
        {
            name: `Burning Brand`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/56b14d149e3506e0.jpg',
        },
        {
            name: `Sentence The Guilty`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1cea249898f74b4c.jpg',
        },
        {
            name: `Seethe`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/402980cd715438b2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0ed12f6b9c128f35.jpg',
            'img/f047ca25022d7f9f.jpg',
            'img/252839fc6b437fa1.jpg',
            'img/34ed993515155594.jpg',
            'img/348901d3d052b80d.jpg',
        ],
        weapon: [
            'img/bff6950fb4c14724.jpg',
            'img/5ac53b808bcbefee.jpg',
            'img/3fdcf69cdbca6fca.jpg',
            'img/d66cb641a52cc7a4.jpg',
            'img/31af225a3e4bec0c.jpg',
        ],
    },
    portrait: 'img/6e80d48fba38ce8e.jpg',
}
