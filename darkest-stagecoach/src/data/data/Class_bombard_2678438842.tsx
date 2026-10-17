// THIS FILE WAS AUTO-GENERATED

import { ClassModData } from '../ClassMod'

export const Class_bombard_2678438842: ClassModData = {
    key: 'bombard_2678438842',
    name: `Bombard`,
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
        trap: 0.15
    },
    stats: {
        armours: [
            { dodge: 0, prot: 0, hp: 27, speed: 0 },
            { dodge: 0.05, prot: 0, hp: 32, speed: 0 },
            { dodge: 0.1, prot: 0, hp: 37, speed: 0 },
            { dodge: 0.15, prot: 0, hp: 42, speed: 0 },
            { dodge: 0.2, prot: 0, hp: 47, speed: 0 }
        ],
        weapons: [
            { accuracy: 0, damage: [7.0, 9.0], crit: 0.04, speed: 2 },
            { accuracy: 0, damage: [8.0, 10.0], crit: 0.05, speed: 2 },
            { accuracy: 0, damage: [9.0, 11.0], crit: 0.06, speed: 3 },
            { accuracy: 0, damage: [10.0, 12.0], crit: 0.07, speed: 3 },
            { accuracy: 0, damage: [11.0, 13.0], crit: 0.08, speed: 4 }
        ]
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2678438842'
        }
    ],
    skills: [
        {
            name: `Breaching Charge`,
            launch: [true,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: ``,
            },
            image: 'img/b1055c998d462fb9.jpg',
        },
        {
            name: `Armed / KABOOM`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/2c0693a133e4d224.jpg',
        },
        {
            name: `Concussive Blast`,
            launch: [false,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `~`,
            },
            image: 'img/34ec1203a298eca4.jpg',
        },
        {
            name: `Fire in the Hole`,
            launch: [false,false,true,true],
            target: {
                targets: [true,true,true,true],
                mods: ``,
            },
            image: 'img/6e1c23bb7aacb927.jpg',
        },
        {
            name: `Rearmament`,
            launch: [true,true,true,true],
            target: {
                targets: [true,true,true,true],
                mods: `@`,
            },
            image: 'img/e681d15c8ddfbc3b.jpg',
        },
        {
            name: `Flash Out`,
            launch: [false,true,true,false],
            target: {
                targets: [true,true,true,false],
                mods: `~`,
            },
            image: 'img/286d2ecdfe6cd2d8.jpg',
        },
        {
            name: `Headbutt`,
            launch: [true,true,false,false],
            target: {
                targets: [true,true,false,false],
                mods: ``,
            },
            image: 'img/c173fb685b8726ad.jpg',
        },
    ],
    equip: {
        armour: [
            'img/aff65f946bb858aa.jpg',
            'img/a89b76ff00feba23.jpg',
            'img/caf33400f69aa403.jpg',
            'img/c38956f80f8de194.jpg',
            'img/f59a5293dae516f6.jpg',
        ],
        weapon: [
            'img/315cb30199151944.jpg',
            'img/ae02f58970a51f0d.jpg',
            'img/a6b1f17d1e097fdd.jpg',
            'img/ef1cbc21ec8be2c3.jpg',
            'img/0afacf85c5bfd412.jpg',
        ],
    },
    portrait: 'img/664c5b62cdf07573.jpg',
}
