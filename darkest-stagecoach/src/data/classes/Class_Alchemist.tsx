
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/alchemist_portrait_roster.png'

export const Class_Alchemist: ClassMod = {
    name: 'Alchemist',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.3, blight: 0.6, bleed: 0.2, disease: 0.4, move: 0.2, debuff: 0.5, deathBlow: 0.67, trap: 0.3},
    stats: {
        armours: [
            {dodge: 0.08, prot: 0, hp: 23, speed: 0},
{dodge: 0.13, prot: 0, hp: 27, speed: 0},
{dodge: 0.18, prot: 0, hp: 31, speed: 0},
{dodge: 0.23, prot: 0, hp: 35, speed: 0},
{dodge: 0.28, prot: 0, hp: 39, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 7.0], crit: 0.05, speed: 6}
,{accuracy: 0, damage: [5.0, 8.0], crit: 0.06, speed: 6}
,{accuracy: 0, damage: [6.0, 10.0], crit: 0.07, speed: 7}
,{accuracy: 0, damage: [7.0, 11.0], crit: 0.08, speed: 7}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.09, speed: 8}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2001406494'
        }
    ],
}
    