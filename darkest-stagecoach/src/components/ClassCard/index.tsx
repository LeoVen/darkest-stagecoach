import { Fade, Modal, Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { ClassModIndex } from '../../data/ClassModIndex'
import { Portrait } from '../../data/Portrait'
import { ModalWrapper } from '../../styles'
import { ClassModal } from '../ClassModal'
import { ClassProfileIcons } from '../ClassProfileIcons'
import { ClassTypeIcons } from '../ClassTypeIcons'
import { ModalCloseButton } from '../ModalCloseButton'
import { OriginalHeroIcon } from '../OriginalHeroIcon'
import { Positions } from '../Positions'
import { SynergyIcons } from '../SynergyIcon'
import {
    BottomIcons,
    HeroCard,
    ImageAndIcons,
    ImageAndPositions,
    TopIcons,
    TopLeftIcons
} from './styles'

interface ClassCardProps {
    classKey: string
    index: number
    modalOpen: boolean
    handleOpenModal: (classMod: ClassMod) => void
    handleCloseModal: () => void
}

export const ClassCard = ({
    classKey,
    index,
    modalOpen,
    handleOpenModal,
    handleCloseModal
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
                        <Portrait
                            portrait={classInfo.data.portrait}
                            style={{ margin: '1rem 0 0 0' }}
                        />
                        <Positions
                            skills={classInfo.data.skills}
                        />
                    </ImageAndPositions>
                </ImageAndIcons>
                <Typography variant="h3" style={{ marginLeft: '1rem' }}>
                    {classInfo.data.name}
                </Typography>
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
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Fade in={modalOpen} timeout={400} exit={false}>
                    <ModalWrapper
                        style={{
                            width: '80vw',
                            maxWidth: '1280px'
                        }}>
                        <ModalCloseButton onClick={handleCloseModal} />
                        <ClassModal
                            key={`${classInfo.data.name}-card-${index}`}
                            classMod={classInfo}
                        />
                    </ModalWrapper>
                </Fade>
            </Modal>
        </div>
    )
}
