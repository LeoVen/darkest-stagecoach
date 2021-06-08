import ClassMod from '../../ClassMod'
import { MoonKanin } from '../authors/MoonKanin'
import { Rehtael } from '../authors/Rehtael'
import { Shay } from '../authors/Shay'
import ChoirHunterHero from '../../assets/img/hero/ChoirHunterHero.jpg'

export const ChoirHunter: ClassMod = {
    name: 'Choir Hunter',
    image: ChoirHunterHero,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2505955762'
        }
    ],
    authors: [
        {
            author: Shay,
            credits: ['Sounds']
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
