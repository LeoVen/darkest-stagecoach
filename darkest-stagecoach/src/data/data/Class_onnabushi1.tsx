// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_onnabushi1: ClassModData = {
    key: 'onnabushi1',
    name: `Onnabushi`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.25,
        blight: 0.6,
        bleed: 0.2,
        disease: 0.15,
        move: 0.6,
        debuff: 0.3,
        deathBlow: 0.7,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.13, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.32, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [12.0, 14.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1433533871'
        }
    ],
    skills: [
        {
            name: `The River Bends`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/be733c1023e8b227.jpg',
        },
        {
            name: `Summer Haze`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/766b55d263a8668b.jpg',
        },
        {
            name: `Wiltering Branch`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cf7e57ab33384c20.jpg',
        },
        {
            name: `Pale Evenings`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b7002039341e7557.jpg',
        },
        {
            name: `Mourning`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/66bf85ef9a75c699.jpg',
        },
        {
            name: `Mirror Moon`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ee4d2e6f05d975d7.jpg',
        },
        {
            name: `Flight Reversal`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/a074a099e3b58c4c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ffd1b3edfec17072.jpg',
            'img/d7937a0370040cfe.jpg',
            'img/4f6426069701ef0b.jpg',
            'img/b7f7da7eff4fcafc.jpg',
            'img/b21f4d16322bd93a.jpg',
        ],
        weapon: [
            'img/c9de645ddc9d69cd.jpg',
            'img/b10502bd45902eb9.jpg',
            'img/5c7990186862c214.jpg',
            'img/2be21ac3a10be50e.jpg',
            'img/b239530f8c1217e0.jpg',
        ],
    },
    portrait: 'img/646460eefe9082a5.jpg',
}
