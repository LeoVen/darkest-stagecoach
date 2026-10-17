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
            image: 'img/bdf1dd6a70e3da6a.jpg',
        },
        {
            name: `Exterminate Them`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0b010e1fc2189ea3.jpg',
        },
        {
            name: `Stomp Out`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e7765d82078466d5.jpg',
        },
        {
            name: `Collar and Contain`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4399c06f9cbc36e0.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Sanitize`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/84bfeebbc07e83d4.jpg',
        },
        {
            name: `Trap`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/870e8c67688d1806.jpg',
        },
        {
            name: `Apprehend`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8f6ce5611451a70c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/fa004cde41a8a41f.jpg',
            'img/f6a5a10db317ba65.jpg',
            'img/be3c3eca80b5e702.jpg',
            'img/3fb6451cc4493f86.jpg',
            'img/8342a1d44c5da51a.jpg',
        ],
        weapon: [
            'img/c6c5a425cb74c23a.jpg',
            'img/5ee15631cd3581be.jpg',
            'img/700a8a04ca3c861b.jpg',
            'img/4c44610a7313294d.jpg',
            'img/31c18025a7ee7f40.jpg',
        ],
    },
    portrait: 'img/0a297d23793685c8.jpg',
}
