// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wraith_ms1: ClassModData = {
    key: 'wraith_ms1',
    name: `Wraith`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 1 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 2 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.1, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1697037179'
        }
    ],
    skills: [
        {
            name: `Reap`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d9689841820a9837.jpg',
        },
        {
            name: `Death Sentence`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fd370b92ea3038e0.jpg',
        },
        {
            name: `Incarcerate`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/8e37eeb4eaf840de.jpg',
        },
        {
            name: `Sap`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/491219161b56d89a.jpg',
        },
        {
            name: `Chain Gang`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/c324fad69ca5c027.jpg',
        },
        {
            name: `Guillotine`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/43aa1fe230500e40.jpg',
        },
        {
            name: `Hook and Slice`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ee9b0f475f73d18d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/08af270102657135.jpg',
            'img/40bd1ee977ede9c7.jpg',
            'img/0b308e60e7d077cf.jpg',
            'img/bc404870eb1b19ba.jpg',
            'img/040befb6ce0696a2.jpg',
        ],
        weapon: [
            'img/a78c7ed2a7c7415b.jpg',
            'img/282a2c1d682135b3.jpg',
            'img/1a1e7722e92a4ebe.jpg',
            'img/580f10bc85a35564.jpg',
            'img/ca8fc2885703a3af.jpg',
        ],
    },
    portrait: 'img/2c81423f0774f671.jpg',
}
