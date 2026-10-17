// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bowman1: ClassModData = {
    key: 'bowman1',
    name: `Bowman`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.2,
        move: 0.4,
        debuff: 0.4,
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
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.09, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.1, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2549725341'
        }
    ],
    skills: [
        {
            name: `Change Arsenal`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/698e9da7b983137a.jpg',
        },
        {
            name: `Sureshot`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/bbb7149e82eb5671.jpg',
        },
        {
            name: `Piercing Arrow`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/f0dbfa2ad414e479.jpg',
        },
        {
            name: `Vital Snipe`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/df303e6334bc39e2.jpg',
        },
        {
            name: `Limb Snipe`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/588c0f954137a8a3.jpg',
        },
        {
            name: `Powder Arrow`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/35b3b3c6e6db3232.jpg',
        },
        {
            name: `The Kill`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/42241f5b51986011.jpg',
        },
    ],
    equip: {
        armour: [
            'img/58606c82f13607d9.jpg',
            'img/469afb2c1f793ce8.jpg',
            'img/7fd55083557721ee.jpg',
            'img/963e853b6b4d0afc.jpg',
            'img/ba881cc51ca9e3e7.jpg',
        ],
        weapon: [
            'img/9f75b627a5591552.jpg',
            'img/8bc6cdc266b008ba.jpg',
            'img/8c40ac5186926743.jpg',
            'img/8f67fd0ffb1ad506.jpg',
            'img/8499b0c8dc4e4132.jpg',
        ],
    },
    portrait: 'img/44cb9ceb50f10f01.jpg',
}
