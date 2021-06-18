
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/hqclaimants_portrait_roster.png'

export const Class_Hqclaimants: ClassMod = {
    name: 'Hqclaimants',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.2, bleed: 0.4, disease: 0.3, move: 0.3, debuff: 0.2, deathBlow: 0.67, trap: 0.3},
    stats: {
        armours: [
            {dodge: 0.05, prot: 0, hp: 30, speed: 0},
{dodge: 0.1, prot: 0, hp: 36, speed: 0},
{dodge: 0.15, prot: 0, hp: 42, speed: 0},
{dodge: 0.2, prot: 0, hp: 48, speed: 0},
{dodge: 0.25, prot: 0, hp: 54, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [2.0, 4.0], crit: 0.02, speed: 4}
,{accuracy: 0, damage: [2.0, 5.0], crit: 0.03, speed: 4}
,{accuracy: 0, damage: [3.0, 6.0], crit: 0.04, speed: 5}
,{accuracy: 0, damage: [3.0, 7.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [4.0, 8.0], crit: 0.06, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2091777102'
        }
    ],
}