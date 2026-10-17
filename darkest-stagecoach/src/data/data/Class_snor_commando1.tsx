// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_snor_commando1: ClassModData = {
    key: 'snor_commando1',
    name: `Survivor`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.3,
        blight: 0.4,
        bleed: 0.3,
        disease: 0.3,
        move: 0.3,
        debuff: 0.3,
        deathBlow: 0.87,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.06, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.11, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.21, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.26, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 5 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.04, speed: 5 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.07, speed: 7 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3301559781'
        }
    ],
    skills: [
        {
            name: `Single Tap`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/8316ee287a2c3f49.jpg',
        },
        {
            name: `Tri-Tip Stab`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/55041130f53f0632.jpg',
        },
        {
            name: `Suppressive Fire`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/cf6fe7bba2b51f56.jpg',
        },
        {
            name: `Primordial Cube`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: `~`,
            },
            image: 'img/accb1573f13d6c5e.jpg',
        },
        {
            name: `Harvest`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/7717e089ee5bb359.jpg',
        },
        {
            name: `Phase Shotgun`,
            launch: [true,false,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/8e58bd2e9212cac3.jpg',
        },
        {
            name: `Tactical Slide`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/fb53c7b86c446a04.jpg',
        },
    ],
    equip: {
        armour: [
            'img/102daf7037708fec.jpg',
            'img/cab406d369fbb749.jpg',
            'img/9ec33ab88e1384cc.jpg',
            'img/eb14747d31f9745a.jpg',
            'img/94fb1ce57b31244b.jpg',
        ],
        weapon: [
            'img/c6356438156a60cd.jpg',
            'img/ba15bd05a5ff15b9.jpg',
            'img/f1ebfaa582553d24.jpg',
            'img/aa9438eebe660e10.jpg',
            'img/dd4aa674b5f53897.jpg',
        ],
    },
    portrait: 'img/48373b847604e667.jpg',
}
