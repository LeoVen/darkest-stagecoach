// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_apostate1: ClassModData = {
    key: 'apostate1',
    name: `Apóstata`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.6,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.01, speed: 6 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1917819568'
        }
    ],
    skills: [
        {
            name: `Condenar`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e0a7e034f98064ee.jpg',
        },
        {
            name: `Últimos Ritos`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/fc73136165561ce0.jpg',
        },
        {
            name: `Textos Apócrifos`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/0601223cdb175761.jpg',
        },
        {
            name: `Tempo Emprestado`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/526ae33166f91705.jpg',
        },
        {
            name: `Tenebrosidade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8f091adfb9e44599.jpg',
        },
        {
            name: `Instigar`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5fcde623c0ee2b9d.jpg',
        },
        {
            name: `Desconsagrar`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/81c880bc3abbdceb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0bbe6be9f39816fb.jpg',
            'img/c33d13cc0ed432f3.jpg',
            'img/a663286af929d3e9.jpg',
            'img/bf22bf467c33980b.jpg',
            'img/adaaf22a2fe3bb37.jpg',
        ],
        weapon: [
            'img/f2c4bd9f901f1457.jpg',
            'img/97da683c1a59dd2e.jpg',
            'img/c0c14711d6dde392.jpg',
            'img/f1b79b9ca8e5faa8.jpg',
            'img/50f67d8d3e62f7b3.jpg',
        ],
    },
    portrait: 'img/b7fff9aa7c5c128c.jpg',
}
