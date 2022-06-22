import { ClassModInfo } from '../ClassMod'

import { Class_2andb1 } from './Class_2andb1'
import { Class_abomination1 } from './Class_abomination1'
import { Class_antiquarian1 } from './Class_antiquarian1'
import { Class_arbalest1 } from './Class_arbalest1'
import { Class_bounty_hunter1 } from './Class_bounty_hunter1'
import { Class_choir_hunter1 } from './Class_choir_hunter1'
import { Class_commandant1 } from './Class_commandant1'
import { Class_courtesan1 } from './Class_courtesan1'
import { Class_crusader1 } from './Class_crusader1'
import { Class_duchess1 } from './Class_duchess1'
import { Class_flagellant1 } from './Class_flagellant1'
import { Class_golem1 } from './Class_golem1'
import { Class_grave_robber1 } from './Class_grave_robber1'
import { Class_hellion1 } from './Class_hellion1'
import { Class_highwayman1 } from './Class_highwayman1'
import { Class_houndmaster1 } from './Class_houndmaster1'
import { Class_janissary1 } from './Class_janissary1'
import { Class_jester1 } from './Class_jester1'
import { Class_lamia1 } from './Class_lamia1'
import { Class_leper1 } from './Class_leper1'
import { Class_man_at_arms1 } from './Class_man_at_arms1'
import { Class_musketeer1 } from './Class_musketeer1'
import { Class_occultist1 } from './Class_occultist1'
import { Class_plague_doctor1 } from './Class_plague_doctor1'
import { Class_revenant1 } from './Class_revenant1'
import { Class_shieldbreaker1 } from './Class_shieldbreaker1'
import { Class_thrall1 } from './Class_thrall1'
import { Class_vestal1 } from './Class_vestal1'
import { Class_wraith_ms1 } from './Class_wraith_ms1'

export const ClassModIndex = classModInfoIndex()

export function classModInfoIndex(): Map<string, ClassModInfo> {
    return new Map([
        ['Class_2andb1', Class_2andb1],
        ['Class_abomination1', Class_abomination1],
        ['Class_antiquarian1', Class_antiquarian1],
        ['Class_arbalest1', Class_arbalest1],
        ['Class_bounty_hunter1', Class_bounty_hunter1],
        ['Class_choir_hunter1', Class_choir_hunter1],
        ['Class_commandant1', Class_commandant1],
        ['Class_courtesan1', Class_courtesan1],
        ['Class_crusader1', Class_crusader1],
        ['Class_duchess1', Class_duchess1],
        ['Class_flagellant1', Class_flagellant1],
        ['Class_golem1', Class_golem1],
        ['Class_grave_robber1', Class_grave_robber1],
        ['Class_hellion1', Class_hellion1],
        ['Class_highwayman1', Class_highwayman1],
        ['Class_houndmaster1', Class_houndmaster1],
        ['Class_janissary1', Class_janissary1],
        ['Class_jester1', Class_jester1],
        ['Class_lamia1', Class_lamia1],
        ['Class_leper1', Class_leper1],
        ['Class_man_at_arms1', Class_man_at_arms1],
        ['Class_musketeer1', Class_musketeer1],
        ['Class_occultist1', Class_occultist1],
        ['Class_plague_doctor1', Class_plague_doctor1],
        ['Class_revenant1', Class_revenant1],
        ['Class_shieldbreaker1', Class_shieldbreaker1],
        ['Class_thrall1', Class_thrall1],
        ['Class_vestal1', Class_vestal1],
        ['Class_wraith_ms1', Class_wraith_ms1],
    ])
}
