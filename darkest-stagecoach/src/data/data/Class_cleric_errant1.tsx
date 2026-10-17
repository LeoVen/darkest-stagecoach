// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cleric_errant1: ClassModData = {
    key: 'cleric_errant1',
    name: `Cleric Errant`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 1 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.08, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2518583774'
        }
    ],
    skills: [
        {
            name: `Hammer of Faith`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b9eba715a3f68dba.jpg',
        },
        {
            name: `Shield Bash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a21e0236a24c83c9.jpg',
        },
        {
            name: `Blinding Glare`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/670e619456a8b33f.jpg',
        },
        {
            name: `Orison`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/51888930c3106e22.jpg',
        },
        {
            name: `Intercession`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/561f6682fc2faa64.jpg',
        },
        {
            name: `Knight's Vow`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/687834fc4b9ece94.jpg',
        },
        {
            name: `Sanctification`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/042aa6cead893e35.jpg',
        },
    ],
    equip: {
        armour: [
            'img/24628ebcbcd47afb.jpg',
            'img/6a4edd43739e88ee.jpg',
            'img/8eb94c7dd3d737da.jpg',
            'img/76ec8cc4b514bf99.jpg',
            'img/b007b1bedebdd97e.jpg',
        ],
        weapon: [
            'img/2184afe39a3267e3.jpg',
            'img/9b6a8b4431c7c914.jpg',
            'img/8c4b55e03c1e3dc3.jpg',
            'img/9db28eac0ffc869a.jpg',
            'img/901d3ee2d8e131dd.jpg',
        ],
    },
    portrait: 'img/7ce1796f28b0656d.jpg',
}
