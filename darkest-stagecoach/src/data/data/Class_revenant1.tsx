// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_revenant1: ClassModData = {
    key: 'revenant1',
    name: `Revenant`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.025, speed: 3 },
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.035, speed: 4 },
            { accuracy: 0, damage: [9.0, 12.0], crit: 0.04, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=913178378'
        }
    ],
    skills: [
        {
            name: `Obliterate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ac025bfc2f50b19c.jpg',
        },
        {
            name: `Sanguine Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/bb470227ad0bc337.jpg',
        },
        {
            name: `Bloodfury`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e2f812f82bb3c7e3.jpg',
        },
        {
            name: `Crimson Unity`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fc4c1471b76319bc.jpg',
        },
        {
            name: `Siphon Life`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a23d9346ef8eadd5.jpg',
        },
        {
            name: `Vampiric Embrace`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7dbcf074445568bc.jpg',
        },
        {
            name: `Necromancy`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/35ba187e08babf32.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c0d24e8b38e1051a.jpg',
            'img/55b4526ad956afa8.jpg',
            'img/125a8c14a354b196.jpg',
            'img/01dd686d7f933eb8.jpg',
            'img/0734602e29ac769e.jpg',
        ],
        weapon: [
            'img/0a3fcd750cfc6eab.jpg',
            'img/96f793fd3bdfa58d.jpg',
            'img/14f439cc89cca9a4.jpg',
            'img/b4c41ef15267948e.jpg',
            'img/87022f6922902037.jpg',
        ],
    },
    portrait: 'img/4d61c25da50123ae.jpg',
}
