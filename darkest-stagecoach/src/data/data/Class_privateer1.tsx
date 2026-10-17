// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_privateer1: ClassModData = {
    key: 'privateer1',
    name: `Privateer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.35,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.25
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1965654832'
        }
    ],
    skills: [
        {
            name: `Black Powder Pistol`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a27aee2ddad68947.jpg',
        },
        {
            name: `Belay!`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/9b15423ccdf65b96.jpg',
        },
        {
            name: `Avast!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/da8dc30ac54009b0.jpg',
        },
        {
            name: `Dissonant Chord`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/4da4570ce698edee.jpg',
        },
        {
            name: `Drunken Shanty`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/0af18a66aefe166c.jpg',
        },
        {
            name: `Ration of Grog`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/82d5431176fb5d8e.jpg',
        },
        {
            name: `...And a Bottle of Rum`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ca34625a564cbca9.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b7ea37d0caf6938b.jpg',
            'img/92fba166d1c124ba.jpg',
            'img/bff1679f94bbdc0f.jpg',
            'img/95bfc643364ab425.jpg',
            'img/db2e3618169f8109.jpg',
        ],
        weapon: [
            'img/57f9dac09eef8d2e.jpg',
            'img/c080d7c3bd795054.jpg',
            'img/3bb9c4926581d39c.jpg',
            'img/959cc6ad185c3b05.jpg',
            'img/d5c8a5c03603c670.jpg',
        ],
    },
    portrait: 'img/d11ed85ac5580dbf.jpg',
}
