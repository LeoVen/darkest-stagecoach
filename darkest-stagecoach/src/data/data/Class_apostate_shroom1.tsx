// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_apostate_shroom1: ClassModData = {
    key: 'apostate_shroom1',
    name: `Clobber`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 17.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [9.0, 19.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [10.0, 21.0], crit: 0.1, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1867479147'
        }
    ],
    skills: [
        {
            name: `Obliterate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/aeaecec65aaa55c1.jpg',
        },
        {
            name: `Flexing Muscles`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/b64f4a62dee5b5df.jpg',
        },
        {
            name: `Intimidating Flex`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/08a8530b7a157cac.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Protection Flex`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/25d7b260f979e731.jpg',
        },
        {
            name: `Penetrating Punch`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/c518e4ced6c9a3b6.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Personal Trainer`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/94927e9b2fd9d91e.jpg',
        },
        {
            name: `Punchout`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/19e7de7631d34ec3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/43f8b42c1c4e11f9.jpg',
            'img/f0a52d3e68832a14.jpg',
            'img/dafd497eb9f09d5f.jpg',
            'img/bf93cc2aca20a88b.jpg',
            'img/539c21b9bf01b0d8.jpg',
        ],
        weapon: [
            'img/47152ed8e3378280.jpg',
            'img/f7c5edaba8ba7df6.jpg',
            'img/0699ad60d603b660.jpg',
            'img/7f9dd054a10d5367.jpg',
            'img/feb459cf342eb210.jpg',
        ],
    },
    portrait: 'img/586210d7fd1ad266.jpg',
}
