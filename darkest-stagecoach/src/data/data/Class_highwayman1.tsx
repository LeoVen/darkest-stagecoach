// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_highwayman1: ClassModData = {
    key: 'highwayman1',
    name: `Highwayman`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 43, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Wicked Slice`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5fc75078c01cfb7d.jpg',
        },
        {
            name: `Pistol Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/86a48f9d69cb21f2.jpg',
        },
        {
            name: `Point Blank Shot`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/a27aee2ddad68947.jpg',
        },
        {
            name: `Grapeshot Blast`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/a035a9d079b35f4c.jpg',
        },
        {
            name: `Tracking Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8f398fe5fe9f763f.jpg',
        },
        {
            name: `Duelist's Advance`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f5d976665858737a.jpg',
        },
        {
            name: `Open Vein`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b7c4b90f94d71df5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b7ea37d0caf6938b.jpg',
            'img/7e681b1561823a07.jpg',
            'img/255c8279459f7795.jpg',
            'img/064a91bc6100fbd0.jpg',
            'img/f4f4fb1b4a199e17.jpg',
        ],
        weapon: [
            'img/c45a92718fb139b8.jpg',
            'img/18272a4b08381af9.jpg',
            'img/0edab7477818728f.jpg',
            'img/76e3968e79b88983.jpg',
            'img/7148ac1da26da6f7.jpg',
        ],
    },
    portrait: 'img/6b8a155f850a5270.jpg',
}
