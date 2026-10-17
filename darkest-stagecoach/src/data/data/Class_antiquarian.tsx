// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_antiquarian: ClassModData = {
    key: 'antiquarian',
    name: `Antiquarian`,
    originalHero: true,
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
            { dodge: 0.1, prot: 0, hp: 17, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 29, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.01, speed: 5 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 7 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Nervous Stab`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/53a017f56fd2934f.jpg',
        },
        {
            name: `Festering Vapours`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ca12d652ccf49768.jpg',
        },
        {
            name: `Get Down!`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8b4c0ca86f45a069.jpg',
        },
        {
            name: `Flashpowder`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/0b24d0c4fd94ce10.jpg',
        },
        {
            name: `Fortifying Vapours`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8e8df7b78d48285e.jpg',
        },
        {
            name: `Invigorating Vapours`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/1745328b5b97256d.jpg',
        },
        {
            name: `Protect Me`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5b05165de00efe66.jpg',
        },
    ],
    equip: {
        armour: [
            'img/367b483cbefeb014.jpg',
            'img/bd9d220326b49fc3.jpg',
            'img/ade876ac37985379.jpg',
            'img/3855a26cff0a7778.jpg',
            'img/72848565536853b6.jpg',
        ],
        weapon: [
            'img/02f0f44747b3a948.jpg',
            'img/34d342fc97e1db62.jpg',
            'img/4b99260020e3f3d6.jpg',
            'img/13439f9c2384473c.jpg',
            'img/85f44f23a4601a8a.jpg',
        ],
    },
    portrait: 'img/016f2620725956e7.jpg',
}
