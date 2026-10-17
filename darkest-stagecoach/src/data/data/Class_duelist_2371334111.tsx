// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_duelist_2371334111: ClassModData = {
    key: 'duelist_2371334111',
    name: `Duelist`,
    originalHero: true,
    religious: false,
    transform: false,
    resistances: {
        stun: 0.4,
        blight: 0.2,
        bleed: 0.2,
        disease: 0.2,
        move: 0.4,
        debuff: 0.5,
        deathBlow: 0.5,
        trap: 0.1
    },
    stats: {
        armours: [
            { dodge: 0.1, prot: 0, hp: 20, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 28, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.35, prot: 0, hp: 35, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.03, speed: 6 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.04, speed: 6 },
            { accuracy: 0, damage: [10.0, 12.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [12.0, 15.0], crit: 0.07, speed: 8 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2371334111'
        }
    ],
    skills: [
        {
            name: `Blade from the Blue`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/4d25075d1aa61212.jpg',
        },
        {
            name: `Feint`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/a6718089922382e6.jpg',
        },
        {
            name: `Disarm`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/b49276a7fc6f9e50.jpg',
        },
        {
            name: `Slice`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/ce51f3693caddd3f.jpg',
        },
        {
            name: `Backpedal`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/619b1d3106cc935f.jpg',
        },
        {
            name: `On Guard`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/54bebeb6c942b1a8.jpg',
        },
        {
            name: `Come at Me`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/d867f11eb71a334c.jpg',
        },
    ],
    equip: {
        armour: [
            'img/0e784d01401e92ab.jpg',
            'img/fdb0bbe5e8f81544.jpg',
            'img/db046218b4cc8ac5.jpg',
            'img/4373f5135b3e0519.jpg',
            'img/e2849e0345103912.jpg',
        ],
        weapon: [
            'img/9683fc28423c9e9d.jpg',
            'img/59fa720b0ea6af21.jpg',
            'img/ae7b7ce0ffe5a217.jpg',
            'img/5806ba6262f2cfd1.jpg',
            'img/cff7389f5c216d2d.jpg',
        ],
    },
    portrait: 'img/0045930a283b6180.jpg',
}
