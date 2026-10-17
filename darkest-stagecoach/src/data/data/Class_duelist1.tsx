// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_duelist1: ClassModData = {
    key: 'duelist1',
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
            image: 'img/4e45afc80af67dfe.jpg',
        },
        {
            name: `Touché`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c575acd0f336ae4d.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a402675e6afae515.jpg',
        },
        {
            name: `Disengage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9e871476afd95294.jpg',
        },
        {
            name: `Flèche`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4e696b0d282bae42.jpg',
        },
        {
            name: `Coup de Grâce`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1a509543f3b0e1e9.jpg',
        },
        {
            name: `The Boot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8be45b826a2dea75.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c98e146d45870035.jpg',
            'img/7c3cbd369d73b813.jpg',
            'img/b719dfca6ae68071.jpg',
            'img/0fe5a825091abf68.jpg',
            'img/9b33dee79e56c2ef.jpg',
        ],
        weapon: [
            'img/c79e3a5eef9860b7.jpg',
            'img/bb9dcdcd75f7382e.jpg',
            'img/a710cf5faafcc300.jpg',
            'img/4e58ead8da6c9a88.jpg',
            'img/081898d6b5b56454.jpg',
        ],
    },
    portrait: 'img/2b3d068e0e98ea36.jpg',
}
