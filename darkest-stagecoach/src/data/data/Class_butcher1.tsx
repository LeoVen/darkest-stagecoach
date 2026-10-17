// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_butcher1: ClassModData = {
    key: 'butcher1',
    name: `Butcher`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.45,
        disease: 0.2,
        move: 0.45,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.06, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.11, prot: 0.05, hp: 25, speed: 0 },
            { dodge: 0.16, prot: 0.07, hp: 30, speed: 0 },
            { dodge: 0.21, prot: 0.1, hp: 35, speed: 0 },
            { dodge: 0.26, prot: 0.15, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.065, speed: 6 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.075, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1100230439'
        }
    ],
    skills: [
        {
            name: `Impaling Strike`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/16bdd89c7922c959.jpg',
        },
        {
            name: `Cripple`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/4eb84bdcb0d0c876.jpg',
        },
        {
            name: `Slice 'em Open`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a3084cb98acf9248.jpg',
        },
        {
            name: `Inspiring Command`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~@`,
            },
            image: 'img/d40f1f6ccc2aa7db.jpg',
        },
        {
            name: `In My Sights`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `Regroup`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f66cec7d876efe26.jpg',
        },
        {
            name: `Blade Toss`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/b8ffd7406ad3b356.jpg',
        },
    ],
    equip: {
        armour: [
            'img/139cc5f227240cab.jpg',
            'img/24d94d84a3bedc6c.jpg',
            'img/255b40aa03bb18ae.jpg',
            'img/efdf6c5411d8d47e.jpg',
            'img/5f88f67cf999e9a2.jpg',
        ],
        weapon: [
            'img/89895f4a9c88b0cc.jpg',
            'img/0b7fd979f058b4af.jpg',
            'img/21f8d806c622b406.jpg',
            'img/aebb5632b892fe77.jpg',
            'img/d052b8ae3ab12709.jpg',
        ],
    },
    portrait: 'img/80b13d1f519fe65a.jpg',
}
