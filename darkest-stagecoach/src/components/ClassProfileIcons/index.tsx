import { Tooltip } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { ProfileType } from '../../Types'
import { ProfileSvg } from '../Svg/ProfileSvg'
import { MainSection } from './styles'

interface Props {
    classInfo: ClassMod
}

export const ClassProfileIcons = ({ classInfo }: Props) => {
    const colorMap: Map<ProfileType, string> = new Map([
        ['religious', '#fdf8c7'],
        ['transform', '#798d45']
    ])
    const tooltipMap: Map<ProfileType, string> = new Map([
        ['religious', 'Religious'],
        ['transform', 'Transforms']
    ])

    const template = (type: ProfileType) => {
        return (
            <Tooltip
                key={`${type}-profile`}
                title={tooltipMap.get(type) as string}
                placement="top"
                arrow={true}>
                <div>
                    <ProfileSvg
                        type={type}
                        width={'1rem'}
                        height={'1rem'}
                        fill={colorMap.get(type) as string}
                    />
                </div>
            </Tooltip>
        )
    }

    return (
        <MainSection>
            {classInfo.religious ? template('religious') : null}
            {classInfo.transform ? template('transform') : null}
        </MainSection>
    )
}
