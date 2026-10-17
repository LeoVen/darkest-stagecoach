// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_scourge1: ClassModData = {
    key: 'scourge1',
    name: `Scourge`,
    originalHero: false,
    religious: false,
    transform: true,
    resistances: {
        stun: 0.6,
        blight: 0,
        bleed: 0.2,
        disease: 0.6,
        move: 0.6,
        debuff: 0.1,
        deathBlow: 0.67,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 25, speed: 0 },
            { dodge: 0.03, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.06, prot: 0, hp: 35, speed: 0 },
            { dodge: 0.09, prot: 0, hp: 40, speed: 0 },
            { dodge: 0.12, prot: 0, hp: 45, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.025, speed: 6 },
            { accuracy: 0, damage: [6.0, 9.0], crit: 0.03, speed: 7 },
            { accuracy: 0, damage: [7.0, 10.0], crit: 0.035, speed: 7 },
            { accuracy: 0, damage: [8.0, 11.0], crit: 0.04, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=947715735'
        }
    ],
    skills: [
        {
            name: `Infectious Offering`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/d1c89ad33fdf6131.jpg',
        },
        {
            name: `Noxious Raze`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: `~`,
            },
            image: 'img/90810d2099339d32.jpg',
        },
        {
            name: `Excoriate`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/08c32524a1d4766b.jpg',
        },
        {
            name: `Abyssal Havoc`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/d4babdebf23e73b5.jpg',
        },
        {
            name: `Unfathomable Torment`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/d6345d13195ffbdb.jpg',
        },
        {
            name: `Deathlock`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/fc6b36f542c657d8.jpg',
        },
        {
            name: `Purge`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/a5a1f1a315ca74cd.jpg',
        },
    ],
    equip: {
        armour: [
            'img/dd63311916784361.jpg',
            'img/b14234f75406655f.jpg',
            'img/381375597313d7e4.jpg',
            'img/d8e5166ab96aa99c.jpg',
            'img/de1afff2b939ed25.jpg',
        ],
        weapon: [
            'img/b0662c679febb033.jpg',
            'img/fdc9e3a038931e83.jpg',
            'img/eda77ad8083f9edf.jpg',
            'img/6c9fd6e08fac0e19.jpg',
            'img/25b6b185795ab600.jpg',
        ],
    },
    portrait: 'img/eac2dbceabc35759.jpg',
}
