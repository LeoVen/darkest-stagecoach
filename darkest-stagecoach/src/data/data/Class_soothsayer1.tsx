// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_soothsayer1: ClassModData = {
    key: 'soothsayer1',
    name: `Soothsayer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
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
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1834134425'
        }
    ],
    skills: [
        {
            name: `Dream Eater`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fb062e01e7f332d4.jpg',
        },
        {
            name: `Shattered Psyche`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b38838df68037232.jpg',
        },
        {
            name: `Psyshock`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2a0ffd24cf45b4d9.jpg',
        },
        {
            name: `Calm Mind`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/541cc6c2705db24e.jpg',
        },
        {
            name: `Miracle Eye`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/f4f8af7e37c61e2c.jpg',
        },
        {
            name: `Future Sight`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/56ac17f837627904.jpg',
        },
        {
            name: `Confusion`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ac5e7d5078f71151.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5447ae507516abec.jpg',
            'img/ba6646dbbaf08255.jpg',
            'img/c27218b3a3d4fce7.jpg',
            'img/7002ae0ece8c6189.jpg',
            'img/743eb8c35674a96d.jpg',
        ],
        weapon: [
            'img/e35433b6c2e1df8d.jpg',
            'img/2d6a90d75c57adeb.jpg',
            'img/3ff0702ba996c088.jpg',
            'img/e9813b9c085e6193.jpg',
            'img/84c0977a5526f0a5.jpg',
        ],
    },
    portrait: 'img/7739d116b5ee2137.jpg',
}
