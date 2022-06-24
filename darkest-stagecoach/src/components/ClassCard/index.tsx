import ClassMod from '../../data/ClassMod'
import { ClassModIndex } from '../../data/ClassModIndex'
import { ClassProfileIcons } from '../ClassProfileIcons'
import { ClassTypeIcons } from '../ClassTypeIcons'
import { Image } from '../Image'
import { OriginalHeroIcon } from '../OriginalHeroIcon'
import { Positions } from '../Positions'
import { SynergyIcons } from '../SynergyIcon'
import {
    BottomIcons,
    ClassName,
    HeroCard,
    ImageAndIcons,
    ImageAndPositions,
    TopIcons,
    TopLeftIcons
} from './styles'

interface ClassCardProps {
    classKey: string
    index: number
    handleOpenModal: (classMod: ClassMod) => void
}

export const ClassCard = ({
    classKey,
    index,
    handleOpenModal,
}: ClassCardProps) => {
    let classInfo: ClassMod = ClassModIndex.get(classKey) as ClassMod

    return (
        <div
            key={`${classInfo.data.name}-${index}`}
            style={{ position: 'relative' }}>
            <HeroCard elevation={5} onClick={() => handleOpenModal(classInfo)}>
                <ImageAndIcons>
                    <ClassProfileIcons classInfo={classInfo} />
                    <ImageAndPositions>
                        <Image
                            imgData={classInfo.data.portrait}
                            style={{ margin: '1rem 0 0 0' }}
                        />
                        <Positions
                            skills={classInfo.data.skills}
                        />
                    </ImageAndPositions>
                </ImageAndIcons>
                <ClassName variant='h3'>
                    {classInfo.data.name}
                </ClassName>
            </HeroCard>
            <TopLeftIcons>
                {classInfo.data.originalHero ? <OriginalHeroIcon /> : null}
            </TopLeftIcons>
            <TopIcons>
                {!!classInfo.info.classType && (
                    <ClassTypeIcons type={classInfo.info.classType} />
                )}
            </TopIcons>
            <BottomIcons>
                <SynergyIcons synergies={classInfo.info.synergy} />
            </BottomIcons>
        </div>
    )
}
