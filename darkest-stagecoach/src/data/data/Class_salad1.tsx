// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_salad1: ClassModData = {
    key: 'salad1',
    name: `Salamander`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2204287440'
        }
    ],
    skills: [
        {
            name: `Flame Gout`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/50a687559b759847.jpg',
        },
        {
            name: `Salamander's Breath`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/f9ce24812870c6b7.jpg',
        },
        {
            name: `Steam Vent`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/bed0010218bb9c7c.jpg',
        },
        {
            name: `Grappling Claw`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,true],
                mods: ``,
            },
            image: 'img/07e7ab142f9abea7.jpg',
        },
        {
            name: `Pile Bunker`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/052337a110dcf0a6.jpg',
        },
        {
            name: `Lacerate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2178143a1fe20554.jpg',
        },
        {
            name: `Sweep Kick`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/beffc095eff312b4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e050296a1f4f7637.jpg',
            'img/469dccadaf88113f.jpg',
            'img/5a75d215ab10acdc.jpg',
            'img/90780bce1330af81.jpg',
            'img/68c46c59483c7ca6.jpg',
        ],
        weapon: [
            'img/b7a18b7f83522e3f.jpg',
            'img/deed084f52ad0f24.jpg',
            'img/51a66302a6f2ef01.jpg',
            'img/a8b0773bb2c8446f.jpg',
            'img/7a6bbd11f184a2af.jpg',
        ],
    },
    portrait: 'img/24ceb66c9b6bb764.jpg',
}
