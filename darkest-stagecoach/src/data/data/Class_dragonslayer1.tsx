// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_dragonslayer1: ClassModData = {
    key: 'dragonslayer1',
    name: `Dragonslayer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 46, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 18.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1207974198'
        }
    ],
    skills: [
        {
            name: `Swift Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2b68c52bdaf8dad0.jpg',
        },
        {
            name: `Lightning Spear`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/5706ad2eae5c4018.jpg',
        },
        {
            name: `Princess' Guard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/a434a187cd10f0d0.jpg',
        },
        {
            name: `Lightning Impale`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0aabac38bcd9b453.jpg',
        },
        {
            name: `Lightning Dash`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4d18b2d92ab0f27c.jpg',
        },
        {
            name: `Sacred Oath`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/c4349c0f4a284a8c.jpg',
        },
        {
            name: `Golden Glint`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3aae66668518e2a1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7c7556721375e908.jpg',
            'img/445d0687a34b0ea2.jpg',
            'img/298611fbfa19c285.jpg',
            'img/dcb204aab7bd28f4.jpg',
            'img/ee98fc850b137cf2.jpg',
        ],
        weapon: [
            'img/6a8d69db3e42f7a4.jpg',
            'img/fb7e7d53d4d14e70.jpg',
            'img/efdb07051a159b5d.jpg',
            'img/fe0493d57a12bae4.jpg',
            'img/50a413eb01e91ce6.jpg',
        ],
    },
    portrait: 'img/b31bd3d832464a61.jpg',
}
