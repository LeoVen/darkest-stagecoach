// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_barbarian1: ClassModData = {
    key: 'barbarian1',
    name: `Barbarian`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [9.0, 13.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 15.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [11.0, 16.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1600449003'
        }
    ],
    skills: [
        {
            name: `Indomitable Kick`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/9135b29602d79ad9.jpg',
        },
        {
            name: `Steady Slice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1b0fcad77a022abf.jpg',
        },
        {
            name: `Reckless Rage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/7d5cb3c4a96ed159.jpg',
        },
        {
            name: `Wild Swing`,
            launch: [false,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/137f22922febac10.jpg',
        },
        {
            name: `Brutal Focus`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a46b6007e5d9570f.jpg',
        },
        {
            name: `Primal Champion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/53b70395be1e9c49.jpg',
        },
        {
            name: `Swig of Ale`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9460f5711e42cf82.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e7e951f54d8d82df.jpg',
            'img/87bdcebcad060b6a.jpg',
            'img/8d5524d6ffefbaad.jpg',
            'img/8eb3ecdf27146bc8.jpg',
            'img/f6002c707c89c436.jpg',
        ],
        weapon: [
            'img/9edb745de412e5c9.jpg',
            'img/5932df01156f0841.jpg',
            'img/2cdda67b3a473948.jpg',
            'img/af8ad646a2d15bd6.jpg',
            'img/42427eb43a360ab9.jpg',
        ],
    },
    portrait: 'img/b513286bf26f8da9.jpg',
}
