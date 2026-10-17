// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nin_robber1: ClassModData = {
    key: 'nin_robber1',
    name: `Assault Kunoichi`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.5,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.6
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
            { accuracy: 0, damage: [3.0, 8.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.08, speed: 9 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.09, speed: 9 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.1, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2487626836'
        }
    ],
    skills: [
        {
            name: `ULT|Coring stike`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/19d4169328370db4.jpg',
        },
        {
            name: `ULT|Feign attack`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/aa8a60d3182f4c08.jpg',
        },
        {
            name: `Rainstorm srtike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9adcbff404ab55ae.jpg',
        },
        {
            name: `Knife throwing`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/7107d2be9fb97707.jpg',
        },
        {
            name: `Fan of Knives`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/914a65f51a724944.jpg',
        },
        {
            name: `flash back`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/0501d8b6ed7c5205.jpg',
        },
        {
            name: `Despicable attacks`,
            launch: [false,true,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/e9082882a4584c50.jpg',
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
    portrait: 'img/c6a77bbe5ab98d45.jpg',
}
