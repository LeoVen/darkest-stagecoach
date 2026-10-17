// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_harbinger1: ClassModData = {
    key: 'harbinger1',
    name: `Harbinger`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.4,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.4,
        move: 0.4,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 2 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.06, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1138503289'
        }
    ],
    skills: [
        {
            name: `Rime Strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/bf5a6db99198c2f7.jpg',
        },
        {
            name: `Glacial Charge`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/0aa3dfaa1fb36e1b.jpg',
        },
        {
            name: `Grimbane`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/caf20c0321b477a9.jpg',
        },
        {
            name: `Overpower`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/dd6513ac7735dee6.jpg',
        },
        {
            name: `Shatter`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8d4248f528f4c36a.jpg',
        },
        {
            name: `Tempest`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d056be297843164b.jpg',
        },
        {
            name: `Mercurial Winter`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/c6362502c162311e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/9875cea70dbad2b2.jpg',
            'img/ef51f1a5e5871aa2.jpg',
            'img/cb03e9cb5ecbe3b2.jpg',
            'img/0777b1cce9d759b2.jpg',
            'img/4c24693829131f26.jpg',
        ],
        weapon: [
            'img/2471676fb4181613.jpg',
            'img/3d81cd2b803dd4c9.jpg',
            'img/02b75d72942c1694.jpg',
            'img/30188d3b334f8ad6.jpg',
            'img/ee35a3756f3a63aa.jpg',
        ],
    },
    portrait: 'img/198dc76a7534682b.jpg',
}
