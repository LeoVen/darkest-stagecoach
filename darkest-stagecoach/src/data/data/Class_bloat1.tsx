// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bloat1: ClassModData = {
    key: 'bloat1',
    name: `Bloat`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.5,
        bleed: 0.1,
        disease: 0.1,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
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
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.01, speed: 3 },
            { accuracy: 0, damage: [1.0, 3.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [2.0, 4.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [3.0, 4.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1990986165'
        }
    ],
    skills: [
        {
            name: `Diseased Sludge`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8632e8dc9be66028.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Encouraging Laughter`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/dcd9225f5fe76efd.jpg',
        },
        {
            name: `Eroding Aura`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c1299a425393e823.jpg',
        },
        {
            name: `Layered Mold`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/aef552f1d31f4c1c.jpg',
        },
        {
            name: `Buzz of Decay`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/2e26cd0e98280c5a.jpg',
        },
        {
            name: `Rot Veins`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/d46445120585f1d6.jpg',
        },
        {
            name: `Targeted Decay`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/574e906786b815f3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/14c427d48532ad5b.jpg',
            'img/9a16f0733e80a788.jpg',
            'img/cb4ece1cdb57674d.jpg',
            'img/f19d52a6083ce170.jpg',
            'img/a71796a45706d7e7.jpg',
        ],
        weapon: [
            'img/4ab997fc96baa265.jpg',
            'img/a2638db62ac0f90a.jpg',
            'img/3f2efbc562afba78.jpg',
            'img/8414e32b2b168586.jpg',
            'img/ea26b9c4d070f7ec.jpg',
        ],
    },
    portrait: 'img/c17ded602f5ce190.jpg',
}
