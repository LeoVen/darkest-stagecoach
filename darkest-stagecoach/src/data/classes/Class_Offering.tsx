
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/offering_portrait_roster.png'

export const Class_Offering: ClassMod = {
    name: 'Offering',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.2, blight: 0.4, bleed: 0.5, disease: 0.3, move: 0.4, debuff: 0.2, deathBlow: 0.67, trap: 0.1},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 34, speed: 0},
{dodge: 0.05, prot: 0.1, hp: 40, speed: 0},
{dodge: 0.1, prot: 0.1, hp: 46, speed: 0},
{dodge: 0.15, prot: 0.2, hp: 52, speed: 0},
{dodge: 0.2, prot: 0.2, hp: 58, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 8.0], crit: 0.02, speed: 4}
,{accuracy: 0, damage: [5.0, 9.0], crit: 0.03, speed: 4}
,{accuracy: 0, damage: [5.0, 10.0], crit: 0.04, speed: 5}
,{accuracy: 0, damage: [6.0, 11.0], crit: 0.05, speed: 5}
,{accuracy: 0, damage: [7.0, 12.0], crit: 0.06, speed: 6}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1119908263'
        }
    ],
}
    