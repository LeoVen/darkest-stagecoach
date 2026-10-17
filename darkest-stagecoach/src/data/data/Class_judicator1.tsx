// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_judicator1: ClassModData = {
    key: 'judicator1',
    name: `Judicator`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.2,
        move: 0.3,
        debuff: 0.6,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.07, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2640294598'
        }
    ],
    skills: [
        {
            name: `Dual Convocation`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4f813f9a954ef644.jpg',
        },
        {
            name: `Indictment Brand`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e1bf6b0c7c5d2885.jpg',
        },
        {
            name: `Ambernail`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cd9b82143016c73d.jpg',
        },
        {
            name: `Crucify`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/676c50a015ac9e88.jpg',
        },
        {
            name: `Fury of the Ancients`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5d89f2298debbb74.jpg',
        },
        {
            name: `Calcified Condemnation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/91ae42d1c4659dd4.jpg',
        },
        {
            name: `Glassworks`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/978f984a1ad01907.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1f2dc1270e52075b.jpg',
            'img/6b832fb92178fb41.jpg',
            'img/c9bbc8f27e012f3d.jpg',
            'img/1fc3ddc4332db1ce.jpg',
            'img/173c68991a3c2aec.jpg',
        ],
        weapon: [
            'img/e9d46572d86d1b86.jpg',
            'img/25ded37f2a4eafde.jpg',
            'img/885905a8fe3682ff.jpg',
            'img/947c5df6ebaecbe0.jpg',
            'img/66d205180c4b6550.jpg',
        ],
    },
    portrait: 'img/3ba5e17be195832d.jpg',
}
