// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_seer1: ClassModData = {
    key: 'seer1',
    name: `Seer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.6,
        move: 0.3,
        debuff: 0.7,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0, speed: 6 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=934967620'
        }
    ],
    skills: [
        {
            name: `Touch of Death`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/1c9f2b710d9d76c3.jpg',
        },
        {
            name: `Hypnosis`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/ebc238c74d8ec14d.jpg',
        },
        {
            name: `Celestial Renewal`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4f8ce3aeef26c141.jpg',
        },
        {
            name: `Tranquility`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/2cf7bff3804669b6.jpg',
        },
        {
            name: `Rejuvenating Surge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/e8ee09a59b16a2f9.jpg',
        },
        {
            name: `Spectral Blast`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/90d7a0d9a5380974.jpg',
        },
        {
            name: `Ethereal Blessing`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/015d1f72ea332bc0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/68592d20dedc6e7e.jpg',
            'img/2989e525491a8425.jpg',
            'img/0adc419f8c98703b.jpg',
            'img/1f2b6656428bf13c.jpg',
            'img/2f5a8a732dbee10b.jpg',
        ],
        weapon: [
            'img/57057e8fee8e5d08.jpg',
            'img/50173a9206fac36d.jpg',
            'img/e22e505c03644082.jpg',
            'img/13ac56c2afa44e69.jpg',
            'img/254bfaba01c20b7b.jpg',
        ],
    },
    portrait: 'img/8d3efc747c36cfe7.jpg',
}
