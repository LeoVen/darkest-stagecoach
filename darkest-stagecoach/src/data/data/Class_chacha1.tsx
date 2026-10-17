// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_chacha1: ClassModData = {
    key: 'chacha1',
    name: `Charlatan`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2823681766'
        }
    ],
    skills: [
        {
            name: `Five of Swords`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/33993cf61b948285.jpg',
        },
        {
            name: `See No Evil`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e5f391844e4d0bb8.jpg',
        },
        {
            name: `Chthonic Phenomenon`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b1f92efec6f6b2a3.jpg',
        },
        {
            name: `To The Stage`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/9042550ea271a172.jpg',
        },
        {
            name: `Embrace Of Darkness`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9efe89f6929b9325.jpg',
        },
        {
            name: `Ordinary Miracle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/dbfcd2a8fc66b199.jpg',
        },
        {
            name: `Card Tricks`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/738f208f99cbb36a.jpg',
        },
    ],
    equip: {
        armour: [
            'img/483c181d402298b3.jpg',
            'img/806f02c3eed8bd83.jpg',
            'img/b24b1e06c9cfce98.jpg',
            'img/3921ce334cf49135.jpg',
            'img/29aa417b91e7be67.jpg',
        ],
        weapon: [
            'img/8d3d865f813dfec0.jpg',
            'img/10c3cdb9aac0c41d.jpg',
            'img/97c1c5c99b453b4e.jpg',
            'img/bb924484f61d89b5.jpg',
            'img/a1bdeae7aca9ca6a.jpg',
        ],
    },
    portrait: 'img/be51395be8a34fc2.jpg',
}
