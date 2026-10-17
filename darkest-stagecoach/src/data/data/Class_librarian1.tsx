// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_librarian1: ClassModData = {
    key: 'librarian1',
    name: `Librarian`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.12, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.27, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.32, prot: 0, hp: 28, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.09, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1185211485'
        }
    ],
    skills: [
        {
            name: `Beat Back`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/f2aff4e69fa6bd28.jpg',
        },
        {
            name: `Know Thy Enemy`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e3bdab38a3e9b80f.jpg',
        },
        {
            name: `Forbidden Chant`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/97a9feb139132fec.jpg',
        },
        {
            name: `Peace of Mind`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ead45863c82c036d.jpg',
        },
        {
            name: `Improvised Tactics`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/4f4996adc0c49a93.jpg',
        },
        {
            name: `Tonics and Tinctures`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/15b7a0757de942b8.jpg',
        },
        {
            name: `Clingy and Needy`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f07f03957df0fe97.jpg',
        },
    ],
    equip: {
        armour: [
            'img/29f2ed2fa842142c.jpg',
            'img/2a8200cc3548afae.jpg',
            'img/17f66cd37db5aac9.jpg',
            'img/828b2bb84a9ec489.jpg',
            'img/b89497da013cec69.jpg',
        ],
        weapon: [
            'img/4eaf32a8e311cf29.jpg',
            'img/bd2de52e54deac6f.jpg',
            'img/bbb7537c69908531.jpg',
            'img/d439896747c78633.jpg',
            'img/cbda1a826f552098.jpg',
        ],
    },
    portrait: 'img/04096ff6d246c01a.jpg',
}
