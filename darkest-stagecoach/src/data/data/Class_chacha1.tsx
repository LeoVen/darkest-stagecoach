// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_chacha1: ClassModData = {
    key: 'chacha1',
    name: `Charlatan`,
    originalHero: false,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.2,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.2,
        move: 0.2,
        debuff: 0.4,
        deathBlow: 0.67,
        trap: 0.4
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 22, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 26, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 30, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 34, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 38, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [5.0, 8.0], crit: 0.05, speed: 6 },
            { accuracy: 0, damage: [6.0, 10.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.08, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2823681766'
        }
    ],
    skills: [
        {
            name: `Five of Swords`,
            launch: [false,false,true,true],
            target: {
                targets: [false,true,true,true],
                mods: ``,
            },
            image: 'img/71a1b240919c67fd.jpg',
        },
        {
            name: `See No Evil`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/44dd35b3f3b35665.jpg',
        },
        {
            name: `Chthonic Phenomenon`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/4661623d18e2f238.jpg',
        },
        {
            name: `To The Stage`,
            launch: [false,true,true,true],
            target: {
                targets: [false,false,true,true],
                mods: ``,
            },
            image: 'img/d139b564490bce67.jpg',
        },
        {
            name: `Embrace Of Darkness`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/fac56339b42b7873.jpg',
        },
        {
            name: `Ordinary Miracle`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~@`,
            },
            image: 'img/25c340e2b43ddcdb.jpg',
        },
        {
            name: `Card Tricks`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/eac959842027aa37.jpg',
        },
    ],
    equip: {
        armour: [
            'img/e1803ed496298066.jpg',
            'img/a61512a396d3c8f5.jpg',
            'img/931d0f4cf562dbe5.jpg',
            'img/d9ea7a4929eeee3b.jpg',
            'img/783d3aaebce69eae.jpg',
        ],
        weapon: [
            'img/f8c5dbd8d33cf407.jpg',
            'img/29868cb4241e7093.jpg',
            'img/6b66d099a8666e49.jpg',
            'img/e3b4048c8b8d6d1a.jpg',
            'img/09dc80edca82584d.jpg',
        ],
    },
    portrait: 'img/017fe8c77a2145c9.jpg',
}
