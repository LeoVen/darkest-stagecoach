// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tactician1: ClassModData = {
    key: 'tactician1',
    name: `Tactician`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1265562734'
        }
    ],
    skills: [
        {
            name: `Puncture Armor`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/27008399c76c7a49.jpg',
        },
        {
            name: `Command`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/874956436662b9e0.jpg',
        },
        {
            name: `Frantic Flurry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/0c1ce2b481d03f2b.jpg',
        },
        {
            name: `Outflank Them!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/745a798b6657a6a2.jpg',
        },
        {
            name: `Regroup!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d19b1d0390e2327e.jpg',
        },
        {
            name: `Advance!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a7cbf722711df30f.jpg',
        },
        {
            name: `Retreat!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4002794a9117f955.jpg',
        },
        {
            name: `Alter Stratagem`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9ed5fde975513c73.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b7ea37d0caf6938b.jpg',
            'img/50d8979cbc0d3468.jpg',
            'img/dd67e10b25669689.jpg',
            'img/00fa7a7a02dbcfa7.jpg',
            'img/15a46ed8c30f28ae.jpg',
        ],
        weapon: [
            'img/c99b5a87a18806e2.jpg',
            'img/e41ab3a4a35fa594.jpg',
            'img/e3d2b87eb0b131b6.jpg',
            'img/6d4ff17aed5def56.jpg',
            'img/26460e17ee69a92b.jpg',
        ],
    },
    portrait: 'img/8bd25c4369d52f81.jpg',
}
