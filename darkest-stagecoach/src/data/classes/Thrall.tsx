import ClassMod from '../ClassMod'
import ThrallPortrait from '../../assets/img/hero/ThrallPortrait.png'
import { Author_MarvinSeo } from '../authors/Author_MarvinSeo'

export const Thrall: ClassMod = {
    name: 'Thrall',
    description: [
        'A monster of a man, the Thrall can take a beating and deliver one twice as strong in return. The Thrall shines best in the thick of combat, where he can deliver devastating blows and punish any who try to defy him. Should the opponent be too far to engage in close combat, the Thrall can take a moment to hype himself up and charge back into the fray, trampling all who stand in his way.',
        "While the Thrall's body is unbreakable, his mind is fragile. Should the Thrall feel he is threatened, he'll quickly become Ferocious, entering a frenzy where friend and foe blur into one mass and the only priority is self preservation."
    ],
    portrait: ThrallPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1175904375'
        }
    ],
    authors: [
        {
            author: Author_MarvinSeo,
            credits: ['All']
        }
    ]
}
