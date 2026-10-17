// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_tanker_3310476693: ClassModData = {
    key: 'tanker_3310476693',
    name: `Tanker`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.6,
        disease: 0.3,
        move: 0.7,
        debuff: 0.2,
        deathBlow: 0.7,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.05, hp: 34, speed: 0 },
            { dodge: 0.035, prot: 0.05, hp: 40, speed: 0 },
            { dodge: 0.05, prot: 0.05, hp: 46, speed: 0 },
            { dodge: 0.075, prot: 0.05, hp: 52, speed: 0 },
            { dodge: 0.1, prot: 0.05, hp: 60, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 14.0], crit: 0.01, speed: 1 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [10.0, 18.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [11.0, 20.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [13.0, 23.0], crit: 0.05, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3310476693'
        }
    ],
    skills: [
        {
            name: `Prodding Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2d3d82672ca656c8.jpg',
        },
        {
            name: `Targeted Toss`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/54acb6e87d7afa6d.jpg',
        },
        {
            name: `Drive Me Closer!`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cd82ec7373b9b2ab.jpg',
        },
        {
            name: `Cannon Shot`,
            launch: [true,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/ed33d02141b26de5.jpg',
        },
        {
            name: `BOOM!`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/0d091ee42d1d2ce1.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Brother's Keeper`,
            launch: [true,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/78e6c79054d4a113.jpg',
        },
        {
            name: `Field Repair`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ce5f282afb0e1638.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f501c8865aabb717.jpg',
            'img/414afacfeb4d2eb0.jpg',
            'img/a1bdf5a1b7f92b50.jpg',
            'img/bcf267f54ae717f8.jpg',
            'img/014bda709963f994.jpg',
        ],
        weapon: [
            'img/38d524c578b4a62b.jpg',
            'img/9dde72b75aed40df.jpg',
            'img/b62bce3f045abb6f.jpg',
            'img/33858bc8ac3a2bed.jpg',
            'img/c9485f001437fef3.jpg',
        ],
    },
    portrait: 'img/0dead01351acd510.jpg',
}
