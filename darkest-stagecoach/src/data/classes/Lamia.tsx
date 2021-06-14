import ClassMod from '../ClassMod'
import { Author_MarvinSeo } from '../authors/Author_MarvinSeo'
import LamiaPortrait from '../../assets/img/hero/LamiaPortrait.png'

export const Lamia: ClassMod = {
    name: 'Lamia',
    description: ['Beauty is remembered forever...'],
    portrait: LamiaPortrait,
    religious: false,
    transform: true,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1130829365'
        },
        {
            name: 'Nexus',
            link: 'https://www.nexusmods.com/darkestdungeon/mods/501'
        }
    ],
    authors: [
        {
            author: Author_MarvinSeo,
            credits: ['All']
        }
    ]
}
