
import ClassMod from '../ClassMod'
import portrait from '../../assets/img/portraits/spacemarine1_portrait_roster.png'

export const Class_Spacemarine1: ClassMod = {
    name: 'Spacemarine1',
    portrait: portrait,
    religious: true,
    resistances: {stun: 0.5, blight: 0.3, bleed: 0.4, disease: 0.3, move: 0.55, debuff: 0.5, deathBlow: 0.67, trap: 0.05},
    stats: {
        armours: [
            {dodge: 0, prot: 0, hp: 33, speed: 0},
{dodge: 0.02, prot: 0.02, hp: 39, speed: 0},
{dodge: 0.04, prot: 0.04, hp: 45, speed: 0},
{dodge: 0.06, prot: 0.06, hp: 51, speed: 0},
{dodge: 0.08, prot: 0.08, hp: 57, speed: 0}
        ],
        weapons: [
            {accuracy: 0, damage: [5.0, 10.0], crit: 0.0375, speed: 2}
,{accuracy: 0, damage: [6.0, 12.0], crit: 0.0425, speed: 2}
,{accuracy: 0, damage: [7.0, 13.0], crit: 0.0475, speed: 3}
,{accuracy: 0, damage: [8.0, 15.0], crit: 0.0525, speed: 3}
,{accuracy: 0, damage: [9.0, 16.0], crit: 0.0575, speed: 4}
        ],
    },
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1247612309'
        }
    ],
}