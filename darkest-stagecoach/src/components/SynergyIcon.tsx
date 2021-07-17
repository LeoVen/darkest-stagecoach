import bleed from '../assets/img/stats/bleed.png'
import blight from '../assets/img/stats/blight.png'
import block from '../assets/img/stats/block.png'
import buff from '../assets/img/stats/buff.png'
import clear from '../assets/img/stats/buffPlus.png'
import cure from '../assets/img/stats/cure.png'
import debuff from '../assets/img/stats/debuff.png'
import deStealth from '../assets/img/stats/deStealth.png'
import guard from '../assets/img/stats/guard.png'
import guardBreak from '../assets/img/stats/guardBreak.png'
import heal from '../assets/img/stats/heal.png'
import mark from '../assets/img/stats/mark.png'
import shuffle from '../assets/img/stats/shuffle.png'
import knockback from '../assets/img/stats/knockback.png'
import pull from '../assets/img/stats/pull.png'
import forward from '../assets/img/stats/forward.png'
import back from '../assets/img/stats/back.png'
import reflect from '../assets/img/stats/reflect.png'
import riposte from '../assets/img/stats/riposte.png'
import stealth from '../assets/img/stats/stealth.png'
import stress from '../assets/img/stats/virtue.png'
import stun from '../assets/img/stats/stun.png'
import { Synergy } from '../Types'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@material-ui/core'
import { CSSProperties } from 'react'
import { sortSynergies } from '../Synergy'

interface SynergyIconProps {
    icon: Synergy
    style?: CSSProperties
}

const allSynergies: Array<Synergy> = [
    'bleed',
    'blight',
    'block',
    'buff',
    'clear',
    'cure',
    'debuff',
    'deStealth',
    'guard',
    'guardBreak',
    'heal',
    'mark',
    'shuffle',
    'knockback',
    'pull',
    'forward',
    'back',
    'reflect',
    'riposte',
    'stealth',
    'stress',
    'stun'
]

const iconMap: Record<Synergy, string> = {
    bleed: bleed,
    blight: blight,
    block: block,
    buff: buff,
    clear: clear,
    cure: cure,
    debuff: debuff,
    deStealth: deStealth,
    guard: guard,
    guardBreak: guardBreak,
    heal: heal,
    mark: mark,
    shuffle: shuffle,
    knockback: knockback,
    pull: pull,
    forward: forward,
    back: back,
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
    clear: 'Clears stun, debuff or mark',
    cure: 'Cures bleed/blight',
    debuff: 'Debuffs enemy',
    deStealth: 'Bypass or de-stealth enemy',
    guard: 'Guard ally or self',
    guardBreak: 'Breaks enemy guard',
    heal: 'Heal ally HP',
    mark: 'Mark enemy',
    shuffle: 'Shuffle enemy',
    knockback: 'Knockback enemy',
    pull: 'Pull enemy',
    forward: 'Moves forward',
    back: 'Moves back',
    reflect: 'Adds damage reflection',
    riposte: 'Activates riposte',
    stealth: 'Activates stealth',
    stress: 'Heals stress or cure horror',
    stun: 'Stuns enemy'
}

export const SynergyIcon = ({ icon, style }: SynergyIconProps) => {
    return (
        <Tooltip title={iconDescription[icon]} placement="top" arrow={true}>
            <img src={iconMap[icon]} alt="Icon" style={style} />
        </Tooltip>
    )
}

export const SynergyIcons = (props: { synergies?: Synergy[] }) => {
    return (
        <div>
            {props.synergies === undefined ? (
                <></>
            ) : (
                sortSynergies(props.synergies).map(s => {
                    return <SynergyIcon key={`${s}-synergy`} icon={s} />
                })
            )}
        </div>
    )
}

export const SynergyIconsTable = () => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Icon</TableCell>
                        <TableCell>The class can...</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allSynergies.map(syn => (
                        <TableRow key={`table-${syn}`}>
                            <TableCell align="center">
                                <img src={iconMap[syn]} alt="Icon" />
                            </TableCell>
                            <TableCell>
                                <Typography variant="body1">
                                    {iconDescription[syn]}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
