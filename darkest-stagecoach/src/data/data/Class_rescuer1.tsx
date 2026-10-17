// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_rescuer1: ClassModData = {
    key: 'rescuer1',
    name: `Rescuer`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2053917390'
        }
    ],
    skills: [
        {
            name: `First Aid`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/cec279904db89cf4.jpg',
        },
        {
            name: `Tonic Mix`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/4a1e9053cd046d13.jpg',
        },
        {
            name: `Nitrous Oxide`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/6d59a7d034ae6c8a.jpg',
        },
        {
            name: `Motivational Hypnosis`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fc7f66d89ac7539d.jpg',
        },
        {
            name: `Stay Away!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1ae0b6b03f4adf02.jpg',
        },
        {
            name: `Herding Tactics`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/38aa4723daac6b07.jpg',
        },
        {
            name: `Follow the Track!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c008df8e819cc562.jpg',
        },
    ],
    equip: {
        armour: [
            'img/09ad4b7f92f4e38b.jpg',
            'img/90e526f844598634.jpg',
            'img/6cc72e0e83f824cb.jpg',
            'img/589251636270070d.jpg',
            'img/78a7c42c5624d879.jpg',
        ],
        weapon: [
            'img/0d95eff5d933cab2.jpg',
            'img/9456f62df34b37c1.jpg',
            'img/7cc82fd3ab3a4d91.jpg',
            'img/b64edeeb1ddb34a3.jpg',
            'img/a7e15100abdefecf.jpg',
        ],
    },
    portrait: 'img/22a95db4666de401.jpg',
}
