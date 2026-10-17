// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_forlorn_2822357458: ClassModData = {
    key: 'forlorn_2822357458',
    name: `Forlorn`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.5,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 12.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2822357458'
        }
    ],
    skills: [
        {
            name: `Whiplash`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f4f8f32335720ca4.jpg',
        },
        {
            name: `Hunter's Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/33752f147daa149d.jpg',
        },
        {
            name: `Entangle`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/dbb590adf2ffc98e.jpg',
        },
        {
            name: `Private Rations`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/ce2bac14f0d673f3.jpg',
        },
        {
            name: `Bloodied Cross`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/30a71a93027fa44a.jpg',
        },
        {
            name: `Expunge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/1a054153b9ab3563.jpg',
        },
        {
            name: `Retreating Dash`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c5167562de976792.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dc2fc1b4f426e164.jpg',
            'img/0be90949dd02a6af.jpg',
            'img/6a402a296b993113.jpg',
            'img/5da18fb79226d9e3.jpg',
            'img/292fbed9bc060fc1.jpg',
        ],
        weapon: [
            'img/93d0b37831bd01a6.jpg',
            'img/2658344adf3774a8.jpg',
            'img/bd02f3c29e65886d.jpg',
            'img/0116238f9ef200b6.jpg',
            'img/aec7d3af1e461fbe.jpg',
        ],
    },
    portrait: 'img/9f76cae7483d881c.jpg',
}
