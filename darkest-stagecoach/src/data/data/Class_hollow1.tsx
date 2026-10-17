// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hollow1: ClassModData = {
    key: 'hollow1',
    name: `Hollow`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 8.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [1.0, 9.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [2.0, 11.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [2.0, 12.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [3.0, 14.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1115865609'
        }
    ],
    skills: [
        {
            name: `Tumor`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e8f561095655d614.jpg',
        },
        {
            name: `Phagos`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/5145f6857487be5f.jpg',
        },
        {
            name: `Voro`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3df4c23a7914934b.jpg',
        },
        {
            name: `Effluo`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7105de3e9c839ef3.jpg',
        },
        {
            name: `Depulsio`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/445ba3e53f5012ad.jpg',
        },
        {
            name: `Fatum Nunc`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/94772a2c345bebc7.jpg',
        },
        {
            name: `Epulum`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/94c13c992aee0a96.jpg',
        },
    ],
    equip: {
        armour: [
            'img/baa525b259ff4485.jpg',
            'img/1d3b2ca3d9978d29.jpg',
            'img/1170811b880dd6df.jpg',
            'img/b7f436416bae5278.jpg',
            'img/c0a2883eced0becc.jpg',
        ],
        weapon: [
            'img/9243797a95a31565.jpg',
            'img/ab3fc3232c16ef12.jpg',
            'img/dee776b598858713.jpg',
            'img/708bb438cbaf9b6e.jpg',
            'img/b2ab2e19d1e3fbe6.jpg',
        ],
    },
    portrait: 'img/c263be243d503b7b.jpg',
}
