// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_keg_hunter1: ClassModData = {
    key: 'keg_hunter1',
    name: `Powder Keg`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.1,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2248772895'
        }
    ],
    skills: [
        {
            name: `Spear Thrust`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/39e5b9262bdabcf0.jpg',
        },
        {
            name: `Flak Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/fa912f93daf4f9d6.jpg',
        },
        {
            name: `Staggering Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d380bbcf98949546.jpg',
        },
        {
            name: `Nail Bomb`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/28a455a61f8063d4.jpg',
        },
        {
            name: `Visceral Attack`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/60ac9a9a88cbdd67.jpg',
        },
        {
            name: `Rallying Slash`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5e2b283ef38e5f54.jpg',
        },
        {
            name: `Blood Bullets`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7ac5385d2487b8b7.jpg',
        },
    ],
    equip: {
        armour: [
            'img/42b032cdd0048502.jpg',
            'img/700fdf8d10c8db95.jpg',
            'img/4e004916c944b1b8.jpg',
            'img/7f6e06809c2a661f.jpg',
            'img/e9bfa6b633e8a869.jpg',
        ],
        weapon: [
            'img/3d082818015611b2.jpg',
            'img/3448c04498e0e0c9.jpg',
            'img/56d6d38985038c75.jpg',
            'img/d0711edebe716da1.jpg',
            'img/fb1458cf8939f572.jpg',
        ],
    },
    portrait: 'img/c7a6278286e520da.jpg',
}
