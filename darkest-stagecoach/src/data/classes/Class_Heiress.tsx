
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/heiress_portrait_roster.png'

export const Class_Heiress: ClassMod = {
    name: 'Heiress',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.1, blight: 0.5, bleed: 0.3, disease: 0.3, move: 0.1, debuff: 0.5, deathBlow: 0.67, trap: 0.2},
    stats: {
        armours: [
            {dodge: 0.03, prot: 0, hp: 19, speed: 0},
{dodge: 0.08, prot: 0, hp: 23, speed: 0},
{dodge: 0.13, prot: 0, hp: 27, speed: 0},
{dodge: 0.18, prot: 0, hp: 31, speed: 0},
{dodge: 0.23, prot: 0, hp: 35, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 7.0], crit: 0.02, speed: 4}
,{accuracy: 0, damage: [5.0, 8.0], crit: 0.03, speed: 4}
,{accuracy: 0, damage: [6.0, 9.0], crit: 0.04, speed: 5}
,{accuracy: 0, damage: [7.0, 10.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [8.0, 12.0], crit: 0.06, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2021307368'
        }
    ],
}