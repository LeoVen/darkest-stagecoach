// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_flagellant1: ClassModData = {
    key: 'flagellant1',
    name: `Flagellant`,
    originalHero: true,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.65,
        disease: 0.4,
        move: 0.5,
        debuff: 0.3,
        deathBlow: 0.73,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 6.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [5.0, 11.0], crit: 0.06, speed: 9 }
        ]
    },
    sources: [],
    skills: [
        {
            name: `Punish`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/438b54ef542ef982.jpg',
        },
        {
            name: `Rain of Sorrows`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/b985f7602fd7fc19.jpg',
        },
        {
            name: `Exsanguinate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/10ed316839f060da.jpg',
        },
        {
            name: `Reclaim`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d5417b240743be38.jpg',
        },
        {
            name: `Redeem`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1d563767352838e1.jpg',
        },
        {
            name: `Endure`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b04fc0eb552ce9f6.jpg',
        },
        {
            name: `Suffer`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/5a0b4086133af2ba.jpg',
        },
    ],
    equip: {
        armour: [
            'img/bffc8d50550b3e5a.jpg',
            'img/78cb043b7d4bae52.jpg',
            'img/29402b92b6e9d897.jpg',
            'img/1c967d575f0d3317.jpg',
            'img/bdbada0e5a1639a9.jpg',
        ],
        weapon: [
            'img/d1cb6d81e8dd5c5b.jpg',
            'img/2f891381757e83df.jpg',
            'img/11dc726c19c785e6.jpg',
            'img/002de71f59f6c1c9.jpg',
            'img/b19569fce89dbe75.jpg',
        ],
    },
    portrait: 'img/3eb2588c4d51d09d.jpg',
}
