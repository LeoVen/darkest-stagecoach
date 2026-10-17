// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bogatyr1: ClassModData = {
    key: 'bogatyr1',
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
            image: 'img/d87f5f7cad3c23be.jpg',
        },
        {
            name: `Winterbreath`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/077dc0d2117b02d0.jpg',
        },
        {
            name: `Cold Snap`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/5942ebb16d1c043c.jpg',
        },
        {
            name: `Besiege`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ae02541d3aa3fedb.jpg',
        },
        {
            name: `Arctic Clutch`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/51da1076a46d1332.jpg',
        },
        {
            name: `Kievan Canto`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b077c958d209d20f.jpg',
        },
        {
            name: `Samobranka`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/169876f80c50a27f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2a7965bac62f89a7.jpg',
            'img/7dd97b303ea30962.jpg',
            'img/6f3d4b82222b4600.jpg',
            'img/ff19b76ed8e758a7.jpg',
            'img/d0f5a54dba9ad5cf.jpg',
        ],
        weapon: [
            'img/011c9d13de3f3214.jpg',
            'img/9b0a0fe09f5a0b5f.jpg',
            'img/010aeffeadaa3e72.jpg',
            'img/97c7f246eb428304.jpg',
            'img/369ff44d512c0c89.jpg',
        ],
    },
    portrait: 'img/7a5383724d64708d.jpg',
}
