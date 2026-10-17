// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_siexiled1: ClassModData = {
    key: 'siexiled1',
    name: `Exile`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.2,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [10.0, 14.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2101866853'
        }
    ],
    skills: [
        {
            name: `Split`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9823cb768df26ebe.jpg',
        },
        {
            name: `Sunder`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/e82449278affbed5.jpg',
        },
        {
            name: `Flank`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/aae94510120750c3.jpg',
        },
        {
            name: `Provoke`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9c487aed07119c6e.jpg',
        },
        {
            name: `Assignment: Charge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bb6e977a9424f486.jpg',
        },
        {
            name: `Assignment: Track`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6ad699a6f3b6549a.jpg',
        },
        {
            name: `Assignment: Rally`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/426ab5d20069f898.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e0999e37e59881f0.jpg',
            'img/305b7b4a4e3b4788.jpg',
            'img/187c99470e27719a.jpg',
            'img/f084bfc739c733c8.jpg',
            'img/a84aa5b8dcf328b7.jpg',
        ],
        weapon: [
            'img/1616698a638e2331.jpg',
            'img/ae0ba064f6ed0644.jpg',
            'img/b3fd904d0c5ac8ad.jpg',
            'img/72eb1d310a6bdba9.jpg',
            'img/34a61101c8a53251.jpg',
        ],
    },
    portrait: 'img/e622132a756ba3c3.jpg',
}
