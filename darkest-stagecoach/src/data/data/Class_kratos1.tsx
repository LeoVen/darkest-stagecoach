// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_kratos1: ClassModData = {
    key: 'kratos1',
    name: `Guerreiro Cinzento`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.3,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 46, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1946681830'
        }
    ],
    skills: [
        {
            name: `Soco Flamejante`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/a43ccc18959950f3.jpg',
        },
        {
            name: `Mordida do Leviathan`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e6f036bac394d8b0.jpg',
        },
        {
            name: `Fúria Espartana`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/cf60422132b0a2e0.jpg',
        },
        {
            name: `Vôo do Leviathan`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/52704ece737ad5b2.jpg',
        },
        {
            name: `Golpe do Guardião`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/edf64ac7c84f3007.jpg',
        },
        {
            name: ` ¤ ¤¦¤¦¤
Desejo Agonizante`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `@~`,
            },
            image: 'img/c9e548fcd310f371.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Me Cure!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ed6d904f2a660b20.jpg',
        },
    ],
    equip: {
        armour: [
            'img/183ff6ed7a2f8d6b.jpg',
            'img/d22c56cc4dc43c6d.jpg',
            'img/9abd403c473daeb4.jpg',
            'img/365ad680b70813a5.jpg',
            'img/1f388588617d4770.jpg',
        ],
        weapon: [
            'img/afc3c40d45487b0f.jpg',
            'img/eba6dc8a96e5f286.jpg',
            'img/a29bdc03827497a0.jpg',
            'img/b9288d015bec4269.jpg',
            'img/6c9554b2410b3a2a.jpg',
        ],
    },
    portrait: 'img/0f956d23a5e80d88.jpg',
}
