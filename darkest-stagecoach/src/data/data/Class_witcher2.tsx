// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_witcher2: ClassModData = {
    key: 'witcher2',
    name: `Witcher`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.8,
        bleed: 0.3,
        disease: 3,
        move: 0.4,
        debuff: 0.6,
        deathBlow: 0.75,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 9 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 10 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 11 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 12 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=967618008'
        }
    ],
    skills: [
        {
            name: `Style`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/433be7ab825ba958.jpg',
        },
        {
            name: `Steel Sword`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/fe0ca94fc40e6a0d.jpg',
        },
        {
            name: `Silver Sword`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/82aba4354172dba4.jpg',
        },
        {
            name: `Potion`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/f59bb8335ad4de8d.jpg',
        },
        {
            name: `Aard`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b076fdd8d077422e.jpg',
        },
        {
            name: `Axii`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/558f3beaf6cc439b.jpg',
        },
        {
            name: `Quen`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/bb29d42df48c6332.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6033933655aad70d.jpg',
            'img/6e5f6f4e708d34cb.jpg',
            'img/e474b18221753826.jpg',
            'img/fe4cbe29732ff9c6.jpg',
            'img/5df0648f13a03a9e.jpg',
        ],
        weapon: [
            'img/8351423686df7ddc.jpg',
            'img/405e08d971236215.jpg',
            'img/71970705008d011f.jpg',
            'img/d5220dd116d2818d.jpg',
            'img/a4c1ef554ff5eadd.jpg',
        ],
    },
    portrait: 'img/172af7430f510855.jpg',
}
