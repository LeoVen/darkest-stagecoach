
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/ringmaster_portrait_roster.png'

export const Class_Ringmaster: ClassMod = {
    name: 'Ringmaster',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.5, blight: 0.3, bleed: 0.5, disease: 0.2, move: 0.2, debuff: 0.2, deathBlow: 0.75, trap: 0.3},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 18, speed: 0},
{dodge: 0.15, prot: 0, hp: 22, speed: 0},
{dodge: 0.2, prot: 0, hp: 26, speed: 0},
{dodge: 0.25, prot: 0, hp: 30, speed: 0},
{dodge: 0.3, prot: 0, hp: 34, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 10.0], crit: 0.05, speed: 4}
,{accuracy: 0, damage: [6.0, 12.0], crit: 0.06, speed: 4}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.07, speed: 5}
,{accuracy: 0, damage: [8.0, 15.0], crit: 0.08, speed: 5}
,{accuracy: 0, damage: [9.0, 16.0], crit: 0.09, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2325415039'
        }
    ],
}