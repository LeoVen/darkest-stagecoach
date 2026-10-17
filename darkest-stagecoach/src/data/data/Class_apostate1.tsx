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
            image: 'img/4482a6fe310317dc.jpg',
        },
        {
            name: `Últimos Ritos`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/7af6133e661c387b.jpg',
        },
        {
            name: `Textos Apócrifos`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/128e32b64471c6d3.jpg',
        },
        {
            name: `Tempo Emprestado`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/664df8d8b0cef7d7.jpg',
        },
        {
            name: `Tenebrosidade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/4a79c377646a9a15.jpg',
        },
        {
            name: `Instigar`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a8f55c21d4a0aa72.jpg',
        },
        {
            name: `Desconsagrar`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/97b378ff5ff3a911.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6258ecbbc28cb583.jpg',
            'img/ee78ea0f5025e9b7.jpg',
            'img/ff4f22b8d7f4bd76.jpg',
            'img/69fedfe253a7b94e.jpg',
            'img/28c4a11ab5b947f1.jpg',
        ],
        weapon: [
            'img/1d9e5fbd2f9948ef.jpg',
            'img/ace41e641399120b.jpg',
            'img/58784464c218c39c.jpg',
            'img/88c61e4ccb6c3ff3.jpg',
            'img/23c732d641ac2dcd.jpg',
        ],
    },
    portrait: 'img/6231c76b30e638e4.jpg',
}
