// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_alchemist1: ClassModData = {
    key: 'alchemist1',
    name: `Alchemist`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.4,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2001406494'
        }
    ],
    skills: [
        {
            name: `Putrefaction`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/736f99b06f63e75d.jpg',
        },
        {
            name: `Decay`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/f2e32aa202e5686f.jpg',
        },
        {
            name: `Algernon`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/fe65d02c57ea57ed.jpg',
        },
        {
            name: `Rupture`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/1c632f13202b1a50.jpg',
        },
        {
            name: `Infusion`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/838f3ff4765e6fe4.jpg',
        },
        {
            name: `Homunculus`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2ed8dcc29688df9a.jpg',
        },
        {
            name: `Blood Decoction`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/434863f317b769fa.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1b86d0bd049b623f.jpg',
            'img/54df95908e5c670f.jpg',
            'img/e247ed81cdae4694.jpg',
            'img/4b92c031ed9d6318.jpg',
            'img/3d366c7b6c500c0f.jpg',
        ],
        weapon: [
            'img/24028713a586fc58.jpg',
            'img/5200d2add05847dd.jpg',
            'img/92fba0eaeb6be2ac.jpg',
            'img/0c9660dee6a5aa09.jpg',
            'img/60ebeebeda68a647.jpg',
        ],
    },
    portrait: 'img/d695f25eaba756f2.jpg',
}
