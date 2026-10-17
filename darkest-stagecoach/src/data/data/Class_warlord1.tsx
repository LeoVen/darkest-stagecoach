// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warlord1: ClassModData = {
    key: 'warlord1',
    name: `Warlord`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.8,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 58, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2826625720'
        }
    ],
    skills: [
        {
            name: `Brutal Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/88e3e3503c3abfa3.jpg',
        },
        {
            name: `Horn Rush`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6ac9b24088174b23.jpg',
        },
        {
            name: `Trampling Withdrawal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8b878141e61f97db.jpg',
        },
        {
            name: `Sentinel`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `@~`,
            },
            image: 'img/1a3568f5aae864f9.jpg',
        },
        {
            name: `Who’s Next?`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2e8cb62e97d733f5.jpg',
        },
        {
            name: `Triumph`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0e4a2ea6efa474ca.jpg',
        },
        {
            name: `Advance / Retreat`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9cfb9a02c539c399.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1ed3bb049a2a5895.jpg',
            'img/87ac8802332e4afb.jpg',
            'img/39281f612c672f24.jpg',
            'img/99682d6b986475b1.jpg',
            'img/ada4adcf9630aa41.jpg',
        ],
        weapon: [
            'img/04fcb7473acdd9f6.jpg',
            'img/0f8c193437de0e8a.jpg',
            'img/b5e576312233cb70.jpg',
            'img/b3c9d83c81cf8b44.jpg',
            'img/f78b35b73210c8e3.jpg',
        ],
    },
    portrait: 'img/7a35f9a99b430e9e.jpg',
}
