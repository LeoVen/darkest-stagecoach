
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/herald_portrait_roster.png'

export const Class_Herald: ClassMod = {
    name: 'Herald',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0, bleed: 5, disease: 2, move: 0.4, debuff: 0.2, deathBlow: 0.87, trap: 0},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 30, speed: 0},
{dodge: 0.05, prot: 0, hp: 37, speed: 0},
{dodge: 0.1, prot: 0, hp: 44, speed: 0},
{dodge: 0.15, prot: 0, hp: 51, speed: 0},
{dodge: 0.2, prot: 0, hp: 58, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 10.0], crit: 0.03, speed: 0}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.04, speed: 0}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.05, speed: 1}
,{accuracy: 0, damage: [8.0, 14.0], crit: 0.06, speed: 1}
,{accuracy: 0, damage: [9.0, 16.0], crit: 0.07, speed: 2}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2341439121'
        }
    ],
}