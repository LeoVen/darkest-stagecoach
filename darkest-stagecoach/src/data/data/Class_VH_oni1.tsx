// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_VH_oni1: ClassModData = {
    key: 'VH_oni1',
    name: `Marauder`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.04, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 3 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 3 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.1, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3280389755'
        }
    ],
    skills: [
        {
            name: `Pillage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ad32320ece4a1d26.jpg',
        },
        {
            name: `Rampage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/461e4b8d59295431.jpg',
        },
        {
            name: `Concuss`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/480d7435c464ab3e.jpg',
        },
        {
            name: `Plunder`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/767a5dafe756e46b.jpg',
        },
        {
            name: `Enrage`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8041124421bf53c3.jpg',
        },
        {
            name: `Rain of Riches`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4abfd5be3fc73bdf.jpg',
        },
        {
            name: `Oni's Bane`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0b38de36567cb964.jpg',
        },
    ],
    equip: {
        armour: [
            'img/017105e24c06fdad.jpg',
            'img/2eb8653fff88b8ff.jpg',
            'img/3451d421835c4ecc.jpg',
            'img/49f334c18514f5e0.jpg',
            'img/6eda656254550672.jpg',
        ],
        weapon: [
            'img/0ddc7407f1fda063.jpg',
            'img/644ef3d4d7bbbb61.jpg',
            'img/725e5f09337ea798.jpg',
            'img/2652e77523cb93d8.jpg',
            'img/dbfe020c97311751.jpg',
        ],
    },
    portrait: 'img/9642ec0ca5a25e32.jpg',
}
