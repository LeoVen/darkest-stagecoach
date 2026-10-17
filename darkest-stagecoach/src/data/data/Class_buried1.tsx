// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_buried1: ClassModData = {
    key: 'buried1',
    name: `Buried`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.35,
        blight: 0.5,
        bleed: 0.2,
        disease: 0.35,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.72,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2403716352'
        }
    ],
    skills: [
        {
            name: `Paranoid Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/6d01ea865aed78a4.jpg',
        },
        {
            name: `Bitter Blade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/360a654b5b175f72.jpg',
        },
        {
            name: `The Old Way`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/79b5b3bdb5c14e53.jpg',
        },
        {
            name: `Hide From Them`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4181e44ed32496dc.jpg',
        },
        {
            name: `Feral Lunge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/3010af21c33fac9f.jpg',
        },
        {
            name: `Reeling Rake`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/62c15b774abb2b30.jpg',
        },
        {
            name: `Otherworldly Wail`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/6a6f99282a30186a.jpg',
        },
        {
            name: `Clarity`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7f16e3d1f9f7e193.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8b6cbebb09dc944e.jpg',
            'img/3ee065c999fcd1b3.jpg',
            'img/d4191b9800b8be47.jpg',
            'img/127de251ec577dd5.jpg',
            'img/13f9932c9e1f83b4.jpg',
        ],
        weapon: [
            'img/5e006ef93ae57235.jpg',
            'img/6b07d8a63e3ebca0.jpg',
            'img/fb90c438bb691719.jpg',
            'img/060a2db4045ebeb3.jpg',
            'img/3e5a45260dfd8534.jpg',
        ],
    },
    portrait: 'img/4bdd3e33e0a843a4.jpg',
}
