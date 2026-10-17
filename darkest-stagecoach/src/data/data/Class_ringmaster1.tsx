// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ringmaster1: ClassModData = {
    key: 'ringmaster1',
    name: `Mestre de Cerimônia`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.75,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2332262050'
        }
    ],
    skills: [
        {
            name: `Última Risada`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/457bca4279437951.jpg',
        },
        {
            name: `Desconcertar!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/3ec61c530d20f092.jpg',
        },
        {
            name: `A Grande Entrada`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/714ab9940db19ae0.jpg',
        },
        {
            name: `Ajoelhe-se!`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/9552cd383fe69f55.jpg',
        },
        {
            name: `Favorito da Audiência`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8929d58dfd09da4f.jpg',
        },
        {
            name: `Barry & Leon`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/42cdbc1ea84a6bb8.jpg',
        },
        {
            name: `Fazer Vênia`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/e0777282a1fafc6c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/cbcf7c7bfaf0dc13.jpg',
            'img/a2e480f62a96ce38.jpg',
            'img/ba7b27c526ddeb92.jpg',
            'img/9bb6326d440da4ab.jpg',
            'img/38479f124268e188.jpg',
        ],
        weapon: [
            'img/4fd17092f215a846.jpg',
            'img/b7d11fe962e9cbef.jpg',
            'img/097dc19715248beb.jpg',
            'img/2c80c16015643bbb.jpg',
            'img/f80ddba4d9aa2b4a.jpg',
        ],
    },
    portrait: 'img/40a292547a381dee.jpg',
}
