// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shrapnel1: ClassModData = {
    key: 'shrapnel1',
    name: `Shrapnel`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.6,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: -0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [11.0, 15.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1203645088'
        }
    ],
    skills: [
        {
            name: `Vent`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1a7836000bbfe09d.jpg',
        },
        {
            name: `Overclocking`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/033ef84d36743fcc.jpg',
        },
        {
            name: `Entrenchement`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f64546fe3a899bbc.jpg',
        },
        {
            name: `Fragmentation`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a70535c556a05eae.jpg',
        },
        {
            name: `Flush Out`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fa80eb37b3b47a17.jpg',
        },
        {
            name: `Mow Down`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/c5977bc1cfafc451.jpg',
        },
        {
            name: `Expunge`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d00b40f6b75d4626.jpg',
        },
    ],
    equip: {
        armour: [
            'img/58e094d8ea97806e.jpg',
            'img/9ec89133c3ad6707.jpg',
            'img/c179f6361d857f1e.jpg',
            'img/297efc268dc178d2.jpg',
            'img/93b8bd232d0145ca.jpg',
        ],
        weapon: [
            'img/16a2e623fd1f60c0.jpg',
            'img/a8e064ab9942b618.jpg',
            'img/d4f5e3b74d8892ad.jpg',
            'img/72f1570f8901d7d4.jpg',
            'img/f55546cc25d0a789.jpg',
        ],
    },
    portrait: 'img/b8691e6a4ec5d519.jpg',
}
