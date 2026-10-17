// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_mikoF1: ClassModData = {
    key: 'mikoF1',
    name: `Kitsune Miko`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.95,
        move: 0.2,
        debuff: 0.7,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.14, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0.05, damage: [5.0, 7.0], crit: 0.05, speed: 9 },
            { accuracy: 0.1, damage: [5.0, 7.0], crit: 0.1, speed: 9 },
            { accuracy: 0.15, damage: [5.0, 7.0], crit: 0.15, speed: 9 },
            { accuracy: 0.2, damage: [5.0, 7.0], crit: 0.2, speed: 9 },
            { accuracy: 0.25, damage: [5.0, 7.0], crit: 0.25, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2585273417'
        }
    ],
    skills: [
        {
            name: `Gohei Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e4c29d15a4ef2a0b.jpg',
        },
        {
            name: `Charm Blast`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/8b894028570d9b11.jpg',
        },
        {
            name: `Charm Spell: Luck`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ca7e2ee4d0d9fbad.jpg',
        },
        {
            name: `Healing Chime`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3d2d0cef2fd36028.jpg',
        },
        {
            name: `Charm Spell: Reveal`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1381f8ffa8deae80.jpg',
        },
        {
            name: `Special: Hallow Ground`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/be20b56a044dece0.jpg',
        },
        {
            name: `Special: Damnation`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/42059d7be645135a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2d43b6c28ea344fe.jpg',
            'img/843be226cf84f4d7.jpg',
            'img/59a41f69982865a2.jpg',
            'img/059d080ec0d05dec.jpg',
            'img/62947d9f35a673d1.jpg',
        ],
        weapon: [
            'img/9e94b674b32143fd.jpg',
            'img/1b28cd00e48cd9f5.jpg',
            'img/52f64f819f5c86f4.jpg',
            'img/9c2a5431b8d79e6f.jpg',
            'img/57491922dd7e65cd.jpg',
        ],
    },
    portrait: 'img/f2aad46fe309f8a2.jpg',
}
