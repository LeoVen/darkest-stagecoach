
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/hollow_portrait_roster.png'

export const Class_Hollow: ClassMod = {
    name: 'Hollow',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.5, blight: 0.4, bleed: 0.4, disease: 0.3, move: 0.2, debuff: 0.3, deathBlow: 0.67, trap: 0.2},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 24, speed: 0},
{dodge: 0.1, prot: 0, hp: 28, speed: 0},
{dodge: 0.15, prot: 0, hp: 32, speed: 0},
{dodge: 0.2, prot: 0, hp: 36, speed: 0},
{dodge: 0.25, prot: 0, hp: 40, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [1.0, 8.0], crit: 0.04, speed: 4}
,{accuracy: 0, damage: [1.0, 9.0], crit: 0.05, speed: 4}
,{accuracy: 0, damage: [2.0, 11.0], crit: 0.06, speed: 5}
,{accuracy: 0, damage: [2.0, 12.0], crit: 0.07, speed: 5}
,{accuracy: 0, damage: [3.0, 14.0], crit: 0.08, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1115865609'
        }
    ],
}
    