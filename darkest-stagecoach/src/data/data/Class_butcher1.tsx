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
            image: 'img/dd890d88e044943e.jpg',
        },
        {
            name: `Cripple`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/eeb980877d701670.jpg',
        },
        {
            name: `Slice 'em Open`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5bf101fba1917d0e.jpg',
        },
        {
            name: `Inspiring Command`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~@`,
            },
            image: 'img/4a44c600f71b0545.jpg',
        },
        {
            name: `In My Sights`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `Regroup`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/25fbdee977dbc499.jpg',
        },
        {
            name: `Blade Toss`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/1f79f062057c6b12.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ad0d5cf34567fecd.jpg',
            'img/58e89a7c7f68a7d3.jpg',
            'img/f7e005acd37ee607.jpg',
            'img/440debf50e3cb76b.jpg',
            'img/5bb3266981fb7e24.jpg',
        ],
        weapon: [
            'img/df0c756add29aaa3.jpg',
            'img/c81d8db65d8061ef.jpg',
            'img/c3b84df20bed0296.jpg',
            'img/deccdd7a1c45671c.jpg',
            'img/d7c6f475f6743517.jpg',
        ],
    },
    portrait: 'img/bfb841e2c8721c13.jpg',
}
