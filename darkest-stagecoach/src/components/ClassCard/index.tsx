import { Fade, Modal, Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { classModIndex } from '../../data/ClassModIndex'
import { ModalWrapper } from '../../styles'
import { ClassModal } from '../ClassModal'
import { ClassTypeIcons } from '../ClassTypeIcons'
import { ModalCloseButton } from '../ModalCloseButton'
import { Positions } from '../Positions'
import { SynergyIcons } from '../SynergyIcon'
import { BottomIcons, HeroCard, ImageAndPositions, TopIcons } from './styles'

interface ClassCardProps {
    classKey: string
    index: number
    handleOpenModal: (classMod: ClassMod) => void
    handleCloseModal: () => void
    selectedClass?: ClassMod
}

export const ClassCard = ({
    classKey,
    index,
    handleOpenModal,
    handleCloseModal,
    selectedClass
}: ClassCardProps) => {
    let classInfo = classModIndex.get(classKey) as ClassMod
    return (
        <div
            key={`${classInfo.name}-${index}`}
            style={{ position: 'relative' }}>
            <HeroCard elevation={5} onClick={() => handleOpenModal(classInfo)}>
                <ImageAndPositions>
                    <img
                        src={classInfo.portrait}
                        style={{
                            margin: '1rem 1rem 0 1rem',
                            maxWidth: 'calc(100vw - 6em)'
                        }}
                        alt="Hero Portrait"
                    />
                    <Positions
                        pos={classInfo.position}
                        totalSkills={classInfo.totalSkills}
                    />
                </ImageAndPositions>
                <Typography variant="h3">{classInfo.name}</Typography>
            </HeroCard>
            <TopIcons>
                {classInfo.classType === undefined ? null : (
                    <ClassTypeIcons type={classInfo.classType} />
                )}
            </TopIcons>
            <BottomIcons>
                <SynergyIcons synergies={classInfo.synergy} />
            </BottomIcons>
            <Modal
                open={
                    selectedClass !== undefined &&
                    selectedClass.name === classInfo.name
                }
                onClose={handleCloseModal}>
                <Fade
                    in={
                        selectedClass !== undefined &&
                        selectedClass.name === classInfo.name
                    }
                    timeout={400}
                    exit={false}>
                    <ModalWrapper
                        style={{
                            width: '80vw',
                            maxWidth: '1280px'
                        }}>
                        <ModalCloseButton onClick={handleCloseModal} />
                        <ClassModal
                            key={`${classInfo.name}-card-${index}`}
                            classMod={classInfo}
                        />
                    </ModalWrapper>
                </Fade>
            </Modal>
        </div>
    )
}
