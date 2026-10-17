// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_succubus1: ClassModData = {
    key: 'succubus1',
    name: `Succubus`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.4,
        move: 0.3,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 15, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1597176026'
        }
    ],
    skills: [
        {
            name: `Revelation`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/40b334b8f27a523f.jpg',
        },
        {
            name: `Silent Curse`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/625c76fe13134abf.jpg',
        },
        {
            name: `Demonic Leeching`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/db2ceb06cdf7c0a8.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
My Hero!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8c563bcdd1865113.jpg',
        },
        {
            name: `Scythe Swing`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/62b16d4779e0196c.jpg',
        },
        {
            name: `Harvest Reaper`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8e790057843a89e6.jpg',
        },
        {
            name: `Protect Your Goddess!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3069585b480692d3.jpg',
        },
    ],
    equip: {
        armour: [
            'img/170775aebeec88ca.jpg',
            'img/d1d08aa8643fc88b.jpg',
            'img/9fa622c4a86e0f0a.jpg',
            'img/6c3a81d806b7d35a.jpg',
            'img/89b8a066697b9abb.jpg',
        ],
        weapon: [
            'img/ad68ffdc9b91d63b.jpg',
            'img/38b73017084f437d.jpg',
            'img/5d2b15867113f782.jpg',
            'img/2ce253bf4044f191.jpg',
            'img/2acfe08b74ae43a4.jpg',
        ],
    },
    portrait: 'img/51c481eed517c5ac.jpg',
}
