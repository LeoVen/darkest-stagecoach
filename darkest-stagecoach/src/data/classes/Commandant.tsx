import ClassMod from '../ClassMod'
import { MoonKanin } from '../authors/MoonKanin'
import { Rehtael } from '../authors/Rehtael'
import { Shay } from '../authors/Shay'
import CommandantPortrait from '../../assets/img/hero/CommandantPortrait.png'
import { Terkmc } from '../authors/Terkmc'
import { Cryptix } from '../authors/Cryptix'
import { VoidSlime } from '../authors/VoidSlime'
import { _54NBB } from '../authors/_54NBB'

export const Commandant: ClassMod = {
    name: 'Commandant',
    shortDescription: 'Blood and mud...',
    hero: CommandantPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2472629364'
        }
    ],
    authors: [
        {
            author: Terkmc,
            credits: ['Concept', 'Art', 'Design', 'Sound']
        },
        {
            author: Cryptix,
            credits: ['Scripting']
        },
        {
            author: VoidSlime,
            credits: ['Scripting']
        },
        {
            author: _54NBB,
            credits: ['Animation']
        }
    ]
}
