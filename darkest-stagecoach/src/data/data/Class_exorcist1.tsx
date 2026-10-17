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
            image: 'img/7832e77f02dc2b64.jpg',
        },
        {
            name: `Perdition`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/10aafe81e045f84a.jpg',
        },
        {
            name: `Word of Power`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/daf5b7f4c8559be7.jpg',
        },
        {
            name: `Benediction`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8f0d87fcb25cfc5b.jpg',
        },
        {
            name: `Ashes to Ashes`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b96096654a10d451.jpg',
        },
        {
            name: `Vade Retro!`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/df0341413531ac8d.jpg',
        },
        {
            name: `Proselytize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0d130bcfc451c141.jpg',
        },
    ],
    equip: {
        armour: [
            'img/cde80b8d634f33c9.jpg',
            'img/7e60d51de67bee99.jpg',
            'img/d4e288dc5bf5a3e0.jpg',
            'img/f8a5aae2c151f9fc.jpg',
            'img/d93de6a7abcd0dca.jpg',
        ],
        weapon: [
            'img/99c0eab9fa893a1c.jpg',
            'img/4137031ea2777466.jpg',
            'img/d87f36068d5c5e36.jpg',
            'img/3bf93d7f781ab6c1.jpg',
            'img/07aeca9be3b4fb09.jpg',
        ],
    },
    portrait: 'img/849db9dbd2fac421.jpg',
}
