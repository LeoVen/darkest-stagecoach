
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/JoanofArc_portrait_roster.png'

export const Class_JoanofArc: ClassMod = {
    name: 'JoanofArc',
    portrait: portrait,
    religious: true,
    resistances: {stun: 0.3, blight: 0.2, bleed: 0.2, disease: 0.5, move: 0.2, debuff: 0.4, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 20, speed: 0},
{dodge: 0.09, prot: 0, hp: 23, speed: 0},
{dodge: 0.13, prot: 0, hp: 25, speed: 0},
{dodge: 0.17, prot: 0, hp: 28, speed: 0},
{dodge: 0.2, prot: 0, hp: 30, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [6.0, 12.0], crit: 0.03, speed: 4}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.04, speed: 4}
,{accuracy: 0, damage: [8.0, 16.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [9.0, 17.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [10.0, 19.0], crit: 0.07, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1596685165'
        }
    ],
}