// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warrior_of_sunlight1: ClassModData = {
    key: 'warrior_of_sunlight1',
    name: `Sunlight Warrior`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.3,
        move: 0.3,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 51, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1122828159'
        }
    ],
    skills: [
        {
            name: `Rightful Thrust`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3fedc538d560a6a9.jpg',
        },
        {
            name: `Parry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cd9636ae948a77c5.jpg',
        },
        {
            name: `Sunlight Spear`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4e26188997c6001e.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Way of White`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f65216e970880ddf.jpg',
        },
        {
            name: `Dodge Roll`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/81f1f4ccaeb00152.jpg',
        },
        {
            name: `Praise the Sun!`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2b4f99dcf7bbe45a.jpg',
        },
        {
            name: `Emit Force`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/5b8319e7f9badc3c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ae0ecc83a51b16dd.jpg',
            'img/21f6371471ed8a47.jpg',
            'img/0720200186521e10.jpg',
            'img/062c38798d32e762.jpg',
            'img/827575c05e9e789f.jpg',
        ],
        weapon: [
            'img/24d5510650db83bb.jpg',
            'img/9c4a73e76db52235.jpg',
            'img/65498e934fed0780.jpg',
            'img/e591265ae3b27f32.jpg',
            'img/60a3a8c6aa582687.jpg',
        ],
    },
    portrait: 'img/39fcc425d5c4bca4.jpg',
}
