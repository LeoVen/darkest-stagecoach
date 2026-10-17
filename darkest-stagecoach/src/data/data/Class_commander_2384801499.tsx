// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_commander_2384801499: ClassModData = {
    key: 'commander_2384801499',
    name: `Magician`,
    originalHero: false,
    religious: true,
    transform: true,
    resistances: {
        stun: 0.5,
        blight: 0.3,
        bleed: 0.3,
        disease: 0.3,
        move: 0.2,
        debuff: 0.45,
        deathBlow: 0.67,
        trap: 0.2
    },
    stats: {
        armours: [
            { dodge: 0.12, prot: 0, hp: 21, speed: 0 },
            { dodge: 0.16, prot: 0, hp: 24, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.25, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.3, prot: 0, hp: 37, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 7 },
            { accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 7 },
            { accuracy: 0, damage: [5.0, 9.0], crit: 0.07, speed: 7 },
            { accuracy: 0, damage: [6.0, 11.0], crit: 0.08, speed: 8 },
            { accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 9 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2384801499'
        }
    ],
    skills: [
        {
            name: `Grasp of Death`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/6f63ec290fb7a982.jpg',
        },
        {
            name: ` ¤¦¤¦¤¦¤
Time acceleration`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@~`,
            },
            image: 'img/6f47c9ebeda1c158.jpg',
        },
        {
            name: ` ¤ ¤ ¤ ¤
Reorganization`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/b1e3a3c62e668aef.jpg',
        },
        {
            name: `Chain of thunderbolts/The interdimensional side`,
            launch: [false,true,true,false],
            target: {
                targets: [false,true,true,true],
                mods: `~`,
            },
            image: 'img/695a4e7f10b74c17.jpg',
        },
        {
            name: `Neutralization`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b1c07c5576647af7.jpg',
        },
        {
            name: `Mental oppression`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/8919a36e6c861c2e.jpg',
        },
        {
            name: `Changing tactics`,
            launch: [true,true,true,true],
            target: {
                targets: [false,false,false,false],
                mods: ``,
            },
            image: 'img/53690633b773739d.jpg',
        },
    ],
    equip: {
        armour: [
            'img/8ff0b44da37d90c1.jpg',
            'img/335b0667d2e3aca1.jpg',
            'img/5cb71a6eada52443.jpg',
            'img/eff77894dc0cb81f.jpg',
            'img/6ac81d95ea5ac072.jpg',
        ],
        weapon: [
            'img/04580f06490e2991.jpg',
            'img/85d238c560c91af2.jpg',
            'img/b5af662e2c0a1c3f.jpg',
            'img/dd6ed315bb63e87a.jpg',
            'img/f0449cb102f1b3ea.jpg',
        ],
    },
    portrait: 'img/11b3a890a9225bc5.jpg',
}
