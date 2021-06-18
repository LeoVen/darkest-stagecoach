
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/cook_portrait_roster.png'

export const Class_Cook: ClassMod = {
    name: 'Cook',
    portrait: portrait,
    religious: false,
    resistances: {stun: 0.4, blight: 0.3, bleed: 0.3, disease: 0.4, move: 0.3, debuff: 0.3, deathBlow: 0.67, trap: 0.4},
    stats: {
        armours: [
            {dodge: 0.1, prot: 0, hp: 19, speed: 0},
{dodge: 0.15, prot: 0, hp: 23, speed: 0},
{dodge: 0.2, prot: 0, hp: 27, speed: 0},
{dodge: 0.25, prot: 0, hp: 31, speed: 0},
{dodge: 0.3, prot: 0, hp: 35, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [4.0, 5.0], crit: 0.02, speed: 1}
,{accuracy: 0, damage: [5.0, 6.0], crit: 0.03, speed: 1}
,{accuracy: 0, damage: [5.0, 7.0], crit: 0.04, speed: 2}
,{accuracy: 0, damage: [6.0, 8.0], crit: 0.05, speed: 2}
,{accuracy: 0, damage: [6.0, 9.0], crit: 0.06, speed: 3}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1978083682'
        }
    ],
}