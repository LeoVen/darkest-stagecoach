// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ironbuddha1: ClassModData = {
    key: 'ironbuddha1',
    name: `Iron Buddha`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.2,
        bleed: 0.4,
        disease: 0.3,
        move: 0.5,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 47, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 54, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 61, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [10.0, 16.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2195799077'
        }
    ],
    skills: [
        {
            name: `Foreseen Shot`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/084cc005be64ffc7.jpg',
        },
        {
            name: `Petal Volley`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/2fdc65e49a166ff8.jpg',
        },
        {
            name: `Mortal Severance`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ee4c031222f3a4fe.jpg',
        },
        {
            name: `Penitent Blade`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/cf177b30dfd88f92.jpg',
        },
        {
            name: `Winter's Bloom`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ad9d3c176491bc49.jpg',
        },
        {
            name: `Iron Embrace`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c4545034dfb4737c.jpg',
        },
        {
            name: `Blooming Charge`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d4b1cc2145e63f32.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8e50707acdedb429.jpg',
            'img/7e60fb48363b6b32.jpg',
            'img/e5828257fd595de0.jpg',
            'img/94217637141dff67.jpg',
            'img/0423c690968fa174.jpg',
        ],
        weapon: [
            'img/88bc3c4ca8dfd117.jpg',
            'img/fa98bf907ba6aeb1.jpg',
            'img/c50b429347949c8a.jpg',
            'img/f2d4ede141af821f.jpg',
            'img/7677453276510bd8.jpg',
        ],
    },
    portrait: 'img/a99f4bd6cb90ce6b.jpg',
}
