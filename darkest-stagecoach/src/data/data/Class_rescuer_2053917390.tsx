// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_rescuer_2053917390: ClassModData = {
    key: 'rescuer_2053917390',
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
            image: 'img/a7e03b5e58545840.jpg',
        },
        {
            name: `Tonic Mix`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/bc93833315a0b955.jpg',
        },
        {
            name: `Nitrous Oxide`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/0316a31e03e6c0f4.jpg',
        },
        {
            name: `Motivational Hypnosis`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b9b7c72c775a2e41.jpg',
        },
        {
            name: `Stay Away!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7e0ddf586cfe0d8a.jpg',
        },
        {
            name: `Herding Tactics`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/7ff36feb9d27da2b.jpg',
        },
        {
            name: `Follow the Track!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d8ea19d97537f1d4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/40be88cc4ae4540f.jpg',
            'img/ba45674611e95867.jpg',
            'img/b3acf6b09958e888.jpg',
            'img/b2c9434ecc35c0ee.jpg',
            'img/92e606724f72a295.jpg',
        ],
        weapon: [
            'img/3102e16a5fb88dd1.jpg',
            'img/941f7a8a9cbe6b50.jpg',
            'img/5723a6cf6dd22628.jpg',
            'img/2bba8e6c806d4598.jpg',
            'img/0ac4e72d50e64a3e.jpg',
        ],
    },
    portrait: 'img/bc3f39669f2f2555.jpg',
}
