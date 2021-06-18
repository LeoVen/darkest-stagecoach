
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/choir_hunter_portrait_roster.png'

export const Class_ChoirHunter: ClassMod = {
    name: 'ChoirHunter',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.3, bleed: 0.25, disease: 0.3, move: 0.3, debuff: 0.4, deathBlow: 0.67, trap: 0.25},
    stats: {
        armours: [
            {dodge: 0.15, prot: 0, hp: 19, speed: 0},
{dodge: 0.2, prot: 0, hp: 23, speed: 0},
{dodge: 0.25, prot: 0, hp: 27, speed: 0},
{dodge: 0.3, prot: 0, hp: 31, speed: 0},
{dodge: 0.35, prot: 0, hp: 35, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [3.0, 5.0], crit: 0.03, speed: 9}
,{accuracy: 0, damage: [4.0, 6.0], crit: 0.04, speed: 9}
,{accuracy: 0, damage: [5.0, 7.0], crit: 0.05, speed: 10}
,{accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 10}
,{accuracy: 0, damage: [6.0, 9.0], crit: 0.07, speed: 11}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2505955762'
        }
    ],
}
    