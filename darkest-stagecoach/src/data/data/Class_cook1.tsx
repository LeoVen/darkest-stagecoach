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
            image: 'img/6e59c7930cd06043.jpg',
        },
        {
            name: `Corte de açougueira`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/64936f1f3d939757.jpg',
        },
        {
            name: `Escolher pedaço`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/08c49700d301d8b1.jpg',
        },
        {
            name: `Isca venenosa`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/af029095c04d511f.jpg',
        },
        {
            name: `Condimento Oculto`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/67b1b37e0f23a80a.jpg',
        },
        {
            name: `Sobremesa`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e587eb7bd4874e82.jpg',
        },
        {
            name: `Ajude a cozinheira`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d8e6c36f5da00e12.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8820399c77cdffee.jpg',
            'img/4705c33c05d3c15b.jpg',
            'img/6a120e7527ba096a.jpg',
            'img/f8da03b349669053.jpg',
            'img/213e637bd7ada442.jpg',
        ],
        weapon: [
            'img/37455f2fcddc2236.jpg',
            'img/7bb45af3824ad586.jpg',
            'img/c5a8f15766647ca2.jpg',
            'img/38da3693865d1d03.jpg',
            'img/b92c2b55475a0c6f.jpg',
        ],
    },
    portrait: 'img/664eeee8b82de8a4.jpg',
}
