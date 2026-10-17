// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_grave_robber: ClassModData = {
    key: 'grave_robber',
    name: `Grave Robber`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Pick to the Face`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/11975785254f77a0.jpg',
        },
        {
            name: `Lunge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/239f3f49c6f76b87.jpg',
        },
        {
            name: `Flashing Daggers`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/3b7f1d2794c48f0e.jpg',
        },
        {
            name: `Shadow Fade`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e873524f1809c1f9.jpg',
        },
        {
            name: `Thrown Dagger`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8d11526269a7c7ee.jpg',
        },
        {
            name: `Poison Darts`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a3c8d9f84cf0eaac.jpg',
        },
        {
            name: `Toxin Trickery`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/953a0deb184bf471.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ed4890a91d765317.jpg',
            'img/fd63384519a112ba.jpg',
            'img/ed611bb5b29da78e.jpg',
            'img/5054309b4f707fb2.jpg',
            'img/87a1bc50e9d53c07.jpg',
        ],
        weapon: [
            'img/9b5b149a033289e9.jpg',
            'img/16d337ea2c5200d7.jpg',
            'img/c29a48c67fbe52a5.jpg',
            'img/377f797912442c8f.jpg',
            'img/d90aace56fdc0339.jpg',
        ],
    },
    portrait: 'img/8c88e2a5e44880b5.jpg',
}
