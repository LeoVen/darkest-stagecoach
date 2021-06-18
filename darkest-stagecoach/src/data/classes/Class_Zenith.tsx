
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/zenith_portrait_roster.png'

export const Class_Zenith: ClassMod = {
    name: 'Zenith',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.1, blight: 0.2, bleed: 0.2, disease: 0.1, move: 0.2, debuff: 0.2, deathBlow: 0.66, trap: 0.5},
    stats: {
        armours: [
            {dodge: 0.12, prot: 0, hp: 18, speed: 0},
{dodge: 0.17, prot: 0, hp: 21, speed: 0},
{dodge: 0.22, prot: 0, hp: 24, speed: 0},
{dodge: 0.27, prot: 0, hp: 27, speed: 0},
{dodge: 0.32, prot: 0, hp: 30, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 6.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [5.0, 7.0], crit: 0.06, speed: 6}
,{accuracy: 0, damage: [6.0, 8.0], crit: 0.07, speed: 7}
,{accuracy: 0, damage: [7.0, 9.0], crit: 0.08, speed: 8}
,{accuracy: 0, damage: [8.0, 10.0], crit: 0.09, speed: 9}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2111344032'
        }
    ],
}
    