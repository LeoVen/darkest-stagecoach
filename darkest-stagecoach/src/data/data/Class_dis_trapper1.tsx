// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dis_trapper1: ClassModData = {
    key: 'dis_trapper1',
    name: `Trapper`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3362800212'
        }
    ],
    skills: [
        {
            name: `Fungal Claw`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b3904edb74568d46.jpg',
        },
        {
            name: `From Above`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/f42fe2cebf46f2f4.jpg',
        },
        {
            name: `Confusion Spores`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7db2914301277d08.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Defensive Traps`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5b426d06ef072d00.jpg',
        },
        {
            name: `Skin Prey`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/656e2ab721068a19.jpg',
        },
        {
            name: `Slink Back`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/dc842b040a0b58d1.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Medicinal Spores`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/788f3354eea8b52b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6ce789e7774b6e85.jpg',
            'img/7106f285d525fd80.jpg',
            'img/34b13b09fc40af4b.jpg',
            'img/ef28117da004c93d.jpg',
            'img/8a4942219e24cbf7.jpg',
        ],
        weapon: [
            'img/48a6accb16d44d4d.jpg',
            'img/5b1557af429d8938.jpg',
            'img/bff5940b4677519a.jpg',
            'img/793942072fd91af6.jpg',
            'img/1c5d07b9ff41d8cb.jpg',
        ],
    },
    portrait: 'img/adcac5d96d164f94.jpg',
}
