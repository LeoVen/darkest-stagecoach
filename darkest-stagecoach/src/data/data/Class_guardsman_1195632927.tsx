// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_guardsman_1195632927: ClassModData = {
    key: 'guardsman_1195632927',
    name: `Guardsman`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.35,
        blight: 0.25,
        bleed: 0.25,
        disease: 0.25,
        move: 0.35,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.04, prot: 0.05, hp: 33, speed: 0 },
            { dodge: 0.08, prot: 0.07, hp: 38, speed: 0 },
            { dodge: 0.12, prot: 0.1, hp: 43, speed: 0 },
            { dodge: 0.16, prot: 0.14, hp: 48, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.075, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.085, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1195632927'
        }
    ],
    skills: [
        {
            name: `Aimed Shot`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/5f67bcb0b6a6e61f.jpg',
        },
        {
            name: `Blind Shot`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/c0b398bab42352f1.jpg',
        },
        {
            name: `Frag Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/362c16ae198a4d73.jpg',
        },
        {
            name: `Krak Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/c3d8a33bf2978045.jpg',
        },
        {
            name: `Photon Grenade`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/625d497c9c55718f.jpg',
        },
        {
            name: `Firm Faith`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/3fe681a6c0ab69c5.jpg',
        },
        {
            name: `Reload`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e7964dc4320eaba5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4f392b6ed4cfa9dc.jpg',
            'img/290e342269dd74a2.jpg',
            'img/5aedb0c6cc2a19cf.jpg',
            'img/7956dafcf1ce15da.jpg',
            'img/86c79c64b678c7af.jpg',
        ],
        weapon: [
            'img/c99bfe3c655eb855.jpg',
            'img/aba402eb9e169b51.jpg',
            'img/c3d3edeb82b4dcfb.jpg',
            'img/c9a2e5127b1e23be.jpg',
            'img/1c4a1d5fd1c40bbe.jpg',
        ],
    },
    portrait: 'img/4ccadc7bf19c2a21.jpg',
}
