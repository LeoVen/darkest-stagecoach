import ClassMod from '../ClassMod'
import RevenantPortrait from '../../assets/img/hero/RevenantPortrait.png'
import { Author_Exaelus } from '../authors/Author_Exaelus'

export const Revenant: ClassMod = {
    name: 'Revenant',
    description: [
        'The Revenant is primarly a tank that is capable of doing really decent damage once his enemies start to bleed. He can heal and transfer all bleeds from all enemies to a single target. He also provides a skeleton key when embarking on a mission.'
    ],
    portrait: RevenantPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=913178378'
        }
    ],
    authors: [
        {
            author: Author_Exaelus,
            credits: ['All']
        }
    ]
}
