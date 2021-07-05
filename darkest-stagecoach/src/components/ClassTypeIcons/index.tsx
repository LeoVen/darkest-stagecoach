import { Tooltip } from '@material-ui/core'
import { ClassModType, ClassModTypeValue } from '../../Types'
import { ClassTypeSvg } from '../Svg/ClassTypeSvg'
import { IconContainer, MainSection } from './styles'

interface Props {
    type: Record<ClassModType, ClassModTypeValue>
}

export const ClassTypeIcons = ({ type }: Props) => {
    const colorMap = [
        'var(--font-disabled)',
        '#cd7f32',
        '#c0c0c0',
        '#ffad00',
        '#00d7a2'
    ]
    const textMap = ['#ffffff', '#cd7f32', '#c0c0c0', '#ffad00', '#00d7a2']
    const idxMap: ClassModType[] = ['damage', 'healer', 'support', 'tank']
    const sizeMap = ['17px', '20px', '20px', '20px']
    const padMap = ['0.4rem', '0.3rem', '0.3rem', '0.3rem']
    const descMap = [
        ['Damage:', 'How good at dealing damage'],
        ['Healer:', 'How good at healing HP and stress'],
        ['Support:', 'How good at overall battle benefits'],
        ['Tank:', 'How good at diverting and tanking damage']
    ]

    const template = (idx: number, value: ClassModTypeValue) => {
        return (
            <Tooltip
                key={`${idx}-${idxMap[idx]}`}
                title={
                    <>
                        <span style={{ color: textMap[value] }}>
                            {descMap[idx][0]}
                        </span>{' '}
                        {descMap[idx][1]}
                    </>
                }
                placement="top"
                arrow={true}>
                <IconContainer
                    pad={padMap[idx]}
                    dim={sizeMap[idx]}
                    color={colorMap[value]}>
                    {ClassTypeSvg({
                        type: idxMap[idx],
                        fill: colorMap[value],
                        width: sizeMap[idx],
                        height: sizeMap[idx]
                    })}
                </IconContainer>
            </Tooltip>
        )
    }

    return (
        <MainSection>
            {[type.damage, type.healer, type.support, type.tank].map((v, i) =>
                template(i, v)
            )}
        </MainSection>
    )
}
