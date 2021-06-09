import ClassMod from '../ClassMod'
import { MoonKanin } from '../authors/MoonKanin'
import { Rehtael } from '../authors/Rehtael'
import { Shay } from '../authors/Shay'
import ChoirHunterPortrait from '../../assets/img/hero/ChoirHunterPortrait.png'

export const ChoirHunter: ClassMod = {
    name: 'Choir Hunter',
    shortDescription: 'A wandering sister in search of knowledge.',
    hero: ChoirHunterPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2505955762'
        }
    ],
    authors: [
        {
            author: Shay,
            credits: ['Sound']
        },
        {
            author: MoonKanin,
            credits: ['Concept', 'Art', 'Animation', 'Writing', 'Design']
        },
        {
            author: Rehtael,
            credits: ['Design', 'Scripting', 'Trailer']
        }
    ]
}
