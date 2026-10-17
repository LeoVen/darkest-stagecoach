// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_ringmaster1: ClassModData = {
    key: 'ringmaster1',
    name: `Ringmaster`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.5,
        disease: 0.2,
        move: 0.2,
        debuff: 0.2,
        deathBlow: 0.75,
        trap: 0.3
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 18, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 34, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 4 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 5 },
            { accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2332262050'
        }
    ],
    skills: [
        {
            name: `Last Laugh`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4ba2fdd0a50d43ae.jpg',
        },
        {
            name: `Flummox!`,
            launch: [false,true,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/f5084f20ae505881.jpg',
        },
        {
            name: `Grand Entrance`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/526735317ad7d7f4.jpg',
        },
        {
            name: `Kneel!`,
            launch: [true,false,false,false],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/a871ec80fa00ca66.jpg',
        },
        {
            name: `Fan Favourite`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/726fb75bf85db6cb.jpg',
        },
        {
            name: `Barry & Leon`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/4f38defa7ac5f896.jpg',
        },
        {
            name: `Take a Bow`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/5b7d34346bf95604.jpg',
        },
    ],
    equip: {
        armour: [
            'img/c527cd11093aed7e.jpg',
            'img/79c7f010617b6657.jpg',
            'img/589ebd14f044ab71.jpg',
            'img/e1a29ee1a9e129b4.jpg',
            'img/ceac8ee43c2a39bc.jpg',
        ],
        weapon: [
            'img/4c7425e98082184c.jpg',
            'img/6dbdbbb0ee4f336b.jpg',
            'img/856d90bf11519e77.jpg',
            'img/3cebe87644573ffb.jpg',
            'img/0e7404f552f0c351.jpg',
        ],
    },
    portrait: 'img/bfa3264659fb9b81.jpg',
}
