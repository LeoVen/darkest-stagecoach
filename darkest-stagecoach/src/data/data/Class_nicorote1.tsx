// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_nicorote1: ClassModData = {
    key: 'nicorote1',
    name: `Nicorote`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.1,
        blight: 1.5,
        bleed: 1.5,
        disease: 1,
        move: 0.1,
        debuff: 0.1,
        deathBlow: 0.7,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 48, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 52, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [1.0, 2.0], crit: 0, speed: 3 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.2, speed: 4 },
            { accuracy: 0, damage: [1.0, 2.0], crit: 0.4, speed: 5 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.4, speed: 5 },
            { accuracy: 0, damage: [2.0, 3.0], crit: 0.7, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2271536747'
        }
    ],
    skills: [
        {
            name: `Alarm light`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1434fb348b09e093.jpg',
        },
        {
            name: `Animal teeth blade`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d48ed0300c4d7da0.jpg',
        },
        {
            name: `Viper venom`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/841d31415a291b1e.jpg',
        },
        {
            name: `Tentacles plaque`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e95669a2c8bc3026.jpg',
        },
        {
            name: `Acid etching poison`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/748aced0fe8a79dc.jpg',
        },
        {
            name: `Tequila`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/927131e6a13eaea9.jpg',
        },
        {
            name: `BOOM!THEM!ALL!`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/3d4c2786755172c1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/27639704f086444e.jpg',
            'img/7c0918453134aab2.jpg',
            'img/10e47c4a97c3e8c0.jpg',
            'img/1501ff41436fa7d9.jpg',
            'img/a844d8904b190b45.jpg',
        ],
        weapon: [
            'img/7c12d3139c7d671f.jpg',
            'img/dd1d7901a7c0010b.jpg',
            'img/6581d465f15514c5.jpg',
            'img/b244a38f01361952.jpg',
            'img/c8546d632ff8ad00.jpg',
        ],
    },
    portrait: 'img/685cf5a2a8bea56c.jpg',
}
