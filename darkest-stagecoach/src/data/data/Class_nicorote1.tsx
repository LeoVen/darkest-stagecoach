// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nicorote1: ClassModData = {
    key: 'nicorote1',
    name: `Nicorote`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 1.5,
        bleed: 1.5,
        disease: 1,
        move: 0.1,
        debuff: 0.1,
        deathBlow: 0.7,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 2.0], crit: 0, speed: 3 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.2, speed: 4 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.4, speed: 5 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.4, speed: 5 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.7, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2271536747'
        }
    ],
    skills: [
        {
            name: `Alarm light`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3d82a0f0b2665bfc.jpg',
        },
        {
            name: `Animal teeth blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a5d589c0cee48d88.jpg',
        },
        {
            name: `Viper venom`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ce8dd5aabeeb7dd0.jpg',
        },
        {
            name: `Tentacles plaque`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/bb428ed052e16275.jpg',
        },
        {
            name: `Acid etching poison`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/45630b17e273f701.jpg',
        },
        {
            name: `Tequila`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/81b735a7132f96bd.jpg',
        },
        {
            name: `BOOM!THEM!ALL!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c181f5a949ba70d0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c6ab5cc6ec7d2708.jpg',
            'img/3f1f5e92ef94ee8b.jpg',
            'img/98908d983932dbb7.jpg',
            'img/9611c897dcec1d95.jpg',
            'img/cd72a8cdd61d87de.jpg',
        ],
        weapon: [
            'img/d43685ed4eff5d9f.jpg',
            'img/5a77129618101735.jpg',
            'img/81e64fe8fd6e4ff8.jpg',
            'img/1bf43e0ceeb758b6.jpg',
            'img/e27cf575f5f0310f.jpg',
        ],
    },
    portrait: 'img/924fa3d1afe01c5b.jpg',
}
