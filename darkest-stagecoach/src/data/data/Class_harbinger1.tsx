// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_harbinger1: ClassModData = {
    key: 'harbinger1',
    name: `Harbinger`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1138503289'
        }
    ],
    skills: [
        {
            name: `Rime Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2af9da3c4275084a.jpg',
        },
        {
            name: `Glacial Charge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/dd18d6cee38c8808.jpg',
        },
        {
            name: `Grimbane`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c07c76c552786aac.jpg',
        },
        {
            name: `Overpower`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ec18c37760097970.jpg',
        },
        {
            name: `Shatter`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d94aeecb6c51f517.jpg',
        },
        {
            name: `Tempest`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d7ad3b902c1c42a8.jpg',
        },
        {
            name: `Mercurial Winter`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/09dfcb3a1ba1f67a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4d7497810c445408.jpg',
            'img/c3792d85ebb85892.jpg',
            'img/72c5b58cb6eed7f8.jpg',
            'img/eccdabe605fc334d.jpg',
            'img/b6ca94097464c6e9.jpg',
        ],
        weapon: [
            'img/9b6fccd2c6b3ddc3.jpg',
            'img/f669166502917bfd.jpg',
            'img/ae11c31e5017f187.jpg',
            'img/613217d37f85f0f5.jpg',
            'img/00cf4203c99bdaad.jpg',
        ],
    },
    portrait: 'img/1e118bed262cb8c1.jpg',
}
