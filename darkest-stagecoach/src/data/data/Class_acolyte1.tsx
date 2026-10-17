// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_acolyte1: ClassModData = {
    key: 'acolyte1',
    name: `Acolyte of Sun`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.5,
        blight: 0.4,
        bleed: 0.2,
        disease: 0.4,
        move: 0.2,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 5 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.06, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=971313538'
        }
    ],
    skills: [
        {
            name: `Dark Sun Arrow`,
            launch: [false,false,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/9f5c7f711ccc89fb.jpg',
        },
        {
            name: `Primordial Bite`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5553d8e252a11b50.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Regenerate`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/be07f2df416aef6b.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Concentrated Regeneration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b3f22302085a775d.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Vengeful Covenant`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/9354978101287f62.jpg',
        },
        {
            name: `Focused Ray`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/aa57e0bf037c7f8d.jpg',
        },
        {
            name: `Sun Mirage`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/8ec249a3ca2b01bd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4386a899ddea41da.jpg',
            'img/9930207b76dc8fe4.jpg',
            'img/42a5e10f01ab8a3f.jpg',
            'img/50cf7fb7a28071bf.jpg',
            'img/f9cab9ee33dec4e9.jpg',
        ],
        weapon: [
            'img/bfaa4f9d39c58e21.jpg',
            'img/20ef843a35c0f5e6.jpg',
            'img/bd7c8dd5004a8928.jpg',
            'img/def164cee14865e5.jpg',
            'img/3197b0994974d0e4.jpg',
        ],
    },
    portrait: 'img/b64507ef8a18de7b.jpg',
}
