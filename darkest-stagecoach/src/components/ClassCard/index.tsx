import React from 'react'
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
    CardInner,
    CardWrapper,
    ClassName,
    HeroCard,
    ImageAndIcons,
    ImageAndPositions,
    TopIcons,
    TopLeftIcons
} from './styles'

interface ClassCardProps {
    classKey: string
    handleOpenModal: (classMod: ClassMod) => void
}

// Memoized: a card only re-renders when its class or the handler changes, not
// on every App state change (e.g. opening the modal)
export const ClassCard = React.memo(function ClassCard({
    classKey,
    handleOpenModal
}: ClassCardProps) {
    let classInfo: ClassMod = ClassModIndex.get(classKey) as ClassMod

    return (
        <CardWrapper>
            <CardInner>
                <HeroCard
                    elevation={5}
                    onClick={() => handleOpenModal(classInfo)}>
                    <ImageAndIcons>
                        <ClassProfileIcons classInfo={classInfo} />
                        <ImageAndPositions>
                            <Image
                                imgData={classInfo.data.portrait}
                                style={{ margin: '1rem 0 0 0' }}
                            />
                            <Positions skills={classInfo.data.skills} />
                        </ImageAndPositions>
                    </ImageAndIcons>
                    <ClassName variant="h3">{classInfo.data.name}</ClassName>
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
                    <SynergyIcons synergies={classInfo.synergies} />
                </BottomIcons>
            </CardInner>
        </CardWrapper>
    )
})
