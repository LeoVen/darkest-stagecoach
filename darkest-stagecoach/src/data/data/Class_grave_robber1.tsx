// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_grave_robber1: ClassModData = {
    key: 'grave_robber1',
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
            image: 'img/4b40acf8a24bab50.jpg',
        },
        {
            name: `Lunge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f016f43275c6f87d.jpg',
        },
        {
            name: `Flashing Daggers`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/23bd23111d8be512.jpg',
        },
        {
            name: `Shadow Fade`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ccf8eab126ffbe3b.jpg',
        },
        {
            name: `Thrown Dagger`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/3080740a4a794afa.jpg',
        },
        {
            name: `Poison Darts`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b9e2affdb41665da.jpg',
        },
        {
            name: `Toxin Trickery`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1f7b7a95118eb882.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4bb60a9e3998a1e3.jpg',
            'img/6817109cdfa432ff.jpg',
            'img/b7f7f9954580769f.jpg',
            'img/279c5c143969abd8.jpg',
            'img/925070e15f9c44c3.jpg',
        ],
        weapon: [
            'img/70ac9cce5ecbede8.jpg',
            'img/08a64af45dd26f72.jpg',
            'img/91bb2f79875fe818.jpg',
            'img/37d83e2189210f1c.jpg',
            'img/0581dd392b6b6817.jpg',
        ],
    },
    portrait: 'img/d79676f41946115e.jpg',
}
