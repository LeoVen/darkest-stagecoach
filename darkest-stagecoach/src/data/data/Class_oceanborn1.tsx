// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_oceanborn1: ClassModData = {
    key: 'oceanborn1',
    name: `Oceanborn`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.5,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.73,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 5.0], crit: 0.01, speed: 6 },
            { accuracy: 0, damage: [4.0, 6.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 7 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.05, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2205151952'
        }
    ],
    skills: [
        {
            name: `Embrace The Sea`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/631b54c54b7ec132.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Salve and Cloth`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/811b06cf07e9a7c7.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Spike The Rum`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/bcc13dcf683480c7.jpg',
        },
        {
            name: `Strike with Sound`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/67cd63c675f91b06.jpg',
        },
        {
            name: `Tidal Slam`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/55819222d64d18a4.jpg',
        },
        {
            name: `Threatening Pose`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d77a8f8681a552a1.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Shielding Shell`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/c4f840b8e575a8fb.jpg',
        },
    ],
    equip: {
        armour: [
            'img/6f1bbdfce91803ff.jpg',
            'img/99fdd97be67bf6c8.jpg',
            'img/c820cd38f5053b09.jpg',
            'img/146f0a489da33567.jpg',
            'img/524c2ae2cc9deab0.jpg',
        ],
        weapon: [
            'img/1c4e0116649ff582.jpg',
            'img/24d306808469f5a0.jpg',
            'img/9fb165da357cd9ac.jpg',
            'img/cc5174fa5c9b7b01.jpg',
            'img/5f756c22348aba95.jpg',
        ],
    },
    portrait: 'img/5f7b49b673e0642c.jpg',
}
