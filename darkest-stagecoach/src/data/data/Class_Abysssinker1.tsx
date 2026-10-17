// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_Abysssinker1: ClassModData = {
    key: 'Abysssinker1',
    name: `Abysssinker`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 1.4,
        disease: 0.5,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 28, speed: 1 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 1 },
            { dodge: 0.24, prot: 0, hp: 36, speed: 1 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 10.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [5.0, 12.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2306606465'
        }
    ],
    skills: [
        {
            name: `Machete of the Curse`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/9797690f8f320b24.jpg',
        },
        {
            name: `Murloc Hook`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/cd8ff4d206a4fa1a.jpg',
        },
        {
            name: `Illuminating the Abyss`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/825a3f50710aac70.jpg',
        },
        {
            name: `Past Memories`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/88b7cf3cf7e22c7d.jpg',
        },
        {
            name: `The call of the Deep`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,false,true],
                mods: `~`,
            },
            image: 'img/211fbd5f2cde8729.jpg',
        },
        {
            name: `Soul Harvest`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/15aedae87e17671c.jpg',
        },
        {
            name: `Drowning Together`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/915d5dc443a66322.jpg',
        },
    ],
    equip: {
        armour: [
            'img/3f7c2b79d6b93c7d.jpg',
            'img/e824b489cb349f1e.jpg',
            'img/a1accd61c8bc7ca8.jpg',
            'img/9752f706d4142089.jpg',
            'img/83794bce35504e54.jpg',
        ],
        weapon: [
            'img/2d36eaf604387775.jpg',
            'img/26bdb6b53ab1d587.jpg',
            'img/353a87f269095ff2.jpg',
            'img/f1a05916da4b72cb.jpg',
            'img/698d096d1de52127.jpg',
        ],
    },
    portrait: 'img/f75837325ca27749.jpg',
}
