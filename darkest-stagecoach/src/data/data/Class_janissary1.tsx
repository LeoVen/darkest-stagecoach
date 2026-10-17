// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_janissary1: ClassModData = {
    key: 'janissary1',
    name: `Janissary`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 39, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2377934884'
        }
    ],
    skills: [
        {
            name: `Arquebus Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fba968369a5d04a1.jpg',
        },
        {
            name: `Thin the Herd`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/73cfdebcc31c95c9.jpg',
        },
        {
            name: `Tempered Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/987a25f7e4247f8c.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
   Brothers in Arms`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/46f56d67031cc916.jpg',
        },
        {
            name: `Brace the Gun`,
            launch: [false,false,false,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ba8de0cf0ecaeb49.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
   Song of Valor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/8f4bbbd07257dca1.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
   One Man Band`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/64e7f1a4d45b4b85.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3c9eefb2c945ec19.jpg',
            'img/2a42a109495241d7.jpg',
            'img/fd8b6d29372a71eb.jpg',
            'img/4e0099d74b35b967.jpg',
            'img/233c87b5e3a9da6e.jpg',
        ],
        weapon: [
            'img/d05efff4a34426af.jpg',
            'img/c35a4229fc59af27.jpg',
            'img/910b1cad683b5f55.jpg',
            'img/3a2f150768cb6005.jpg',
            'img/ed2dab03479f840b.jpg',
        ],
    },
    portrait: 'img/db953758597ed538.jpg',
}
