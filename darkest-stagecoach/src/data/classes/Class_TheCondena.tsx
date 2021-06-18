
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/the_condena_portrait_roster.png'

export const Class_TheCondena: ClassMod = {
    name: 'TheCondena',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.45, blight: 0.15, bleed: 0.45, disease: 0.3, move: 0.15, debuff: 0.3, deathBlow: 0.67, trap: 0},
    stats: {
        armours: [
            {dodge: 0.02, prot: 0, hp: 30, speed: 0},
{dodge: 0.04, prot: 0, hp: 35, speed: 0},
{dodge: 0.06, prot: 0, hp: 40, speed: 0},
{dodge: 0.08, prot: 0, hp: 45, speed: 0},
{dodge: 0.1, prot: 0, hp: 50, speed: 0}
        ],
        weapons: [
            {accuracy: 0.04, damage: [3.0, 6.0], crit: 0, speed: 0}
,{accuracy: 0.08, damage: [3.0, 7.0], crit: 0, speed: 0}
,{accuracy: 0.1, damage: [4.0, 8.0], crit: 0, speed: 0}
,{accuracy: 0.12, damage: [4.0, 9.0], crit: 0, speed: 0}
,{accuracy: 0.14, damage: [5.0, 10.0], crit: 0, speed: 0}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1360707762'
        }
    ],
}
    