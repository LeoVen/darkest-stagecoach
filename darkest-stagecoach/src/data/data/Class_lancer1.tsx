// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_lancer1: ClassModData = {
    key: 'lancer1',
    name: `Spirit Lancer`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.5,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1836051076'
        }
    ],
    skills: [
        {
            name: `Exonerate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e775fa702ad7c9f1.jpg',
        },
        {
            name: `Perforate`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8b703260d4cc0ad8.jpg',
        },
        {
            name: `Serrate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,false,true,false],
                mods: ``,
            },
            image: 'img/fe8633860f3c6bb5.jpg',
        },
        {
            name: `Debilitate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/e5d510b1c512f53c.jpg',
        },
        {
            name: `Agitate`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,false,true],
                mods: ``,
            },
            image: 'img/52e35690ffbcd459.jpg',
        },
        {
            name: `Eradicate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/19acdb0c0d731fc6.jpg',
        },
        {
            name: `Actuate`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ee998c5cf05a9c0e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3d258cf8a7d5a765.jpg',
            'img/2d4d8417b2d943ab.jpg',
            'img/7fcce1fa8da3caa2.jpg',
            'img/053fef0d67bcae30.jpg',
            'img/08a6008bf2d6daed.jpg',
        ],
        weapon: [
            'img/e830474f3183154b.jpg',
            'img/fc1e98be7534833a.jpg',
            'img/2ba989e5abf0d069.jpg',
            'img/ad51f52eb34cebb8.jpg',
            'img/8ffffea2cca2ad8f.jpg',
        ],
    },
    portrait: 'img/3acdb78e570720f7.jpg',
}
