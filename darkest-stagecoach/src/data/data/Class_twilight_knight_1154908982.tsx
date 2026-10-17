// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_twilight_knight_1154908982: ClassModData = {
    key: 'twilight_knight_1154908982',
    name: `Twilight Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0.6,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [11.0, 17.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [12.0, 18.0], crit: 0.08, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1154908982'
        }
    ],
    skills: [
        {
            name: `Soothing Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/678ffcf08d734e26.jpg',
        },
        {
            name: `Whirlwind Attack`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/1955b2c829b28c92.jpg',
        },
        {
            name: `Slay the Beast`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d6e83ca2a3b37cb0.jpg',
        },
        {
            name: `Strike to Stun`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b42b3ae5142cd41a.jpg',
        },
        {
            name: `Glimmer of Hope`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/9180aae0faa7a4c1.jpg',
        },
        {
            name: `Anticipation`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/232baa7941850560.jpg',
        },
        {
            name: `Leap of Faith`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1defccaead712fad.jpg',
        },
    ],
    equip: {
        armour: [
            'img/abea9a616fbb9854.jpg',
            'img/c63941d1918ec803.jpg',
            'img/d6596c95644665e1.jpg',
            'img/cb26cc07a115fe82.jpg',
            'img/6e86091ed65adb64.jpg',
        ],
        weapon: [
            'img/07f6fb359a0b009f.jpg',
            'img/6c13d0e28bf6d727.jpg',
            'img/0cac38e480b2e6ad.jpg',
            'img/98e5f1641795a334.jpg',
            'img/1cde594c35b3c5d4.jpg',
        ],
    },
    portrait: 'img/f779567a513e4c98.jpg',
}
