// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bogatyr_1976300413: ClassModData = {
    key: 'bogatyr_1976300413',
    name: `Bogatyr`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 56, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 63, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1976300413'
        }
    ],
    skills: [
        {
            name: `Sunder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/51ebfa0aa3e905e0.jpg',
        },
        {
            name: `Winterbreath`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/25bb8930bd4667b3.jpg',
        },
        {
            name: `Cold Snap`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ddfc80038a3b44f4.jpg',
        },
        {
            name: `Besiege`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/2a5fd85a6d5c578c.jpg',
        },
        {
            name: `Arctic Clutch`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/fb1b11af1a9f1e53.jpg',
        },
        {
            name: `Kievan Canto`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3bff9157b22287ee.jpg',
        },
        {
            name: `Samobranka`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/55f2cf2ce4613521.jpg',
        },
    ],
    equip: {
        armour: [
            'img/aca46aad9b11fc84.jpg',
            'img/db3b65db5ed8eb4d.jpg',
            'img/031dd19a5cf167b7.jpg',
            'img/0da1126da6ad6bf8.jpg',
            'img/50d2b94791499dfb.jpg',
        ],
        weapon: [
            'img/b62ec2ea6cf7a2ce.jpg',
            'img/67e9a93f176f90b5.jpg',
            'img/8d0ea343681332db.jpg',
            'img/801e86796b7a212b.jpg',
            'img/2b50952fe67efb6a.jpg',
        ],
    },
    portrait: 'img/b637746ed27091fb.jpg',
}
