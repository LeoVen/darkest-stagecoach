// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_werewolf1: ClassModData = {
    key: 'werewolf1',
    name: `Werewolf`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.2,
        bleed: 0.5,
        disease: 0.4,
        move: 0.3,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 38, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 50, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.05, speed: 5 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.06, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1135620886'
        }
    ],
    skills: [
        {
            name: `Bloodshed Claws`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/d0af04f8c11378f6.jpg',
        },
        {
            name: `Horrendous Roar`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/334c6b5c654d4659.jpg',
        },
        {
            name: `Taunt`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: `@`,
            },
            image: 'img/bd5daf2b9c51d15b.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Smoke Bomb`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/08da3be5a14148aa.jpg',
        },
        {
            name: `Savage Feast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/641f1e8685badcdd.jpg',
        },
        {
            name: `Headbutt`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/f4a1c8fb9ff0464c.jpg',
        },
        {
            name: `Midnight Howl`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/3a3db7141eb20a02.jpg',
        },
    ],
    equip: {
        armour: [
            'img/333098653501a276.jpg',
            'img/ceae790b529fa525.jpg',
            'img/5e4616f13b339c4f.jpg',
            'img/cec3ca10877daf33.jpg',
            'img/751535c3574ca3fe.jpg',
        ],
        weapon: [
            'img/d95ac4194851781d.jpg',
            'img/95b759d312aebd3c.jpg',
            'img/5ebdde32bbee7459.jpg',
            'img/569e844a87f24f32.jpg',
            'img/44f55925ce41f3d3.jpg',
        ],
    },
    portrait: 'img/41fcb9fbe5dac9de.jpg',
}
