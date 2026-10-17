// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_plague_doctor1: ClassModData = {
    key: 'plague_doctor1',
    name: `Plague Doctor`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Noxious Blast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c7dc3d2f9bf07d65.jpg',
        },
        {
            name: `Plague Grenade`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/83af089e4e459924.jpg',
        },
        {
            name: `Blinding Gas`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/b0c80d41d9c54e6c.jpg',
        },
        {
            name: `Incision`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c9ce2d492df1a614.jpg',
        },
        {
            name: `Battlefield Medicine`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d81fc38b7aa6a149.jpg',
        },
        {
            name: `Emboldening Vapours`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/aa25ce0a2b8974a1.jpg',
        },
        {
            name: `Disorienting Blast`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/304b7be8e2df6cf0.jpg',
        },
    ],
    equip: {
        armour: [
            'img/104bdf92f8ce4d9a.jpg',
            'img/fde7d476c63fbf90.jpg',
            'img/d1975fd5c6a26aec.jpg',
            'img/b25384e78da8a928.jpg',
            'img/e5c9af74d0800886.jpg',
        ],
        weapon: [
            'img/a2645c043dec91e2.jpg',
            'img/b4fe73a57c5d051d.jpg',
            'img/cac6d830f58235f5.jpg',
            'img/905153426ddee8d6.jpg',
            'img/245c4ebae2d32ac7.jpg',
        ],
    },
    portrait: 'img/3570035bd73ce2a8.jpg',
}
