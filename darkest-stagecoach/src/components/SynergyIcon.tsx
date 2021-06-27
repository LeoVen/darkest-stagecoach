import bleed from '../assets/img/stats/bleed.png'
import blight from '../assets/img/stats/blight.png'
import block from '../assets/img/stats/block.png'
import buff from '../assets/img/stats/buff.png'
import cure from '../assets/img/stats/cure.png'
import debuff from '../assets/img/stats/debuff.png'
import deStealth from '../assets/img/stats/deStealth.png'
import guard from '../assets/img/stats/guard.png'
import guardBreak from '../assets/img/stats/guardBreak.png'
import heal from '../assets/img/stats/heal.png'
import mark from '../assets/img/stats/mark.png'
import move from '../assets/img/stats/move.png'
import moveSelf from '../assets/img/stats/moveSelf.png'
import reflect from '../assets/img/stats/reflect.png'
import riposte from '../assets/img/stats/riposte.png'
import stealth from '../assets/img/stats/stealth.png'
import stress from '../assets/img/stats/virtue.png'
import stun from '../assets/img/stats/stun.png'
import { Synergy } from '../Types'
import { CSSProperties } from 'react'
import { Tooltip } from '@material-ui/core'

interface ResistanceIconProps {
    icon: Synergy
    style?: CSSProperties
}

const iconMap: Record<Synergy, string> = {
    bleed: bleed,
    blight: blight,
    block: block,
    buff: buff,
    cure: cure,
    debuff: debuff,
    deStealth: deStealth,
    guard: guard,
    guardBreak: guardBreak,
    heal: heal,
    mark: mark,
    move: move,
    moveSelf: moveSelf,
    reflect: reflect,
    riposte: riposte,
    stealth: stealth,
    stress: stress,
    stun: stun
}

const iconDescription: Record<Synergy, string> = {
    bleed: 'Causes bleed DoT',
    blight: 'Causes blight DoT',
    block: 'Add block ally',
    buff: 'Buffs ally',
    cure: 'Cures bleed/blight',
    debuff: 'Debuffs enemy',
    deStealth: 'Bypass or de-stealth enemy',
    guard: 'Guard ally',
    guardBreak: 'Breaks enemy guard',
    heal: 'Heal ally HP',
    mark: 'Mark enemy',
    move: 'Moves enemy',
    moveSelf: 'Moves around party',
    reflect: 'Adds damage reflection',
    riposte: 'Activates riposte',
    stealth: 'Activates stealth',
    stress: 'Heals stress or cure horror',
    stun: 'Stuns enemy'
}

export const SynergyIcon = (props: ResistanceIconProps) => {
    return (
        <Tooltip
            title={iconDescription[props.icon]}
            placement="top"
            arrow={true}>
            <img src={iconMap[props.icon]} alt="Icon" style={props.style} />
        </Tooltip>
    )
}

export const SynergyIcons = (props: { synergies?: Synergy[] }) => {
    return (
        <div>
            {props.synergies === undefined ? (
                <></>
            ) : (
                props.synergies
                    .sort((a, b) => a.localeCompare(b))
                    .map(s => {
                        return <SynergyIcon key={`${s}-synergy`} icon={s} />
                    })
            )}
        </div>
    )
}
