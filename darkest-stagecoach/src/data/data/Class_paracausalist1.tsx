// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_paracausalist1: ClassModData = {
    key: 'paracausalist1',
    name: `Paracausalist`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.4,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 6 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1960445714'
        }
    ],
    skills: [
        {
            name: `Nucleo-Protonic Ray`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/80062414f59ce406.jpg',
        },
        {
            name: `Scanner Scope`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/3fea50bf751c15f1.jpg',
        },
        {
            name: `Short Controlled Burst`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/bdaeafa2b0acb3fd.jpg',
        },
        {
            name: `Electroplasmic Overcharge`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5e0069133b2493c1.jpg',
        },
        {
            name: `Attractor Tether`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/efa1fd75d8d44ea0.jpg',
        },
        {
            name: `Photonic Flash Flare`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/19a2f97a82dd29ce.jpg',
        },
        {
            name: `The Goligher Cage`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/043e183ee395b086.jpg',
        },
    ],
    equip: {
        armour: [
            'img/ee27c97143db62b1.jpg',
            'img/30a9ed177d079351.jpg',
            'img/9d7840f8a30ac5b2.jpg',
            'img/497c0a7cc16431ca.jpg',
            'img/e57a9ed0eb5b5f01.jpg',
        ],
        weapon: [
            'img/7a17da661d999c3a.jpg',
            'img/28b1edc0cfd1e047.jpg',
            'img/aa7f3ed3f61f1f54.jpg',
            'img/8e3d647c70ca9469.jpg',
            'img/78fced1f24bb97b3.jpg',
        ],
    },
    portrait: 'img/a66e966bca5e7534.jpg',
}
