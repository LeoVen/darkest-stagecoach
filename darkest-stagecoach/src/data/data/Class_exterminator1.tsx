// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_exterminator1: ClassModData = {
    key: 'exterminator1',
    name: `Exterminator`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.6,
        bleed: 0.3,
        disease: 0.5,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 7 },
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2336153147'
        }
    ],
    skills: [
        {
            name: `Smoke Out`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/54f46d6f92ceba12.jpg',
        },
        {
            name: `Exterminate Them`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/eb968fa0c64f6130.jpg',
        },
        {
            name: `Stomp Out`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b3b1cea297feb988.jpg',
        },
        {
            name: `Collar and Contain`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/92591eede3ba1fe3.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Sanitize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/93d03c059dde2a40.jpg',
        },
        {
            name: `Trap`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e0c6eaf0e8ea1c6f.jpg',
        },
        {
            name: `Apprehend`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/20aaa371789cd001.jpg',
        },
    ],
    equip: {
        armour: [
            'img/07f8b80ca79bb28a.jpg',
            'img/38f3856ca5b321f0.jpg',
            'img/4c8c24ba6e662dd6.jpg',
            'img/cf1e931d5e2f2d65.jpg',
            'img/9281e7d2573fee4b.jpg',
        ],
        weapon: [
            'img/ef8e51afff4bcc24.jpg',
            'img/46051df07c69a85d.jpg',
            'img/76a0391254d601d9.jpg',
            'img/7b8df96666e7816a.jpg',
            'img/36200bcb3fd96098.jpg',
        ],
    },
    portrait: 'img/4a696fda851c4870.jpg',
}
