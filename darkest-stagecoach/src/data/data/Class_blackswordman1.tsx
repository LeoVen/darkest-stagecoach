// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_blackswordman1: ClassModData = {
    key: 'blackswordman1',
    name: `Black Swordman`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.3,
        debuff: 0.1,
        deathBlow: 0.75,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 58, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 67, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [15.0, 25.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [17.0, 29.0], crit: 0.09, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1425243237'
        }
    ],
    skills: [
        {
            name: `Chop`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9549acf7898d2597.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/5d72a554d00cc962.jpg',
        },
        {
            name: `Anger`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/71d0010266614005.jpg',
        },
        {
            name: `Repeated Crossbow`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/493d427f8736f8ee.jpg',
        },
        {
            name: `Brand of Sacrifice`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/436b41135c17f4c8.jpg',
        },
        {
            name: `Rage`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1fe15d7d5ba9200d.jpg',
        },
        {
            name: `Cannon Arm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/640867beba312748.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a64541e80747b2c5.jpg',
            'img/2571644373b041cb.jpg',
            'img/1952f63e5b52b604.jpg',
            'img/975f6777d388e746.jpg',
            'img/f91a74644ac4dafc.jpg',
        ],
        weapon: [
            'img/5d4255b85648c3a3.jpg',
            'img/09d909a5292c5727.jpg',
            'img/e7834a15b01b4425.jpg',
            'img/9ce2005f4605e013.jpg',
            'img/2ba9e04ce0b4b143.jpg',
        ],
    },
    portrait: 'img/dfa0b737b11f684e.jpg',
}
