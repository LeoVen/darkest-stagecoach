// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_thorn1: ClassModData = {
    key: 'thorn1',
    name: `Espinho`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: -0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 6 },
            { accuracy: 0.05, damage: [8.0, 13.0], crit: 0.03, speed: 6 },
            { accuracy: 0.1, damage: [9.0, 14.0], crit: 0.04, speed: 7 },
            { accuracy: 0.15, damage: [10.0, 16.0], crit: 0.05, speed: 7 },
            { accuracy: 0.2, damage: [11.0, 17.0], crit: 0.06, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1785514611'
        }
    ],
    skills: [
        {
            name: `Estocada`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cb2c10186945bbaa.jpg',
        },
        {
            name: `Distinguir`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/21eddf3b0fc16891.jpg',
        },
        {
            name: `Murchar`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5c7339425480290a.jpg',
        },
        {
            name: `Perfurar`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ae01dead5ad1df89.jpg',
        },
        {
            name: `Desafiar`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5ed3ea9dbbb196c1.jpg',
        },
        {
            name: `Florescer`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/9912be143283b648.jpg',
        },
        {
            name: `Ouvir com atenção`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fdf09d4ab7d0380f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a6e732ad25b060b1.jpg',
            'img/0e8e2647ede27f05.jpg',
            'img/14c50e9bc3cb1e27.jpg',
            'img/7892607500073ef4.jpg',
            'img/99f20ecc7306dc71.jpg',
        ],
        weapon: [
            'img/0c342adf9da88f0f.jpg',
            'img/38aa75f5939e8ed9.jpg',
            'img/40d3be2615d9d46d.jpg',
            'img/2aa023e77e5d5581.jpg',
            'img/bc6951905a409150.jpg',
        ],
    },
    portrait: 'img/7afa6cd7deafc12e.jpg',
}
