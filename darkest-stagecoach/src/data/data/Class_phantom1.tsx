// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_phantom1: ClassModData = {
    key: 'phantom1',
    name: `Phantom`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.55,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.13, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.33, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1445902568'
        }
    ],
    skills: [
        {
            name: `Assassinate`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ceb6b40f8578a638.jpg',
        },
        {
            name: `Deatharang`,
            launch: [true,true,true,false],
            target: {
                targets: [true,false,false,true],
                mods: `~`,
            },
            image: 'img/7fae3c2122fcfff9.jpg',
        },
        {
            name: `Blind Throw`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/27e0f9aa4c4ef023.jpg',
        },
        {
            name: `Vanishing Trick`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b84ff9d2e794b540.jpg',
        },
        {
            name: `Shadow Cloak`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5678e5576ae0cf97.jpg',
        },
        {
            name: `Marked Fate`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/bfe1fa9e1d38b3f8.jpg',
        },
        {
            name: `Merciful Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/fb6f86b310cbf841.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a0eaea08c6fb386d.jpg',
            'img/b9e22c007aa18d17.jpg',
            'img/311be8cc6b67e527.jpg',
            'img/12a48817db4d8345.jpg',
            'img/42fedb2a2a1deaa8.jpg',
        ],
        weapon: [
            'img/3d535e8050cf12fe.jpg',
            'img/b7cc3b0df7a64936.jpg',
            'img/048bd26537938d90.jpg',
            'img/c4b0a28956a3e2d2.jpg',
            'img/1edd402f7e83d39a.jpg',
        ],
    },
    portrait: 'img/004d05ae0d5d632f.jpg',
}
