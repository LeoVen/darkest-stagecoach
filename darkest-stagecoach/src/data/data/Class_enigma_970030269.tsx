// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_enigma_970030269: ClassModData = {
    key: 'enigma_970030269',
    name: `Enigma`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.8,
        blight: 0.1,
        bleed: 0.5,
        disease: 0.5,
        move: 0.5,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0.4, hp: 20, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 22, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 24, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 26, speed: 0 },
            { dodge: 0, prot: 0.4, hp: 28, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [2.0, 6.0], crit: 0.03, speed: 0 },
            { accuracy: 0, damage: [3.0, 7.0], crit: 0.035, speed: 0 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 1 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.045, speed: 1 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 2 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=970030269'
        }
    ],
    skills: [
        {
            name: `Mystic Bolt`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ff5778a9ced28745.jpg',
        },
        {
            name: `Illusionary Slash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/dab58ace22cedca6.jpg',
        },
        {
            name: `Phantasmal Shot`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/16ebe2c6e18afaa6.jpg',
        },
        {
            name: `Delusional Exertion`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/fa0a42fb22f7523b.jpg',
        },
        {
            name: `Unusual Dynamism`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/aa05f37342f71e12.jpg',
        },
        {
            name: `Arcane Fervor`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/9c546b4fa21ce716.jpg',
        },
        {
            name: `Esoteric Barrier`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/886b34d326f4c8db.jpg',
        },
    ],
    equip: {
        armour: [
            'img/53f61bcbca445c22.jpg',
            'img/e6c4dc251a9ac0b2.jpg',
            'img/d018769c24a0d2f8.jpg',
            'img/304ee0e8abfe2153.jpg',
            'img/9524b352619c09d3.jpg',
        ],
        weapon: [
            'img/27629c5b012b460d.jpg',
            'img/4d4abdc66ea1a263.jpg',
            'img/3b7d6019772328c0.jpg',
            'img/cc0d933b24095b4a.jpg',
            'img/351dc6d53a695519.jpg',
        ],
    },
    portrait: 'img/b9c7abd853e44d5d.jpg',
}
