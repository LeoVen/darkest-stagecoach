// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_helli1: ClassModData = {
    key: 'helli1',
    name: `Lupine`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.45,
        blight: 0.25,
        bleed: 0.5,
        disease: 0.35,
        move: 0.4,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1890263557'
        }
    ],
    skills: [
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f9b7643791dbd317.jpg',
        },
        {
            name: `Hold and Draw`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/dedf1d8b77ce8000.jpg',
        },
        {
            name: `Forestall`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/a2233e3e992add28.jpg',
        },
        {
            name: `Hook where it hurts`,
            launch: [true,true,false,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/386521451938568d.jpg',
        },
        {
            name: `Pierce`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6081865bf9f5859b.jpg',
        },
        {
            name: `Accelerate`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/3ee8d2595c7602f4.jpg',
        },
        {
            name: `Shining Ray`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d6878652220593e6.jpg',
        },
    ],
    equip: {
        armour: [
            'img/177591faad67a7e4.jpg',
            'img/e51300a131913b8c.jpg',
            'img/b7f5ca3aac6c0a46.jpg',
            'img/4bb5c190dc2c09b9.jpg',
            'img/62f76fa7b629a2af.jpg',
        ],
        weapon: [
            'img/0c60e9f21f63c690.jpg',
            'img/3a548546e5556052.jpg',
            'img/3e6dc1346af0e4cf.jpg',
            'img/f4eecb9063ef0cf4.jpg',
            'img/2e1a1711aa14d232.jpg',
        ],
    },
    portrait: 'img/4c3d2c56ead8bd55.jpg',
}
