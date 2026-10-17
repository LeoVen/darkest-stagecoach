// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_duelist: ClassModData = {
    key: 'duelist',
    name: `Duelist`,
    originalHero: true,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Anticipation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8ee861f146643e55.jpg',
        },
        {
            name: `Touché`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2c63009d651e07e3.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/dcc69a57c0c84aa3.jpg',
        },
        {
            name: `Disengage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/321df81401783b7d.jpg',
        },
        {
            name: `Flèche`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9218af735c088dd3.jpg',
        },
        {
            name: `Coup de Grâce`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fe5c09f8767cb0fc.jpg',
        },
        {
            name: `The Boot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/462d33fabd003b36.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c8d6fccdf4ceceb4.jpg',
            'img/77645d99baf49880.jpg',
            'img/57744b0bf75ee756.jpg',
            'img/0cf06e8cb08a74a7.jpg',
            'img/2859875426eb0170.jpg',
        ],
        weapon: [
            'img/7424caa88d4add7c.jpg',
            'img/a561de3194b17c31.jpg',
            'img/e8776c8a9bf0ce38.jpg',
            'img/206e72f5f7b05904.jpg',
            'img/3dc594d38dfa5d8f.jpg',
        ],
    },
    portrait: 'img/6a64a5bbadda5cee.jpg',
}
