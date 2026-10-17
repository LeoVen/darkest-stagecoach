// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_revenant_deadlist1: ClassModData = {
    key: 'revenant_deadlist1',
    name: `Crystalline Herald`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.6,
        blight: 0.2,
        bleed: 0.5,
        disease: 0,
        move: 0.1,
        debuff: 0.2,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.05, prot: 0, hp: 29, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 39, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 44, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 49, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [3.0, 8.0], crit: 0.02, speed: 3 },
            { accuracy: 0, damage: [4.0, 9.0], crit: 0.03, speed: 3 },
            { accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 4 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 4 },
            { accuracy: 0, damage: [7.0, 12.0], crit: 0.04, speed: 5 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2296917572'
        }
    ],
    skills: [
        {
            name: `Protective Shells`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/ceac7a0b1067cc06.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
	Cleansing Crystals`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/23b1ed1f306449ff.jpg',
        },
        {
            name: `Reality Bend`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/c7648f72c403e5ba.jpg',
        },
        {
            name: `Beyond Time and Space`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/8772ac13e66c77c7.jpg',
        },
        {
            name: `Calming Crystals`,
            launch: [true,true,true,false],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/824ee2094aef5351.jpg',
        },
        {
            name: `Temporal Crystals`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/e735718f26cbb83d.jpg',
        },
        {
            name: `Crystalline Resonance`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,false,true],
                mods: `~`,
            },
            image: 'img/b25d198db8abfb00.jpg',
        },
    ],
    equip: {
        armour: [
            'img/14217b19cf5ab33c.jpg',
            'img/6bea32af3c893a72.jpg',
            'img/f330ec715c59fbff.jpg',
            'img/dc13fab0798285d0.jpg',
            'img/269af146cc406ec7.jpg',
        ],
        weapon: [
            'img/8dfcc9045c9213d5.jpg',
            'img/f127b247ecade7a2.jpg',
            'img/deee390d6b78b489.jpg',
            'img/c10ad65d7b0e7f09.jpg',
            'img/c9acf8073c5fdde9.jpg',
        ],
    },
    portrait: 'img/1a2e9f551b127b97.jpg',
}
