
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/apostate_portrait_roster.png'

export const Class_Apostate: ClassMod = {
    name: 'Apostate',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.2, blight: 0.2, bleed: 0.6, disease: 0.5, move: 0.2, debuff: 0.5, deathBlow: 0.67, trap: 0.2},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 24, speed: 0},
{dodge: 0.05, prot: 0, hp: 29, speed: 0},
{dodge: 0.1, prot: 0, hp: 34, speed: 0},
{dodge: 0.15, prot: 0, hp: 39, speed: 0},
{dodge: 0.2, prot: 0, hp: 44, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.01, speed: 6}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0.02, speed: 6}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.03, speed: 7}
,{accuracy: 0, damage: [6.0, 13.0], crit: 0.04, speed: 7}
,{accuracy: 0, damage: [7.0, 14.0], crit: 0.05, speed: 8}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1917819568'
        }
    ],
}