// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_forlorn1: ClassModData = {
    key: 'forlorn1',
    name: `Forlorn`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.5,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2822357458'
        }
    ],
    skills: [
        {
            name: `Whiplash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8bc4f396dab49274.jpg',
        },
        {
            name: `Hunter's Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d736e4d0307c70fa.jpg',
        },
        {
            name: `Entangle`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/98f111fa9beb9f3f.jpg',
        },
        {
            name: `Private Rations`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7a9ef358520adc05.jpg',
        },
        {
            name: `Bloodied Cross`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/6f37fb4edfe7127d.jpg',
        },
        {
            name: `Expunge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d57bb08890246e30.jpg',
        },
        {
            name: `Retreating Dash`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c3b1aa73029437a1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f2d1f679852ec1e8.jpg',
            'img/3847d6111a6ff5d2.jpg',
            'img/2ce35ce861241d51.jpg',
            'img/6c448a868d804317.jpg',
            'img/967e2b772e4cc480.jpg',
        ],
        weapon: [
            'img/8edab3df7c2efb9e.jpg',
            'img/d69cb12dba4ef5cd.jpg',
            'img/48f8827394bd03c2.jpg',
            'img/43efac9ed2a5db03.jpg',
            'img/2bdc9200c8149fa3.jpg',
        ],
    },
    portrait: 'img/0beb3a5d10dfc3f2.jpg',
}
