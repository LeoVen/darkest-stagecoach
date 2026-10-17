// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_scourge1: ClassModData = {
    key: 'scourge1',
    name: `Scourge`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.6,
        blight: 0,
        bleed: 0.2,
        disease: 0.6,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.03, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.025, speed: 6 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.035, speed: 7 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.04, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=947715735'
        }
    ],
    skills: [
        {
            name: `Infectious Offering`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/62ee6a69028a92eb.jpg',
        },
        {
            name: `Noxious Raze`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/3b744730c0f0d7ca.jpg',
        },
        {
            name: `Excoriate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/f776edb39b4ce311.jpg',
        },
        {
            name: `Abyssal Havoc`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e6fb4ee948605e15.jpg',
        },
        {
            name: `Unfathomable Torment`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/bf4bf17c5db3532e.jpg',
        },
        {
            name: `Deathlock`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/9bc35da53ec4b8df.jpg',
        },
        {
            name: `Purge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c593569855651205.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ef95aa2d49c8eeab.jpg',
            'img/897f3d0bc31300e3.jpg',
            'img/645881fecca6720d.jpg',
            'img/f10676b6842ef5a6.jpg',
            'img/b302ebf6e33bc7b2.jpg',
        ],
        weapon: [
            'img/146481fcacbadec2.jpg',
            'img/473172311eebf9f1.jpg',
            'img/e49ee7651097a194.jpg',
            'img/2f45f1e15d168a0d.jpg',
            'img/8110a43652a2a952.jpg',
        ],
    },
    portrait: 'img/f76646841a66c39e.jpg',
}
