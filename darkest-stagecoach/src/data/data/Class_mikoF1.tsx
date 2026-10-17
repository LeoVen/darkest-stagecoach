// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_mikoF1: ClassModData = {
    key: 'mikoF1',
    name: `Kitsune Miko`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.95,
        move: 0.2,
        debuff: 0.7,
        deathBlow: 0.67,
        trap: 0.6
    },
    stats: {
        armours: [
            { dodge: 0.07, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.14, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.28, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 30, speed: 0 }
        ],
        weapons: [
            { accuracy: 0.05, damage: [5.0, 7.0], crit: 0.05, speed: 9 },
            { accuracy: 0.1, damage: [5.0, 7.0], crit: 0.1, speed: 9 },
            { accuracy: 0.15, damage: [5.0, 7.0], crit: 0.15, speed: 9 },
            { accuracy: 0.2, damage: [5.0, 7.0], crit: 0.2, speed: 9 },
            { accuracy: 0.25, damage: [5.0, 7.0], crit: 0.25, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2585273417'
        }
    ],
    skills: [
        {
            name: `Gohei Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a93177823a920918.jpg',
        },
        {
            name: `Charm Blast`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/c55485ba8e71f948.jpg',
        },
        {
            name: `Charm Spell: Luck`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/58199a18c262d543.jpg',
        },
        {
            name: `Healing Chime`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f2b126c3c36d8884.jpg',
        },
        {
            name: `Charm Spell: Reveal`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d10f389efddbcbad.jpg',
        },
        {
            name: `Special: Hallow Ground`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/bcd22537bea39cb1.jpg',
        },
        {
            name: `Special: Damnation`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ac629b945716469d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6b05ec83703e4fc9.jpg',
            'img/bbd80756dd803340.jpg',
            'img/0b16e6d5b4b594f4.jpg',
            'img/c94817677ae734a8.jpg',
            'img/310186864941e988.jpg',
        ],
        weapon: [
            'img/c32b8265f6e856a8.jpg',
            'img/1dbdcca3d0f3c3d2.jpg',
            'img/010502677d6f9a4c.jpg',
            'img/fd8f27db9925b4d1.jpg',
            'img/ae55fc0084c565a0.jpg',
        ],
    },
    portrait: 'img/bc574b9199b4ab44.jpg',
}
