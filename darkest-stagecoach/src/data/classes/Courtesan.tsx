import ClassMod from '../ClassMod'
import CourtesanPortrait from '../../assets/img/hero/CourtesanPortrait.png'
import { Author_Roderick } from '../authors/Author_Roderick'

export const Courtesan: ClassMod = {
    name: 'Courtesan',
    description: [
        'The Courtesan at last has arrived at the Hamlet! This backline support specializes in keeping her allies alive and debuffing foes whilst in human form. But when one needs damage rather than healing, she can transform into a potent backline, laying waste to enemies with short, but highly potent DoT.'
    ],
    portrait: CourtesanPortrait,
    sources: [
        {
            name: 'Steam',
            link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2508921150'
        }
    ],
    authors: [
        {
            author: Author_Roderick,
            credits: ['All']
        }
    ]
}
