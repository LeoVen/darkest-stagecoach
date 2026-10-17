// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_blackguard1: ClassModData = {
    key: 'blackguard1',
    name: `Guarda Negro`,
    originalHero: false,
    religious: true,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.1,
        bleed: 2,
        disease: 0.6,
        move: 0.2,
        debuff: 0.1,
        deathBlow: 0.5,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 31, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 2 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 3 },
            { accuracy: 0, damage: [8.0, 14.0], crit: 0.09, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2168009997'
        }
    ],
    skills: [
        {
            name: `Pulverizar`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/5c621c5309aa6003.jpg',
        },
        {
            name: `Roubo de Vida`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/5550b1ab097651d6.jpg',
        },
        {
            name: `Renunciar`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1b78e1b186ec2687.jpg',
        },
        {
            name: `Ofuscar`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/78d6b1f40da8949b.jpg',
        },
        {
            name: `Aperto da Morte`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/de49fca17a36ef8e.jpg',
        },
        {
            name: `Chamado da Sepultura`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8314001e179fb88e.jpg',
        },
        {
            name: `Inexorável`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7c5bbda817c80c43.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4285c1e231f01b5d.jpg',
            'img/7e062c86f005a77c.jpg',
            'img/697f7bec34b18604.jpg',
            'img/22182e2012f00ee0.jpg',
            'img/b3f350fca22cef52.jpg',
        ],
        weapon: [
            'img/12e16300f8e8587a.jpg',
            'img/5151d3b3fbf95767.jpg',
            'img/1feed01e5a8624b4.jpg',
            'img/3f77e9e834f04999.jpg',
            'img/2955237468f60d22.jpg',
        ],
    },
    portrait: 'img/c2cc1c25b9571da2.jpg',
}
