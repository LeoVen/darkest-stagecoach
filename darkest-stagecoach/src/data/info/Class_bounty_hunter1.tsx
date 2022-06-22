import { ClassModInfo } from '../ClassMod'

export const Class_bounty_hunter1: ClassModInfo = {
    description: [
        "A brutally efficient single-target executioner and crowd control specialist. For the Bounty Hunter, planning is key - mark targets for bonus damage or look for opportunities to capitalize on a stunned foe. He can also wreak havoc on an enemy party's order using his grappling hook, flashbangs and powerful uppercut."
    ],
    classType: {
        damage: 3,
        healer: 0,
        support: 2,
        tank: 0
    },
    synergy: new Set(['mark', 'stun', 'pull', 'bleed', 'knockback', 'shuffle']),
}
