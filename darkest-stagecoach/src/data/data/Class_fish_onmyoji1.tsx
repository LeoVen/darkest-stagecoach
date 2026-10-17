// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_fish_onmyoji1: ClassModData = {
    key: 'fish_onmyoji1',
    name: `Practitioner`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.25,
        bleed: 0.3,
        disease: 0.3,
        move: 0.25,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2203158200'
        }
    ],
    skills: [
        {
            name: `Combusting Talisman`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9ae39b915fb07c90.jpg',
        },
        {
            name: `Self-Immolation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5ae18ad6963bcbbb.jpg',
        },
        {
            name: `Invoke Enenra`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/84ddd56cb4f01ab5.jpg',
        },
        {
            name: `Bustling Gale`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fb81efe6cd00b98c.jpg',
        },
        {
            name: `Calm Mind`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/29b6de4b718e866c.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
	Thalassic Remedy`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3a4924a1b9c07b7c.jpg',
        },
        {
            name: `Strike the Earth`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/498d5702b75df265.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a791b51f50c9d701.jpg',
            'img/cd7446a551b5e658.jpg',
            'img/25b4ff87598a01f8.jpg',
            'img/bd8f86b596c98a72.jpg',
            'img/5c16a7d6a93426ed.jpg',
        ],
        weapon: [
            'img/c19d3dff4dafa05f.jpg',
            'img/8cda2bf42d01d267.jpg',
            'img/9ee83f266836dc74.jpg',
            'img/d93c3e96f2a8aeb3.jpg',
            'img/13e2c5062d8f91e6.jpg',
        ],
    },
    portrait: 'img/5661ccd79a934c38.jpg',
}
