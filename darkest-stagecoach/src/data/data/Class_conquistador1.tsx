// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_conquistador1: ClassModData = {
    key: 'conquistador1',
    name: `Conquistador`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.4,
        disease: 0.3,
        move: 0.7,
        debuff: 0.3,
        deathBlow: 0.7,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.05, hp: 24, speed: 0 },
            { dodge: 0.03, prot: 0.07, hp: 29, speed: 0 },
            { dodge: 0.06, prot: 0.09, hp: 34, speed: 0 },
            { dodge: 0.09, prot: 0.11, hp: 39, speed: 0 },
            { dodge: 0.12, prot: 0.13, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1114545692'
        }
    ],
    skills: [
        {
            name: `Corte Doblado`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/fc4ac9cf10c27054.jpg',
        },
        {
            name: `Embate`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/882d7b722cdba9bf.jpg',
        },
        {
            name: `Blandir Lanza`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `?`,
            },
            image: 'img/4a8b15c76bf6f798.jpg',
        },
        {
            name: `Marcha Penetrante`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/909fe5c6d1ce0438.jpg',
        },
        {
            name: `Fuego!`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/2dd484ed79fd5209.jpg',
        },
        {
            name: `Granada`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/db08cabe3efd80bd.jpg',
        },
        {
            name: `Formación en Tercio`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/cd3d0a8a7f230891.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0f7cc019e8d40d4b.jpg',
            'img/5517365734ecbcee.jpg',
            'img/ee9c1595764d348f.jpg',
            'img/bfbea74202d3e28e.jpg',
            'img/856bc0a8e100e81b.jpg',
        ],
        weapon: [
            'img/bd1554f2652479f4.jpg',
            'img/ce73a8ea0ba4cbfb.jpg',
            'img/f1cf85645fc23869.jpg',
            'img/6eeed5b2bb17c482.jpg',
            'img/c5f2589a30d6f2e8.jpg',
        ],
    },
    portrait: 'img/5982fb1e26624ee7.jpg',
}
