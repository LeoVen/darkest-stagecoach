// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_wretch1: ClassModData = {
    key: 'wretch1',
    name: `Wretch`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: -0.6,
        bleed: 0.3,
        disease: 0.1,
        move: 0.2,
        debuff: 0.3,
        deathBlow: 0.67,
        trap: 0
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 33, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 41, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 45, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 4 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 5 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.07, speed: 5 },
            { accuracy: 0, damage: [8.0, 13.0], crit: 0.08, speed: 6 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1849364138'
        }
    ],
    skills: [
        {
            name: `Sickly Stab`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/bb1c564a3c8ac30b.jpg',
        },
        {
            name: `Contagion`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/cb9034b749d979c0.jpg',
        },
        {
            name: `Outbreak`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d31266314223826e.jpg',
        },
        {
            name: `Catharsis`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/7a2f2a028be11e03.jpg',
        },
        {
            name: `Scapegoat`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/1445e2f828ff05d2.jpg',
        },
        {
            name: `Scurry`,
            launch: [true,true,false,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/9bd9efd4b087b5bc.jpg',
        },
        {
            name: `The Swarm`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/42b290ef6f60a6e2.jpg',
        },
    ],
    equip: {
        armour: [
            'img/cbb7d5e038060130.jpg',
            'img/1cbc3449baf67eb9.jpg',
            'img/dba5510a873d15e6.jpg',
            'img/050ba0e9ecd69718.jpg',
            'img/460be06115f1290b.jpg',
        ],
        weapon: [
            'img/2ed815cf77f36ec6.jpg',
            'img/76e3189565bf370a.jpg',
            'img/30f811951873cb6f.jpg',
            'img/ad37bde35760f6c4.jpg',
            'img/c30b7893ebe8cb99.jpg',
        ],
    },
    portrait: 'img/63e0fce4a429d8a0.jpg',
}
