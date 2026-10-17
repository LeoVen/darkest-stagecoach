// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_spartan1: ClassModData = {
    key: 'spartan1',
    name: `Spartan`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.35,
        move: 0.35,
        debuff: 0.4,
        deathBlow: 0.55,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.09, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.1, prot: 0.1, hp: 30, speed: 0 },
            { dodge: 0.11, prot: 0.15, hp: 34, speed: 0 },
            { dodge: 0.12, prot: 0.2, hp: 38, speed: 0 },
            { dodge: 0.13, prot: 0.25, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1540264875'
        }
    ],
    skills: [
        {
            name: `Into the Fray!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/2f0a32d34b5adb82.jpg',
        },
        {
            name: `Work Together`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7db03005bb655ad3.jpg',
        },
        {
            name: `Shield Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/bbc1b98107fb1dfc.jpg',
        },
        {
            name: `Spear Lance`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/fcad918ed04ab8ba.jpg',
        },
        {
            name: `Backline Tactics`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/c7efac2de142d468.jpg',
        },
        {
            name: `Mysterious Viscous Liquid`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d7f56ad1779195fd.jpg',
        },
        {
            name: `Phalanx`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/216f983845485d41.jpg',
        },
    ],
    equip: {
        armour: [
            'img/663c6c47ec123d59.jpg',
            'img/ba56059c10891075.jpg',
            'img/1a2a730154835b4d.jpg',
            'img/f17a6e1eef32e774.jpg',
            'img/5551a9a785d99344.jpg',
        ],
        weapon: [
            'img/89affaf619dc2ee2.jpg',
            'img/1baa343a1861c1e1.jpg',
            'img/97daffd27df9fd75.jpg',
            'img/cf24866d87a0be30.jpg',
            'img/4fb03b513e4b045d.jpg',
        ],
    },
    portrait: 'img/7b865a391dfb400b.jpg',
}
