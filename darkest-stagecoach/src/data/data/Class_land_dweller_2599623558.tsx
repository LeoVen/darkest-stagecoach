// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_land_dweller_2599623558: ClassModData = {
    key: 'land_dweller_2599623558',
    name: `Land Dweller`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.1,
        disease: 0.4,
        move: 0.8,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.08, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2599623558'
        }
    ],
    skills: [
        {
            name: `Slimed Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5a3505d510d90fb9.jpg',
        },
        {
            name: `Gale Thrust`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/65425d6ab83b5c03.jpg',
        },
        {
            name: `Dissolving Liquid`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b0f686160a9b83d8.jpg',
        },
        {
            name: `Poison Breath`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/a2f3a5c4a29d3c37.jpg',
        },
        {
            name: `Sticky Mucus`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/062a6a5ba1edbabc.jpg',
        },
        {
            name: `Slime Counter`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/c2561dd37ce24426.jpg',
        },
        {
            name: `Lettuce!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/08452a932c444ae8.jpg',
        },
    ],
    equip: {
        armour: [
            'img/366d97b3bee64336.jpg',
            'img/24babf2e6c546ea7.jpg',
            'img/74847a7cc031dcbb.jpg',
            'img/ec20c8abf0a10830.jpg',
            'img/3217aefde5818662.jpg',
        ],
        weapon: [
            'img/1787564c6aa886cc.jpg',
            'img/873d4f55df08275b.jpg',
            'img/ee99ecc67acdad7a.jpg',
            'img/3b13496d805d7d67.jpg',
            'img/3ded18c4d30a4623.jpg',
        ],
    },
    portrait: 'img/89a3ecdfce9668c7.jpg',
}
