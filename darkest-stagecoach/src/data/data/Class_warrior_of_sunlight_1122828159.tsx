// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_warrior_of_sunlight_1122828159: ClassModData = {
    key: 'warrior_of_sunlight_1122828159',
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
            image: 'img/22e8bdf35395194e.jpg',
        },
        {
            name: `Parry`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/61e3fed67f63a925.jpg',
        },
        {
            name: `Sunlight Spear`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/11d6fdf9cace82e4.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Way of White`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/48387522e2ad9f75.jpg',
        },
        {
            name: `Dodge Roll`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/299d98b2267c0227.jpg',
        },
        {
            name: `Praise the Sun!`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2385c5f6bb032739.jpg',
        },
        {
            name: `Emit Force`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/780282212d559c76.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c77b191d6c5d7918.jpg',
            'img/576acdd259ae0f75.jpg',
            'img/13b345316d528766.jpg',
            'img/d56022b5b2a5428a.jpg',
            'img/5b28a9a951af0537.jpg',
        ],
        weapon: [
            'img/a3dcae66a477b79f.jpg',
            'img/8640af278e9ba246.jpg',
            'img/a3db57965b0a23fe.jpg',
            'img/b1e5247e07f80c0c.jpg',
            'img/7b6af409ec5ed41c.jpg',
        ],
    },
    portrait: 'img/53ebfb327721c178.jpg',
}
