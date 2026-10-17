// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_VH_oni_3280389755: ClassModData = {
    key: 'VH_oni_3280389755',
    name: `Marauder`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.04, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.23, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 3 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 3 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.1, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3280389755'
        }
    ],
    skills: [
        {
            name: `Pillage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fde71f65b336c97b.jpg',
        },
        {
            name: `Rampage`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/32ee0e5f3b158c05.jpg',
        },
        {
            name: `Concuss`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/684fe747f7ffd21a.jpg',
        },
        {
            name: `Plunder`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d2d10650e899a6e9.jpg',
        },
        {
            name: `Enrage`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1ff6534fd0a7315a.jpg',
        },
        {
            name: `Rain of Riches`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a3aeb54a8df3e3a9.jpg',
        },
        {
            name: `Oni's Bane`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/39d135229ef3ec68.jpg',
        },
    ],
    equip: {
        armour: [
            'img/169278606c46b9aa.jpg',
            'img/c64ab6a5fe9685e0.jpg',
            'img/2c43ce2e81d5d9a6.jpg',
            'img/1c67c91b97f61544.jpg',
            'img/67c99fe9fd4f1b29.jpg',
        ],
        weapon: [
            'img/cd96294acba215bc.jpg',
            'img/96408cd740cbd226.jpg',
            'img/70289f05042b20b7.jpg',
            'img/3229ec231356ce1b.jpg',
            'img/136df47cf8044696.jpg',
        ],
    },
    portrait: 'img/1700bbfa1957ad72.jpg',
}
