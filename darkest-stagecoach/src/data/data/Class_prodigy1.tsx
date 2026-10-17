// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_prodigy1: ClassModData = {
    key: 'prodigy1',
    name: `Prodigy`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.5,
        move: 0.1,
        debuff: 0.5,
        deathBlow: 0.67,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 23, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 8 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 8 },
            { accuracy: 0, damage: [7.0, 11.0], crit: 0.06, speed: 9 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.07, speed: 9 },
            { accuracy: 0, damage: [9.0, 15.0], crit: 0.08, speed: 10 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=924245318'
        }
    ],
    skills: [
        {
            name: `Spirit Shift`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/58e67567293043cc.jpg',
        },
        {
            name: `Paralysing Palm`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/8000683f74f5de10.jpg',
        },
        {
            name: `Hallowed Kick`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/42914ebde0ad458f.jpg',
        },
        {
            name: `Righteous Fist`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/041d61fccd8f8890.jpg',
        },
        {
            name: `Sacred Strike`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/62690f887c815fa0.jpg',
        },
        {
            name: `Heavenly Charge`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/12c197ffdf39d7ae.jpg',
        },
        {
            name: `Divine Haymaker`,
            launch: [false,false,false,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/975246b23cc51504.jpg',
        },
    ],
    equip: {
        armour: [
            'img/b4a919de3e8e591d.jpg',
            'img/814fe9e31f8ebfba.jpg',
            'img/c811f62aeec97743.jpg',
            'img/66b2754b46151ad7.jpg',
            'img/13a60a3a4cccb3ac.jpg',
        ],
        weapon: [
            'img/af13b5d3ee741288.jpg',
            'img/ac776278469a8086.jpg',
            'img/295994f1794a064a.jpg',
            'img/0e88f248d2abec09.jpg',
            'img/334a4e15940f700f.jpg',
        ],
    },
    portrait: 'img/f781a86e4b09bcd7.jpg',
}
