// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_assaulter1: ClassModData = {
    key: 'assaulter1',
    name: `Assaulter`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2738095359'
        }
    ],
    skills: [
        {
            name: `Triple Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f4ca403513a2e447.jpg',
        },
        {
            name: `Precise Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/565c398ee25fe9c6.jpg',
        },
        {
            name: `Sperrfeuer`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/65df556ece88ae74.jpg',
        },
        {
            name: `Blitzkrieg`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e4173100936e1b84.jpg',
        },
        {
            name: `Angriffsziel`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/69cb0c820a117944.jpg',
        },
        {
            name: `Nose Breaker`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ebf128e5dab295e9.jpg',
        },
        {
            name: `Smoke Bomb`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ba0e8d58b632f436.jpg',
        },
    ],
    equip: {
        armour: [
            'img/1e59d1e968b60d52.jpg',
            'img/95b73a4f5b1641d5.jpg',
            'img/ec8dcf1ae490be05.jpg',
            'img/56440b4150c5b540.jpg',
            'img/acdaa780ae03ffbc.jpg',
        ],
        weapon: [
            'img/775251103373d766.jpg',
            'img/ffc9a440aebd3583.jpg',
            'img/3dd3115dc8c913e6.jpg',
            'img/eb14daed406780cb.jpg',
            'img/c19d1ca6bd8030a4.jpg',
        ],
    },
    portrait: 'img/0b6299bbe875d745.jpg',
}
