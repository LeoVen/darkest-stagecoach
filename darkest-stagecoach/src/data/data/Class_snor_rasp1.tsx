// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_snor_rasp1: ClassModData = {
    key: 'snor_rasp1',
    name: `Martyr`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.1,
        disease: 0.4,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 57, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 64, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.01, speed: 4 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2905730405'
        }
    ],
    skills: [
        {
            name: `Encourage`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/567cbc816479b56d.jpg',
        },
        {
            name: `Embrace`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/577024a03c3fb656.jpg',
        },
        {
            name: `Swipe`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/c5d61d8600ec075e.jpg',
        },
        {
            name: `Revival`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5d2ed79e2a8a8a44.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
    Sacrifice`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b5b8b6c2e05d24e5.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
    Mystical Protection`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/24d947af9fa7dfbb.jpg',
        },
        {
            name: `Martyrdom`,
            launch: [true,false,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e6fc5be866175fe4.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7170a0836072b888.jpg',
            'img/78b4fea57df491a8.jpg',
            'img/cd4d334219495b1b.jpg',
            'img/0be86dc8219db518.jpg',
            'img/15574cc7c9455498.jpg',
        ],
        weapon: [
            'img/075c84688a0e2612.jpg',
            'img/50b86c4dd81648f0.jpg',
            'img/1e391ac5c4fcbf56.jpg',
            'img/6e5c9dff239535fe.jpg',
            'img/581f35e02e6aa0f3.jpg',
        ],
    },
    portrait: 'img/c1c95ddf5dee3486.jpg',
}
