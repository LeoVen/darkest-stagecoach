// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_trap_maker1: ClassModData = {
    key: 'trap_maker1',
    name: `Trap Maker`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.8
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 11.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 15.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 16.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 18.0], crit: 0.07, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=929549650'
        }
    ],
    skills: [
        {
            name: `Blunderbusster`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ed49a77530ce3e4e.jpg',
        },
        {
            name: `Iron Maiden`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c40dcd388b4f77e1.jpg',
        },
        {
            name: `Blade Wheel`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/d8d370f3bf463d12.jpg',
        },
        {
            name: `Spikes Trap`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/87a2595e9d983b38.jpg',
        },
        {
            name: `Stone Fall`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/b6209232acef30e1.jpg',
        },
        {
            name: `Armor Breaker`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/21daab0e5d025710.jpg',
        },
        {
            name: `Escape Door`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ca55330e8e8ff70a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/515ec110955eaa40.jpg',
            'img/3b196bc6bdf3fc84.jpg',
            'img/6013e37894627ab6.jpg',
            'img/09a8ba80a518e750.jpg',
            'img/8ac9e06341148201.jpg',
        ],
        weapon: [
            'img/79d3b74c103804cc.jpg',
            'img/bee68d4b1cf76e67.jpg',
            'img/43e45b24c12b32ad.jpg',
            'img/27c986a8dc62762b.jpg',
            'img/fa4471c9ab896d63.jpg',
        ],
    },
    portrait: 'img/c0ac79271d5c805c.jpg',
}
