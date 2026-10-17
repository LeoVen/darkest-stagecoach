// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_soothsayer_1834134425: ClassModData = {
    key: 'soothsayer_1834134425',
    name: `Soothsayer`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1834134425'
        }
    ],
    skills: [
        {
            name: `Dream Eater`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/716ce9e2370139a5.jpg',
        },
        {
            name: `Shattered Psyche`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/696529376d9e3a75.jpg',
        },
        {
            name: `Psyshock`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/7ebfbfc2851f9f65.jpg',
        },
        {
            name: `Calm Mind`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/d201ac99869d2307.jpg',
        },
        {
            name: `Miracle Eye`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/ee840cf449ff0624.jpg',
        },
        {
            name: `Future Sight`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2f64fd49d30cab59.jpg',
        },
        {
            name: `Confusion`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ed21179daedecaeb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b545824eb10eab17.jpg',
            'img/5f7c6bcb686be2b5.jpg',
            'img/a36e978e38b7be11.jpg',
            'img/4e2142c676e26bf6.jpg',
            'img/70bfb95d4ffd8cbd.jpg',
        ],
        weapon: [
            'img/fc7888d11504ecda.jpg',
            'img/e8cc2d3f716fe7b1.jpg',
            'img/6a2f11b8b08aad05.jpg',
            'img/0783f197ac746a5b.jpg',
            'img/096040b9b8493548.jpg',
        ],
    },
    portrait: 'img/804d494cd7b4e31e.jpg',
}
