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
            image: 'img/6a3b3d61cedb5e2f.jpg',
        },
        {
            name: `Command`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7afc5a14f551ce04.jpg',
        },
        {
            name: `Frantic Flurry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/08cb80c70416c650.jpg',
        },
        {
            name: `Outflank Them!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d590f9a2b2c0a440.jpg',
        },
        {
            name: `Regroup!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/89707cf1636a71b3.jpg',
        },
        {
            name: `Advance!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/18fc8e7506ddb9e7.jpg',
        },
        {
            name: `Retreat!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bb38513ee9737bdb.jpg',
        },
        {
            name: `Alter Stratagem`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1fca40fe91357c7d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/27b1c5f921f3ba94.jpg',
            'img/200004cb9a0d844a.jpg',
            'img/39de06ff9763ddee.jpg',
            'img/ba538c568a246b14.jpg',
            'img/03e1f8ab2b882183.jpg',
        ],
        weapon: [
            'img/e271ebb0c95b1dc8.jpg',
            'img/df6256c47ee62617.jpg',
            'img/7f8411ab1e9f76eb.jpg',
            'img/c7198320331d6941.jpg',
            'img/524401550d1eaf43.jpg',
        ],
    },
    portrait: 'img/210de3c55a0d3c03.jpg',
}
