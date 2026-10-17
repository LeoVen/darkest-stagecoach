// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wraith_ms1: ClassModData = {
    key: 'wraith_ms1',
    name: `Wraith`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 1 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 1 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 2 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.1, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1697037179'
        }
    ],
    skills: [
        {
            name: `Reap`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fca3eba567ec2a82.jpg',
        },
        {
            name: `Death Sentence`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9e2cddb91b3db0c9.jpg',
        },
        {
            name: `Incarcerate`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/32ef76b257eb6cfa.jpg',
        },
        {
            name: `Sap`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ee66fa6ef7a664e2.jpg',
        },
        {
            name: `Chain Gang`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/096286466ab34a56.jpg',
        },
        {
            name: `Guillotine`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/d3ceaa24aaf91a63.jpg',
        },
        {
            name: `Hook and Slice`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d6a45b028bb0403e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dae0af3ecc0e977f.jpg',
            'img/f4ad56a2f7fdc69e.jpg',
            'img/63039d8fb9a2c195.jpg',
            'img/70ddaf08d85e809d.jpg',
            'img/47f4d2ed37def7b9.jpg',
        ],
        weapon: [
            'img/03d52ee56410a613.jpg',
            'img/d03ee51f02a13c11.jpg',
            'img/f3f4f7217b757963.jpg',
            'img/e35b0e3be28ca6f5.jpg',
            'img/bb66fba299c5387f.jpg',
        ],
    },
    portrait: 'img/876a6518101c4278.jpg',
}
