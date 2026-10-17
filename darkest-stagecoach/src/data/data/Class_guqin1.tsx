// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_guqin1: ClassModData = {
    key: 'guqin1',
    name: `Guqin`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.02, speed: -2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.03, speed: -2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: -1 },
            { accuracy: 0, damage: [7.0, 16.0], crit: 0.05, speed: -1 },
            { accuracy: 0, damage: [8.0, 18.0], crit: 0.06, speed: 0 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1446914431'
        }
    ],
    skills: [
        {
            name: `Longbow`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/3134a470ba245bb5.jpg',
        },
        {
            name: `Blitz`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8036bb8dec9b6aa9.jpg',
        },
        {
            name: `Countersong`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a48072b049870fa3.jpg',
        },
        {
            name: `Lullaby`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/354bd24675304166.jpg',
        },
        {
            name: `Harpoon`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e0a8197a6a737190.jpg',
        },
        {
            name: `Leechbolt`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8697ad15e2c698f2.jpg',
        },
        {
            name: `Dissonance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/fd2b222afe0eecb1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/03b677e206caec6e.jpg',
            'img/72c03e4edcc38f28.jpg',
            'img/1710cf6fa952955b.jpg',
            'img/c03a6bfe2ab698b8.jpg',
            'img/14fb10d001c323d1.jpg',
        ],
        weapon: [
            'img/b02bced4d19e3416.jpg',
            'img/83e053f474cbf72f.jpg',
            'img/46d0b988fd7d45c2.jpg',
            'img/49cdfef38be7a1b5.jpg',
            'img/e6d0b485ad964538.jpg',
        ],
    },
    portrait: 'img/5ca57e60d9595c92.jpg',
}
