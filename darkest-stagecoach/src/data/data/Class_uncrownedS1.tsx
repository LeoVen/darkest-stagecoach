// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_uncrownedS1: ClassModData = {
    key: 'uncrownedS1',
    name: `Uncrowned`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.07, speed: 9 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3233465820'
        }
    ],
    skills: [
        {
            name: `Hemorrhage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4cc1ad0c79821a31.jpg',
        },
        {
            name: `Poisoned Knife`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/10625781886717e5.jpg',
        },
        {
            name: `FINISHER
	Eviscerate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f7c83a93e1f71a42.jpg',
        },
        {
            name: `FINISHER
	Fan of Knives`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e8d874ddad50d4c5.jpg',
        },
        {
            name: `Ambush`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/59430b9f00b169ff.jpg',
        },
        {
            name: `Garrote`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4ec9cf33b8b80e6f.jpg',
        },
        {
            name: ` Cheap Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a49c7ff43aa6c638.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1a6a33a0bbaf2733.jpg',
            'img/de64cb2017e5f782.jpg',
            'img/65f258f1d5821116.jpg',
            'img/a25e1272210f096f.jpg',
            'img/58cb220ee27d26f0.jpg',
        ],
        weapon: [
            'img/f32813db343f222f.jpg',
            'img/b9084d086c8a61db.jpg',
            'img/9a95b6c111c7dbc6.jpg',
            'img/ffe66900c9ca58b5.jpg',
            'img/8dae0df1ca941285.jpg',
        ],
    },
    portrait: 'img/b956d822c4888153.jpg',
}
