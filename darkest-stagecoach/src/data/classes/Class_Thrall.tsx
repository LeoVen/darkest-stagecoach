
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/thrall_portrait_roster.png'

export const Class_Thrall: ClassMod = {
    name: 'Thrall',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.5, blight: 0.4, bleed: 0.3, disease: 0.4, move: 0.6, debuff: 0.4, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 37, speed: 0},
{dodge: 0.05, prot: 0, hp: 44, speed: 0},
{dodge: 0.1, prot: 0, hp: 51, speed: 0},
{dodge: 0.15, prot: 0, hp: 58, speed: 0},
{dodge: 0.2, prot: 0, hp: 65, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [7.0, 14.0], crit: 0, speed: 0}
,{accuracy: 0, damage: [8.0, 16.0], crit: 0.01, speed: 0}
,{accuracy: 0, damage: [9.0, 18.0], crit: 0.02, speed: 1}
,{accuracy: 0, damage: [10.0, 20.0], crit: 0.03, speed: 1}
,{accuracy: 0, damage: [12.0, 24.0], crit: 0.04, speed: 2}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1175904375'
        }
    ],
}
    