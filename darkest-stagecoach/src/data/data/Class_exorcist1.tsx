// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_exorcist1: ClassModData = {
    key: 'exorcist1',
    name: `Exorcist`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.1,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1607991008'
        }
    ],
    skills: [
        {
            name: `Chastise`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/2e227b5fdec0a42a.jpg',
        },
        {
            name: `Perdition`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/eb1f45986aa4c05a.jpg',
        },
        {
            name: `Word of Power`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7eadad75be808219.jpg',
        },
        {
            name: `Benediction`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e3967b8b01acd2b0.jpg',
        },
        {
            name: `Ashes to Ashes`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1897d9357196a7df.jpg',
        },
        {
            name: `Vade Retro!`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/8481dbd4d4458a08.jpg',
        },
        {
            name: `Proselytize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ddc6965f2efdcfd4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/81c0fde05162d4e5.jpg',
            'img/66b9a4f1f0fc984d.jpg',
            'img/f32931706d85ce1d.jpg',
            'img/852110bc174474b4.jpg',
            'img/72aa1166c6a2434d.jpg',
        ],
        weapon: [
            'img/637dfb2b98a9f446.jpg',
            'img/8139b6e801ba4bba.jpg',
            'img/f52bc0b6447b9d01.jpg',
            'img/141c79e4cca0f4b3.jpg',
            'img/bde57aad208fd5ce.jpg',
        ],
    },
    portrait: 'img/bfafa19887c893c3.jpg',
}
