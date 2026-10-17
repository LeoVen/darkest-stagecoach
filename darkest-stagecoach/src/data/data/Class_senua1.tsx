// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_senua1: ClassModData = {
    key: 'senua1',
    name: `Senua`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2016855256'
        }
    ],
    skills: [
        {
            name: `Wild Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3766a150e8d4deb3.jpg',
        },
        {
            name: `Mighty Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/0c784411f4db6100.jpg',
        },
        {
            name: `Kick`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/9635ec148ff58e0e.jpg',
        },
        {
            name: `Stab`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f67b112acbe09077.jpg',
        },
        {
            name: `Face Time`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/17f7d594654a55e2.jpg',
        },
        {
            name: `Head Case`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/cd92b97f486efc25.jpg',
        },
        {
            name: `Focus`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/272ff4b0e27fe4ee.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b2c496b3c975ba7d.jpg',
            'img/aca794f55f854f44.jpg',
            'img/c2ea18f06e8a5a5e.jpg',
            'img/e0c076ae39249e61.jpg',
            'img/dd0f829ad79b6d93.jpg',
        ],
        weapon: [
            'img/5178733113f209f6.jpg',
            'img/6c7a323c302c46b7.jpg',
            'img/c2f4c2dee80f94cc.jpg',
            'img/d17f7960a2339980.jpg',
            'img/93d86339ddc5c6c2.jpg',
        ],
    },
    portrait: 'img/abb1921635e8eca0.jpg',
}
