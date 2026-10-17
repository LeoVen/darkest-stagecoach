// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_boatswain1: ClassModData = {
    key: 'boatswain1',
    name: `Boatswain`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
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
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2481566601'
        }
    ],
    skills: [
        {
            name: `Mooring Blow`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/41f55513b0abc5a4.jpg',
        },
        {
            name: `Head Cracker`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/40989bbfa65308f5.jpg',
        },
        {
            name: `Heave Ho`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/dd1891b5c62311fb.jpg',
        },
        {
            name: `Ramming Manouver`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/032aebaa64c813c6.jpg',
        },
        {
            name: `Brace for Impact!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/cbc9a124d699ccd8.jpg',
        },
        {
            name: `Stand behind me!`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7f2164a7f1bc2849.jpg',
        },
        {
            name: `Fight by my side!`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: `@`,
            },
            image: 'img/40b1ac22e04620b8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c193761a2d28449b.jpg',
            'img/b9db44c45c5abaf0.jpg',
            'img/49ef9fd564ee4055.jpg',
            'img/fe9b731288b0a1fe.jpg',
            'img/938d42316c7837a6.jpg',
        ],
        weapon: [
            'img/c8b2baf3510788ba.jpg',
            'img/4639d1f38ca8b9fc.jpg',
            'img/ba70f6e421c38177.jpg',
            'img/31594dd3e8dbdb76.jpg',
            'img/5237d749ecf521d5.jpg',
        ],
    },
    portrait: 'img/739e0f04dce9d3c8.jpg',
}
