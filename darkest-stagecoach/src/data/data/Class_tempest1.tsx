// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tempest1: ClassModData = {
    key: 'tempest1',
    name: `Tempest`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.4
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
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3303417614'
        }
    ],
    skills: [
        {
            name: `Phasor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/feabddc1eba11499.jpg',
        },
        {
            name: `High Voltage`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/efccf657191446bf.jpg',
        },
        {
            name: `Energize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/247952f7123bcae5.jpg',
        },
        {
            name: `Feedback Loop`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5bb269787035018c.jpg',
        },
        {
            name: `Shock Coma`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/67e68054848b39b3.jpg',
        },
        {
            name: `Overcharge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a92f2542bbfcd179.jpg',
        },
        {
            name: `Amplify`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/6cfc18959fb71795.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9fbb4ac6f1ca1ded.jpg',
            'img/7bdd6aab1db9d0e7.jpg',
            'img/d9e9d32f223ca29b.jpg',
            'img/26a995ba5755268d.jpg',
            'img/9a0b2183cdf4d2d2.jpg',
        ],
        weapon: [
            'img/c7cf22e26b440820.jpg',
            'img/a4f7f90e5bbac31d.jpg',
            'img/21d8d7077ef780ad.jpg',
            'img/744ad3a98607c87c.jpg',
            'img/7e18c081f8fb09d9.jpg',
        ],
    },
    portrait: 'img/f0ccfe7f54c50b0b.jpg',
}
