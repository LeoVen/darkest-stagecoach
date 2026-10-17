// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_shinobi1: ClassModData = {
    key: 'shinobi1',
    name: `Shinobi`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.3,
        blight: 0.3,
        bleed: 0.2,
        disease: 0.3,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.15, prot: 0, hp: 16, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 32, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.09, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.1, speed: 9 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.11, speed: 9 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.12, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2579320730'
        }
    ],
    skills: [
        {
            name: `Ascending Wind`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ce76644721157eb4.jpg',
        },
        {
            name: `Backbiter`,
            launch: [false,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/567e4f9e0a2b8e1a.jpg',
        },
        {
            name: `Serpent's Coil`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/dc8f434e35932f7f.jpg',
        },
        {
            name: `Piercing Tendrils`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/af856f93ded233fa.jpg',
        },
        {
            name: `Withering Hail`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/2d1f665464ec2023.jpg',
        },
        {
            name: `Storm's Descent`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/51ef63e70fe456f7.jpg',
        },
        {
            name: `Dusk Veil`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/398f018664d62e7b.jpg',
        },
    ],
    equip: {
        armour: [
            'img/18d207132cd70544.jpg',
            'img/22f4ee8882aa6558.jpg',
            'img/4234ab444e39cd9b.jpg',
            'img/d2a621fdef228d7b.jpg',
            'img/49698eb7cc0d1c56.jpg',
        ],
        weapon: [
            'img/22583612f6d996a5.jpg',
            'img/fff9ca92dc3b0fed.jpg',
            'img/419e670245af0cc2.jpg',
            'img/acf8f0eab3605ed2.jpg',
            'img/744c242a3a3763d8.jpg',
        ],
    },
    portrait: 'img/71d503a3ee1da91a.jpg',
}
