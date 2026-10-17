// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_entrenched1: ClassModData = {
    key: 'entrenched1',
    name: `Entrenched`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.35,
        bleed: 0.35,
        disease: 0.4,
        move: 0.15,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 36, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.09, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.11, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2865429202'
        }
    ],
    skills: [
        {
            name: `Shovel Bash`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/a7c1f7930313593a.jpg',
        },
        {
            name: `Stand Proud`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/6a570ccdf9c6ceba.jpg',
        },
        {
            name: `Fortifications`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fcbed00d63329ca4.jpg',
        },
        {
            name: `Flare Gun`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/83031f454f177581.jpg',
        },
        {
            name: `Retreating Flare`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/626d2226e39c39fd.jpg',
        },
        {
            name: `Artillery Fire`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/88cb8c695806c05a.jpg',
        },
        {
            name: `Patch Up`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/110d0e59125ce300.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5fc2b6720bf681d1.jpg',
            'img/7590832a31ad291f.jpg',
            'img/ea551c27076a06fe.jpg',
            'img/1a7f0f3add102a74.jpg',
            'img/c116cfabd6f83292.jpg',
        ],
        weapon: [
            'img/04e762347101a9af.jpg',
            'img/30141d6f3cc4b37d.jpg',
            'img/c746303100f81850.jpg',
            'img/3215815eb6766b7b.jpg',
            'img/b6fd8c43e190c4cc.jpg',
        ],
    },
    portrait: 'img/13da36ef7e81463c.jpg',
}
