
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/veiled_portrait_roster.png'

export const Class_Veiled: ClassMod = {
    name: 'Veiled',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.2, blight: 0.1, bleed: 2, disease: 0.6, move: 0.1, debuff: 0.4, deathBlow: 0.67, trap: 0},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 20, speed: 0},
{dodge: 0.05, prot: 0, hp: 24, speed: 0},
{dodge: 0.1, prot: 0, hp: 28, speed: 0},
{dodge: 0.15, prot: 0, hp: 32, speed: 0},
{dodge: 0.2, prot: 0, hp: 36, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 7.0], crit: 0.03, speed: 7}
,{accuracy: 0, damage: [5.0, 8.0], crit: 0.04, speed: 7}
,{accuracy: 0, damage: [6.0, 9.0], crit: 0.05, speed: 8}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.06, speed: 8}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 9}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2401797230'
        }
    ],
}