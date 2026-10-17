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
            image: 'img/b30835a54e8a6c6b.jpg',
        },
        {
            name: `Silent Curse`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8f8c8ef2c76e266b.jpg',
        },
        {
            name: `Demonic Leeching`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/4c3dcc70c16b7cd5.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
My Hero!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1a7fe75bb022bbbf.jpg',
        },
        {
            name: `Scythe Swing`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a2ef7ab5f64e5de5.jpg',
        },
        {
            name: `Harvest Reaper`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/ec0ddca4cf2fcf76.jpg',
        },
        {
            name: `Protect Your Goddess!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/bd8949e82ca0496e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b754f03f2abf9b42.jpg',
            'img/eeff57338d512fc8.jpg',
            'img/6ff188412f27940c.jpg',
            'img/1aaf06e441d5437a.jpg',
            'img/c60a1ff2706f0c35.jpg',
        ],
        weapon: [
            'img/be904b74f80cccfd.jpg',
            'img/4bbb4f63cc50eee0.jpg',
            'img/e344268ce2e3839f.jpg',
            'img/026f6faaac6c5898.jpg',
            'img/7363ba4379c69bd0.jpg',
        ],
    },
    portrait: 'img/39a2e4f24b4c778b.jpg',
}
