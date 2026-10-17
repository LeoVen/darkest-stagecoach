// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_conquistador_1114545692: ClassModData = {
    key: 'conquistador_1114545692',
    name: `Conquistador`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.7,
        debuff: 0.3,
        deathBlow: 0.7,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.05, hp: 24, speed: 0 },
            { dodge: 0.03, prot: 0.07, hp: 29, speed: 0 },
            { dodge: 0.06, prot: 0.09, hp: 34, speed: 0 },
            { dodge: 0.09, prot: 0.11, hp: 39, speed: 0 },
            { dodge: 0.12, prot: 0.13, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1114545692'
        }
    ],
    skills: [
        {
            name: `Corte Doblado`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9a8216e9fcb25153.jpg',
        },
        {
            name: `Embate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/73090e56ff0e6575.jpg',
        },
        {
            name: `Blandir Lanza`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/d092f77e8ab9fb10.jpg',
        },
        {
            name: `Marcha Penetrante`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/3879abf9dbc90ab8.jpg',
        },
        {
            name: `Fuego!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/23524f09a776c123.jpg',
        },
        {
            name: `Granada`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/62224a8a0a3cb17e.jpg',
        },
        {
            name: `Formación en Tercio`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/0522e1435a76d9e5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f2528c0d218a0bbe.jpg',
            'img/6324a2cf0e350a44.jpg',
            'img/e2bac690c35882b9.jpg',
            'img/8cbf7a6e72b6f619.jpg',
            'img/1639d8548b1ed6a7.jpg',
        ],
        weapon: [
            'img/fa1f89e333a59858.jpg',
            'img/c1253f46c5ce8b61.jpg',
            'img/d0612ec4959c2710.jpg',
            'img/1835c822b3be2dbe.jpg',
            'img/97caa89135833b9a.jpg',
        ],
    },
    portrait: 'img/2d0ddec63a5ff6d4.jpg',
}
