// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_arsonist_2255822193: ClassModData = {
    key: 'arsonist_2255822193',
    name: `Arsonist`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.3,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.08, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2255822193'
        }
    ],
    skills: [
        {
            name: `Slashing Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/85fb68465243bead.jpg',
        },
        {
            name: `Molotov Cocktail`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/eb6439201ab28f5e.jpg',
        },
        {
            name: `Incinerate`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b8336ba1e2f17d3a.jpg',
        },
        {
            name: `Hot-headed!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/b92b567c03be32a9.jpg',
        },
        {
            name: `Smoke Bomb`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/59b264c1e6d733c1.jpg',
        },
        {
            name: `Cleansing Fire`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/91da61589b41f207.jpg',
        },
        {
            name: `Red Hot Poker`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/e67df35f73de3817.jpg',
        },
    ],
    equip: {
        armour: [
            'img/f7f6f486f90992ad.jpg',
            'img/4bef9812d019e1e2.jpg',
            'img/347fc45981d35091.jpg',
            'img/1f813afec8fcc0f8.jpg',
            'img/ec55051baaed2659.jpg',
        ],
        weapon: [
            'img/2c5e542d6e787d37.jpg',
            'img/abacb804e84161a0.jpg',
            'img/3c8c381dedce276c.jpg',
            'img/d355f43f0984bf4f.jpg',
            'img/6e9444c13220daa5.jpg',
        ],
    },
    portrait: 'img/9042db7ecd3fae8d.jpg',
}
