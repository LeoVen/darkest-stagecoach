import { PreferredPositions } from '../../Types'
import { Circle, MainSection } from './styles'

interface Props {
    pos?: PreferredPositions
    totalSkills?: number
}

// Bad, Ok, Good
// Assuming 7 total skills:
// Bad :   0 skills in that position
// Ok  : 1-3 skills in that position
// Good: 4-N skills in that position
export const circleColors = (ratio?: number) => {
    if (ratio === undefined) return '#444444'
    else if (ratio <= 0.0) return '#f40006'
    else if (ratio <= 3 / 7) return '#f0ef5a'
    return '#4fcb4f'
}

export const extraCss = (ratio: number) => {
    if (ratio <= 0.0) return '#f40006'
    else if (ratio <= 3 / 7) return '#f0ef5a'
    return '#4fcb4f'
}

const circle = (skills: number, total?: number) => {
    let ratio = total === undefined ? undefined : skills / total
    return (
        <>
            <Circle
                color={circleColors(
                    total === undefined ? undefined : skills / total
                )}
                blur={ratio !== undefined && ratio === 1 ? true : false}>
                {skills}
            </Circle>
        </>
    )
}

export const Positions = ({ pos, totalSkills }: Props) => {
    if (pos === undefined) pos = [0, 0, 0, 0]

    return (
        <MainSection>
            {pos.map(v => circle(v, totalSkills as number))}
        </MainSection>
    )
}
