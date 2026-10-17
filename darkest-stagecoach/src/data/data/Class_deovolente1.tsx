// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_deovolente1: ClassModData = {
    key: 'deovolente1',
    name: `Lilith`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.6,
        blight: 0.2,
        bleed: 0.2,
        disease: 1,
        move: 0.5,
        debuff: 0.8,
        deathBlow: 0.5,
        trap: 1
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.4, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 7.0], crit: 0.06, speed: 12 },
            { accuracy: 0, damage: [2.0, 8.0], crit: 0.07, speed: 13 },
            { accuracy: 0, damage: [3.0, 9.0], crit: 0.08, speed: 14 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.09, speed: 15 },
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.1, speed: 16 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2200558948'
        }
    ],
    skills: [
        {
            name: `Etherealness`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/13a41f24f7d4e69e.jpg',
        },
        {
            name: `Back to physical form`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ad6ecf64fd41e7db.jpg',
        },
        {
            name: `Dusk`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d9fb25f4b138b4a9.jpg',
        },
        {
            name: `Nightfall`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/459b65f6f2025d76.jpg',
        },
        {
            name: `Pity of fiend`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c6d4dd5bf26182ee.jpg',
        },
        {
            name: `Dawn`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/937daf03607fb469.jpg',
        },
        {
            name: `Starfall`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/a9bb0e1034f296de.jpg',
        },
        {
            name: `Wine of arrogance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a80fc1c4a6ffddf0.jpg',
        },
        {
            name: `Ephemeral echo`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/06143c5e247f1d99.jpg',
        },
    ],
    equip: {
        armour: [
            'img/45bc14f64739fd75.jpg',
            'img/8c7b35b9474111c7.jpg',
            'img/23ff1936b6e8c51d.jpg',
            'img/9d12c30ac19d71cd.jpg',
            'img/50c874641042565f.jpg',
        ],
        weapon: [
            'img/807e63c54b57affd.jpg',
            'img/7d6c16449182a52b.jpg',
            'img/f3e80d6088e9be90.jpg',
            'img/00ed71673107a7a7.jpg',
            'img/a1dae4301f866fd9.jpg',
        ],
    },
    portrait: 'img/4a5720892bba151d.jpg',
}
