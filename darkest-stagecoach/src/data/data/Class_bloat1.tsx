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
            image: 'img/6bf1cd5488d7d4e1.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Encouraging Laughter`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/07461194f9cfee5f.jpg',
        },
        {
            name: `Eroding Aura`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/80d4a56f60452436.jpg',
        },
        {
            name: `Layered Mold`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/cd9ac66b2ce54742.jpg',
        },
        {
            name: `Buzz of Decay`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ff0ffa6656297c73.jpg',
        },
        {
            name: `Rot Veins`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/a1cce0760df791c4.jpg',
        },
        {
            name: `Targeted Decay`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/4ef0e8bcda7c3b13.jpg',
        },
    ],
    equip: {
        armour: [
            'img/14c427d48532ad5b.jpg',
            'img/cee683918eb9b130.jpg',
            'img/97fb547aa7dc0acf.jpg',
            'img/ee7e2e4b8e2a7ab2.jpg',
            'img/3fd52a0e8d736c86.jpg',
        ],
        weapon: [
            'img/4ab997fc96baa265.jpg',
            'img/ebf371f620bd4cd2.jpg',
            'img/f64710f674612155.jpg',
            'img/e9dfc6034d6a9f1b.jpg',
            'img/e7436d57d51d342d.jpg',
        ],
    },
    portrait: 'img/b924e01125ad40e2.jpg',
}
