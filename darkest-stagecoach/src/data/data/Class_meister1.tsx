// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_meister1: ClassModData = {
    key: 'meister1',
    name: `Meister`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.2,
        blight: 0.2,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0.5
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.06, speed: 6 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.07, speed: 6 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 7 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.09, speed: 7 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.1, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2575427235'
        }
    ],
    skills: [
        {
            name: `Preheat`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/bef5a5bf7278ece2.jpg',
        },
        {
            name: `Fury of the Beast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8b74e0832181aa5a.jpg',
        },
        {
            name: `Open Fire!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/8eaea406f6e816b8.jpg',
        },
        {
            name: `Acupuncture`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/8eab69f5dc1a1051.jpg',
        },
        {
            name: `Spray Gunpowder`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/ed16a5feb5927ad8.jpg',
        },
        {
            name: `Smokebomb`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/b37fe665806827dc.jpg',
        },
        {
            name: `Iron Fist`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/e44ff72981bd04f1.jpg',
        },
    ],
    equip: {
        armour: [
            'img/68a348654dd3e15e.jpg',
            'img/311f5df6549e688b.jpg',
            'img/8cab0dacc058edaf.jpg',
            'img/66b4a2471d2f081b.jpg',
            'img/6190f4a87b4dd5b5.jpg',
        ],
        weapon: [
            'img/312c875b748f3178.jpg',
            'img/5ee4c44acd22ed58.jpg',
            'img/50a43613469222a0.jpg',
            'img/afbe82628324562e.jpg',
            'img/cf2db78613da2eea.jpg',
        ],
    },
    portrait: 'img/64b29d23852545a5.jpg',
}
