// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_hollow_knight_1658595868: ClassModData = {
    key: 'hollow_knight_1658595868',
    name: `Hollow Knight`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.55,
        blight: 0.1,
        bleed: 2,
        disease: 0.55,
        move: 0.6,
        debuff: 0.45,
        deathBlow: 0.6,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.075, prot: 0.025, hp: 35, speed: 1 },
            { dodge: 0.125, prot: 0.05, hp: 40, speed: 1 },
            { dodge: 0.175, prot: 0.075, hp: 45, speed: 1 },
            { dodge: 0.2, prot: 0.1, hp: 50, speed: 2 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [10.0, 17.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [11.0, 19.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1658595868'
        }
    ],
    skills: [
        {
            name: `Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d80045372970a80c.jpg',
        },
        {
            name: `Slash`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/378cc6390948e64a.jpg',
        },
        {
            name: `War Cry`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/e4463d8aa97e2ff2.jpg',
        },
        {
            name: `Pugilism`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `?`,
            },
            image: 'img/28993a45192f2b88.jpg',
        },
        {
            name: `Stow Fear`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/326c076b2e636439.jpg',
        },
        {
            name: `Fear Eater`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c48ebd0a3b137970.jpg',
        },
        {
            name: `Tombstones`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/1bccbbac6a470472.jpg',
        },
    ],
    equip: {
        armour: [
            'img/14cf9c770c844e4a.jpg',
            'img/508c546390788019.jpg',
            'img/1d747192f2a5c7f2.jpg',
            'img/2876cf964ddb69d9.jpg',
            'img/c46394b673b718ce.jpg',
        ],
        weapon: [
            'img/f82c512967c6d75a.jpg',
            'img/c3f69c08bf06de36.jpg',
            'img/4e0bc0bad546dec0.jpg',
            'img/4dc6b09038a33bd4.jpg',
            'img/59755b69602c3840.jpg',
        ],
    },
    portrait: 'img/7f181835592603ae.jpg',
}
