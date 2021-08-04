import Author from './Author'

import { Author_54NBB } from './authors/Author_54NBB'
import { Author_Cat } from './authors/Author_Cat'
import { Author_Cryptix } from './authors/Author_Cryptix'
import { Author_EbonyBetty } from './authors/Author_EbonyBetty'
import { Author_Exaelus } from './authors/Author_Exaelus'
import { Author_MarvinSeo } from './authors/Author_MarvinSeo'
import { Author_MoonKanin } from './authors/Author_MoonKanin'
import { Author_Rehtael } from './authors/Author_Rehtael'
import { Author_Roderick } from './authors/Author_Roderick'
import { Author_Ruin } from './authors/Author_Ruin'
import { Author_Sasiji } from './authors/Author_Sasiji'
import { Author_Shay } from './authors/Author_Shay'
import { Author_Snorlaxxo } from './authors/Author_Snorlaxxo'
import { Author_Terkmc } from './authors/Author_Terkmc'
import { Author_VoidSlime } from './authors/Author_VoidSlime'

export const AuthorIndex = authorIndex()

export function authorIndex(): Map<string, Author> {
    return new Map([
        ['Author_54NBB', Author_54NBB],
        ['Author_Cat', Author_Cat],
        ['Author_Cryptix', Author_Cryptix],
        ['Author_54NBB', Author_54NBB],
        ['Author_Cat', Author_Cat],
        ['Author_Cryptix', Author_Cryptix],
        ['Author_EbonyBetty', Author_EbonyBetty],
        ['Author_Exaelus', Author_Exaelus],
        ['Author_MarvinSeo', Author_MarvinSeo],
        ['Author_MoonKanin', Author_MoonKanin],
        ['Author_Rehtael', Author_Rehtael],
        ['Author_Roderick', Author_Roderick],
        ['Author_Ruin', Author_Ruin],
        ['Author_Sasiji', Author_Sasiji],
        ['Author_Shay', Author_Shay],
        ['Author_Snorlaxxo', Author_Snorlaxxo],
        ['Author_Terkmc', Author_Terkmc],
        ['Author_VoidSlime', Author_VoidSlime]
    ])
}
