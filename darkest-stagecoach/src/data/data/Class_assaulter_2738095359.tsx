// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_assaulter_2738095359: ClassModData = {
    key: 'assaulter_2738095359',
    name: `Assaulter`,
    originalHero: false,
    religious: false,
    transform: true,
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
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2738095359'
        }
    ],
    skills: [
        {
            name: `Triple Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/78de3d6c5c77d73b.jpg',
        },
        {
            name: `Precise Shot`,
            launch: [true,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/695982d71cf988f9.jpg',
        },
        {
            name: `Sperrfeuer`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8c217547aa963945.jpg',
        },
        {
            name: `Blitzkrieg`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/0e5b0e20c88e108d.jpg',
        },
        {
            name: `Angriffsziel`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/ee045c82cc63bdbe.jpg',
        },
        {
            name: `Nose Breaker`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/7c21f8b2a6840a7d.jpg',
        },
        {
            name: `Smoke Bomb`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/ded0e2ba4108e350.jpg',
        },
    ],
    equip: {
        armour: [
            'img/a6e1f805b6083453.jpg',
            'img/e157593bd6d95c00.jpg',
            'img/4afe1d4511ac617e.jpg',
            'img/693e13807bc886a1.jpg',
            'img/3799018042d5e134.jpg',
        ],
        weapon: [
            'img/008327b6d1b1216e.jpg',
            'img/ecf02109a84f4f96.jpg',
            'img/cbd01237480e83a4.jpg',
            'img/75ef4b47949ace2b.jpg',
            'img/e79836bb8356cf9a.jpg',
        ],
    },
    portrait: 'img/dda43d144ef0268b.jpg',
}
