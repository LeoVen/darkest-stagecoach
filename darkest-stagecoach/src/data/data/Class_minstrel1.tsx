// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_minstrel1: ClassModData = {
    key: 'minstrel1',
    name: `minstrel`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.06, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2122287782'
        }
    ],
    skills: [
        {
            name: `Star meteor`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/eca484bc7b59ec12.jpg',
        },
        {
            name: `Stab lunam`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8dcc01d3a77da446.jpg',
        },
        {
            name: `Reed plain`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8952db0137825610.jpg',
        },
        {
            name: `Last Stand`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/7581a4215b71c2ac.jpg',
        },
        {
            name: `Ebriety`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0fb250450ed2e9f3.jpg',
        },
        {
            name: `Early Spring`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/f044e6d58b36045d.jpg',
        },
        {
            name: `Birdsong`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/e9e17a502c09c9a6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2fa3ed7dcd13dacd.jpg',
            'img/f579c57f6425ec62.jpg',
            'img/e0dc4a776ddfa081.jpg',
            'img/43ee04dea4c82bf2.jpg',
            'img/e23914ce00bf3edc.jpg',
        ],
        weapon: [
            'img/2a8b69def52aebfe.jpg',
            'img/89438d9aa127b985.jpg',
            'img/00343340bcc35ef3.jpg',
            'img/a005c4b18ecb2dd2.jpg',
            'img/55847ef1d01fddac.jpg',
        ],
    },
    portrait: 'img/d63b2554e36db459.jpg',
}
