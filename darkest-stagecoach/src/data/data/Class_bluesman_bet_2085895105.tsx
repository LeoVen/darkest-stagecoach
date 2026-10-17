// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bluesman_bet_2085895105: ClassModData = {
    key: 'bluesman_bet_2085895105',
    name: `Bluesman`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 4.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [2.0, 5.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2085895105'
        }
    ],
    skills: [
        {
            name: `Close Shave`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1f9950d0c05e31fd.jpg',
        },
        {
            name: `Singin’ the Blues`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/90afa48fa60b79ce.jpg',
        },
        {
            name: `The Crossroads`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/40041840da68ddc6.jpg',
        },
        {
            name: `Move Yo’ Feet`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/05529a33fa42afb3.jpg',
        },
        {
            name: `From the Otherside`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/1b78e1a2ca4e22ce.jpg',
        },
        {
            name: `I See Said...`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/88dc086b8e90130e.jpg',
        },
        {
            name: `StaggerLee Slash`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e07efaa469c33cc1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0e706cc720a40c84.jpg',
            'img/40d474c58e1fd3ba.jpg',
            'img/597d59701f0c7192.jpg',
            'img/8a92a6a69599f2c1.jpg',
            'img/535da0e934adaece.jpg',
        ],
        weapon: [
            'img/8d40183f9c170f9f.jpg',
            'img/bbb20b607ee106e7.jpg',
            'img/416243a9ee5e6754.jpg',
            'img/866b0e829d3965a7.jpg',
            'img/4cdfe0c6f8b672da.jpg',
        ],
    },
    portrait: 'img/1f10c3b389323eb2.jpg',
}
