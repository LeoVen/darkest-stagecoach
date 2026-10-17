// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_acolyte_971313538: ClassModData = {
    key: 'acolyte_971313538',
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
            image: 'img/20d1a90deb803d0c.jpg',
        },
        {
            name: `Primordial Bite`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/57e132645c79eab6.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Regenerate`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/8baab0553943025e.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Concentrated Regeneration`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0bfe64d59a71d502.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Vengeful Covenant`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/01209cbcd9080c61.jpg',
        },
        {
            name: `Focused Ray`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/3c19695fcc3b5353.jpg',
        },
        {
            name: `Sun Mirage`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c5bcac02bdf10561.jpg',
        },
    ],
    equip: {
        armour: [
            'img/5fa5f5436d981d79.jpg',
            'img/1d53d849f1dfdb25.jpg',
            'img/2872d4bb6d31e280.jpg',
            'img/9140a2337451e7f8.jpg',
            'img/7586c6321c56620a.jpg',
        ],
        weapon: [
            'img/a753f0eebb31d2f4.jpg',
            'img/c80f5a9aa0f35d63.jpg',
            'img/2469cdb2e1c6d6e4.jpg',
            'img/847da30bea90a929.jpg',
            'img/3ead1478d057ebb4.jpg',
        ],
    },
    portrait: 'img/50be0f0182a8bc53.jpg',
}
