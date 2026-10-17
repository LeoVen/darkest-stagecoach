// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_templar1: ClassModData = {
    key: 'templar1',
    name: `Templar`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 55, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2414180617'
        }
    ],
    skills: [
        {
            name: `Righteous Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/81184f111c18e43a.jpg',
        },
        {
            name: `Reckoning`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0dad331a7421a5eb.jpg',
        },
        {
            name: `Lay on Hands`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f4003a5d478fd4b8.jpg',
        },
        {
            name: `Martyr's Blessing`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/7bd570fe177e0ae5.jpg',
        },
        {
            name: `Via Dolorosa`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a31f6006064b1d74.jpg',
        },
        {
            name: `Guiding Star`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e86e465fc0648391.jpg',
        },
        {
            name: `Retribution`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/4402e2f8eac54886.jpg',
        },
    ],
    equip: {
        armour: [
            'img/200355585d817ff1.jpg',
            'img/5a1d6a5f8801232a.jpg',
            'img/9351105b9085fffb.jpg',
            'img/1e541fb678b090dd.jpg',
            'img/0279bed936767ed6.jpg',
        ],
        weapon: [
            'img/0347f2bac66790ea.jpg',
            'img/b9a271b9f1b5bee5.jpg',
            'img/6d361b38fc87d92f.jpg',
            'img/d3885152c9e9180e.jpg',
            'img/097c685ad7f7dc19.jpg',
        ],
    },
    portrait: 'img/8a7a8c1a65f97543.jpg',
}
