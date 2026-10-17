// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shadow_walker1: ClassModData = {
    key: 'shadow_walker1',
    name: `Shadow Walker`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.45,
        blight: 0.5,
        bleed: 0.25,
        disease: 0.2,
        move: 0.15,
        debuff: 0.25,
        deathBlow: 0.7,
        trap: 0.9
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.24, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1542315540'
        }
    ],
    skills: [
        {
            name: `Ken-Jutsu (Katana Strike)`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1499e5baab1ddebc.jpg',
        },
        {
            name: `Blood Boil`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/0f6716023ee196c9.jpg',
        },
        {
            name: `Kiai-Jutsu (Chain Entangle)`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/801b7a156fdfd040.jpg',
        },
        {
            name: `Kuji-Kiri (Gesture Slap)`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2909dfb89dc11569.jpg',
        },
        {
            name: `Venom-Tipped Shurikens`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/78b637377e290801.jpg',
        },
        {
            name: `Pressure Point`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/6412a3def35cf40c.jpg',
        },
        {
            name: `Shadow Slide`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e906dfbe7b1512ad.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7d2d6bf860991a49.jpg',
            'img/934f46b7f4678b2f.jpg',
            'img/4b9f4d4dbb26f481.jpg',
            'img/92a4fbed95728e09.jpg',
            'img/d8dafd13e6f6e9c2.jpg',
        ],
        weapon: [
            'img/dcac3cebd0fa28d4.jpg',
            'img/ede63847ff59bf95.jpg',
            'img/f776e222654c2ab7.jpg',
            'img/91cbea7ad2520e56.jpg',
            'img/c59154c9d246961d.jpg',
        ],
    },
    portrait: 'img/eeb1d7a89e601324.jpg',
}
