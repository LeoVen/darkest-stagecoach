import { ClassModInfo } from '../ClassMod'

export const Class_abomination1: ClassModInfo = {
    description: [
        'Beaten, branded and imprisoned for untold decades, this furtive vagrant hides a terrible secret. The Eldritch poison coursing through his veins has given him unspeakable power, at a terrible cost. As his form changes, so too does his role in combat!'
    ],
    classType: {
        damage: 3,
        healer: 0,
        support: 1,
        tank: 1
    },
    synergy: new Set(['stun', 'blight', 'knockback', 'forward', 'debuff']),
}
