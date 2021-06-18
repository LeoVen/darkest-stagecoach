
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/wraith_ms_portrait_roster.png'

export const Class_WraithMs: ClassMod = {
    name: 'WraithMs',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.2, bleed: 0.3, disease: 0.3, move: 0.4, debuff: 0.4, deathBlow: 0.67, trap: 0.2},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 27, speed: 0},
{dodge: 0.1, prot: 0, hp: 32, speed: 0},
{dodge: 0.15, prot: 0, hp: 37, speed: 0},
{dodge: 0.2, prot: 0, hp: 42, speed: 0},
{dodge: 0.25, prot: 0, hp: 47, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 3}
,{accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 3}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 4}
,{accuracy: 0, damage: [7.0, 15.0], crit: 0.08, speed: 4}
,{accuracy: 0, damage: [8.0, 16.0], crit: 0.09, speed: 5}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1697037179'
        }
    ],
}
    