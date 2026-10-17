// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_steel_driver1: ClassModData = {
    key: 'steel_driver1',
    name: `Steel Driver`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.2,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.02, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.07, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 51, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [5.0, 13.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 15.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [7.0, 17.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [8.0, 19.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1999848432'
        }
    ],
    skills: [
        {
            name: `Hammer Time`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a5889d16f9104ce6.jpg',
        },
        {
            name: `Steamroller`,
            launch: [false,false,true,true],
            target: {
                targets: [true,false,false,false],
                mods: ``,
            },
            image: 'img/5e9e25a1347a2864.jpg',
        },
        {
            name: `Strike the Earth`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/3efac3597d62c1aa.jpg',
        },
        {
            name: `Bring the Thunder`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2d78ce8d90788574.jpg',
        },
        {
            name: `Reconstruction `,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9f70628ee2b2b50f.jpg',
        },
        {
            name: `Crystalline Conductor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/44d1b43fbb278eb6.jpg',
        },
        {
            name: `Crystal Shrapnel`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/69f62e001d590fce.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c66fb37d6cad8c23.jpg',
            'img/2919d7f3f3420f83.jpg',
            'img/eb4756b909107b48.jpg',
            'img/f88443f6263cf14c.jpg',
            'img/1a3fda9b55196ec2.jpg',
        ],
        weapon: [
            'img/2c81e03298daedbd.jpg',
            'img/c5fa923ab3eaf103.jpg',
            'img/3c0b3aef2d768103.jpg',
            'img/e749613bbfd3549f.jpg',
            'img/1965344497975d26.jpg',
        ],
    },
    portrait: 'img/7d0e286462e18e06.jpg',
}
