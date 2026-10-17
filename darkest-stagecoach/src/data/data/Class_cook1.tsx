// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_cook1: ClassModData = {
    key: 'cook1',
    name: `Cozinheira`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 5.0], crit: 0.02, speed: 1 },
            { accuracy: 0, damage: [5.0, 6.0], crit: 0.03, speed: 1 },
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [6.0, 8.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 3 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1978083682'
        }
    ],
    skills: [
        {
            name: `Curso principal`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9762684463a0908b.jpg',
        },
        {
            name: `Corte de açougueira`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/93221c3fb7ea0a9f.jpg',
        },
        {
            name: `Escolher pedaço`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9d4ff0104ff94ea0.jpg',
        },
        {
            name: `Isca venenosa`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/d2e9475cf7c63fab.jpg',
        },
        {
            name: `Condimento Oculto`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/f2f6aba2e3c6b3d8.jpg',
        },
        {
            name: `Sobremesa`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9a998728aff19bd1.jpg',
        },
        {
            name: `Ajude a cozinheira`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4b5248ad496e637f.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2bd3b4ed2ea120c2.jpg',
            'img/99aaf8e1e0857d7e.jpg',
            'img/ea372fbb57a23e19.jpg',
            'img/ec0d41d60fae179c.jpg',
            'img/30823ead1b07ced8.jpg',
        ],
        weapon: [
            'img/86927020b4e3259e.jpg',
            'img/e4b90313af15eb0e.jpg',
            'img/04add33541c6b93d.jpg',
            'img/c7c6d2fd49db9d55.jpg',
            'img/4b29e4bd432f592e.jpg',
        ],
    },
    portrait: 'img/b4e8bb09dadbaf2e.jpg',
}
