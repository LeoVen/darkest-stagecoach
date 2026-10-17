// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_jester1: ClassModData = {
    key: 'jester1',
    name: `Jester`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 19, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Dirk Stab`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/1964c353acc3594f.jpg',
        },
        {
            name: `Harvest`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: `~`,
            },
            image: 'img/c805fb3729a1f401.jpg',
        },
        {
            name: `Finale`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/9981665756e327ee.jpg',
        },
        {
            name: `Solo`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/770886b43dcf7008.jpg',
        },
        {
            name: `Slice Off`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,false],
                mods: ``,
            },
            image: 'img/e0558da31252be07.jpg',
        },
        {
            name: `Battle Ballad`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/57e35b91b650fd76.jpg',
        },
        {
            name: `Inspiring Tune`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4fd2111df7fc1aeb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5d120ccfeff7e20c.jpg',
            'img/6feb14232e737801.jpg',
            'img/502bfdb9eabfbb61.jpg',
            'img/47a28f6aa6cf02ab.jpg',
            'img/a95d82ff640fb854.jpg',
        ],
        weapon: [
            'img/488842eaad5215c9.jpg',
            'img/29109e918c9f2316.jpg',
            'img/15fc992817d0f06e.jpg',
            'img/b6d907e63f638209.jpg',
            'img/7ab37bfae1ada514.jpg',
        ],
    },
    portrait: 'img/a84d4e5e2cbaccec.jpg',
}
