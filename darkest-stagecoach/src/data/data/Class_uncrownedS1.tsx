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
            image: 'img/4bc83dba7122a3f3.jpg',
        },
        {
            name: `Poisoned Knife`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4165949292d76c1c.jpg',
        },
        {
            name: `FINISHER
	Eviscerate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2acfdf3926fe1261.jpg',
        },
        {
            name: `FINISHER
	Fan of Knives`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ccfd03ce2a5147aa.jpg',
        },
        {
            name: `Ambush`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d84102b47bd388a3.jpg',
        },
        {
            name: `Garrote`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/19c1bd22e1f3c218.jpg',
        },
        {
            name: ` Cheap Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/92d51cc84ca22e6f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2e4797645d7f57e5.jpg',
            'img/816859ec9d053106.jpg',
            'img/a756060b22cda3e2.jpg',
            'img/3f770040f87daf6a.jpg',
            'img/0acc12bdbc64b779.jpg',
        ],
        weapon: [
            'img/0191140fadfc3175.jpg',
            'img/fba5cb68aa305c09.jpg',
            'img/e853e685b41f81a4.jpg',
            'img/cc5350146cb2f6c2.jpg',
            'img/aee7deb2f338ac3d.jpg',
        ],
    },
    portrait: 'img/51f258bf457bf028.jpg',
}
