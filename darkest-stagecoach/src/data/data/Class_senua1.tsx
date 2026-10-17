// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_senua1: ClassModData = {
    key: 'senua1',
    name: `Senua`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.4,
        bleed: 0.4,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 44, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.05, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 4 },
            { accuracy: 0, damage: [6.0, 13.0], crit: 0.08, speed: 4 },
            { accuracy: 0, damage: [7.0, 15.0], crit: 0.09, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2016855256'
        }
    ],
    skills: [
        {
            name: `Wild Strike`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/d6ea7a1cb5ee67ba.jpg',
        },
        {
            name: `Mighty Blow`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/66803d06f1d0ddf1.jpg',
        },
        {
            name: `Kick`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/3161b91942996d5c.jpg',
        },
        {
            name: `Stab`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/ed162759c68f1a2f.jpg',
        },
        {
            name: `Face Time`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/de83b4899b61c5be.jpg',
        },
        {
            name: `Head Case`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/889c6b6f489b3c8d.jpg',
        },
        {
            name: `Focus`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/768733d3a1bdf49e.jpg',
        },
    ],
    equip: {
        armour: [
            'img/2830f14c3fada39d.jpg',
            'img/fa916b4c6607c207.jpg',
            'img/a3b9e2a2704cd2a6.jpg',
            'img/a368bd539b1157d8.jpg',
            'img/58c3f647e13dccad.jpg',
        ],
        weapon: [
            'img/52187c9825e10d6d.jpg',
            'img/64d355d13ef00e12.jpg',
            'img/3a72e50733497a0c.jpg',
            'img/0b046c0422462496.jpg',
            'img/f615088afc19cfa7.jpg',
        ],
    },
    portrait: 'img/c9e5ccb911f92e93.jpg',
}
