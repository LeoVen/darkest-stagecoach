// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_greyhawk1: ClassModData = {
    key: 'greyhawk1',
    name: `Greyhawk`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.4,
        bleed: 0.1,
        disease: 0.2,
        move: 0,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 36, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 43, speed: 0 },
            { dodge: 0.08, prot: 0, hp: 50, speed: 0 },
            { dodge: 0.13, prot: 0, hp: 57, speed: 0 },
            { dodge: 0.18, prot: 0, hp: 64, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.01, speed: 2 },
            { accuracy: 0, damage: [7.0, 14.0], crit: 0.02, speed: 2 },
            { accuracy: 0, damage: [8.0, 16.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [9.0, 17.0], crit: 0.04, speed: 3 },
            { accuracy: 0, damage: [10.0, 19.0], crit: 0.05, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2564785375'
        }
    ],
    skills: [
        {
            name: `Sharp puncture`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/47f80c072ae98d08.jpg',
        },
        {
            name: `Bristle strike`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/0d99405db361bd96.jpg',
        },
        {
            name: `Hawk's hunting`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/945e8f938690b3e1.jpg',
        },
        {
            name: `Divine blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/686d75bce89defcd.jpg',
        },
        {
            name: `Phoenix grace`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/2e3fc4adb0daf2fa.jpg',
        },
        {
            name: `Fortress shelter`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/052c812ff6b03d55.jpg',
        },
        {
            name: `Rage of archon`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5d3e52253877e366.jpg',
        },
    ],
    equip: {
        armour: [
            'img/4c1974629acfffa2.jpg',
            'img/91d045f3cb00a2f3.jpg',
            'img/d8625c14ec5a6338.jpg',
            'img/97bd4766193f0054.jpg',
            'img/6c86336c6b876486.jpg',
        ],
        weapon: [
            'img/cb82fa1dd38a4ec6.jpg',
            'img/73ff0f6868521fbc.jpg',
            'img/ea4ed96da05e1f6b.jpg',
            'img/9fab880357cc04d9.jpg',
            'img/cb2952feaa61cf2d.jpg',
        ],
    },
    portrait: 'img/6a653e8775fdd340.jpg',
}
