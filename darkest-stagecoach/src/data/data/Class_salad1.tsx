// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_salad1: ClassModData = {
    key: 'salad1',
    name: `Salamander`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.2,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 42, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2204287440'
        }
    ],
    skills: [
        {
            name: `Flame Gout`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/338775f49dac1622.jpg',
        },
        {
            name: `Salamander's Breath`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/5cfefb06739b4e39.jpg',
        },
        {
            name: `Steam Vent`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/dfab6bee5686eda3.jpg',
        },
        {
            name: `Grappling Claw`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,true],
                mods: ``,
            },
            image: 'img/56d6dafb2789d562.jpg',
        },
        {
            name: `Pile Bunker`,
            launch: [true,false,false,false],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/48f5e9b00c06ab77.jpg',
        },
        {
            name: `Lacerate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/3f565c4680a24bd0.jpg',
        },
        {
            name: `Sweep Kick`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/72bd94c1d5457ae5.jpg',
        },
    ],
    equip: {
        armour: [
            'img/47d5421f87e17f0c.jpg',
            'img/71365274c5872787.jpg',
            'img/1e5acb6b940e9916.jpg',
            'img/6aa81756d5239fc2.jpg',
            'img/310e768a765e5974.jpg',
        ],
        weapon: [
            'img/1e9793f2b72ec2e8.jpg',
            'img/3c24c9602605a19d.jpg',
            'img/3f7acb0166db11c2.jpg',
            'img/2c08a57892caaf6f.jpg',
            'img/f0bfe80515f5bd2a.jpg',
        ],
    },
    portrait: 'img/1729e0dad3beb528.jpg',
}
