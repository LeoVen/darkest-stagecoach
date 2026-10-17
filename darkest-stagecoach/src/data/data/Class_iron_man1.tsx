// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_iron_man1: ClassModData = {
    key: 'iron_man1',
    name: `Iron man`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.4,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.02, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.07, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.17, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.22, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.09, speed: 4 },
            { accuracy: 0, damage: [9.0, 14.0], crit: 0.1, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1876423255'
        }
    ],
    skills: [
        {
            name: `Laser Beam`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e3ab87834432ceae.jpg',
        },
        {
            name: `Flamethrower`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/190fadda302ace93.jpg',
        },
        {
            name: `Target Acquired`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/11677441307997fb.jpg',
        },
        {
            name: `Iron Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d0936338b6fa2ae7.jpg',
        },
        {
            name: `Smokebomb`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/1c1d2a6dd8cfafb9.jpg',
        },
        {
            name: `Battlefield Reconstruction`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ed33dd0109f95a2b.jpg',
        },
        {
            name: `No Man Left Behind`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b43aa0b6dacf9700.jpg',
        },
    ],
    equip: {
        armour: [
            'img/7c00a565f6992d65.jpg',
            'img/c0cde64e2289cff0.jpg',
            'img/d17327073c78e1ca.jpg',
            'img/2146c155b942f618.jpg',
            'img/32a8d8f56af4a9f7.jpg',
        ],
        weapon: [
            'img/9d6cd5bd45aeb003.jpg',
            'img/6cbc6b5d95c826e7.jpg',
            'img/9282220bc147d487.jpg',
            'img/b4cf24f215e29d1a.jpg',
            'img/a9647b2023939f16.jpg',
        ],
    },
    portrait: 'img/862377b30d45552e.jpg',
}
