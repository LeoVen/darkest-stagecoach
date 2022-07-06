import React from 'react'
import {
    Fade,
    Modal,
} from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { ModalWrapper } from '../../styles'
import { ModalCloseButton } from '../ModalCloseButton'
import { ClassModal } from '.'

interface ClassModalWrapperProps {
    classMod: ClassMod | undefined
    handleCloseModal: () => void
}

export const ClassModalWrapper = ({
    classMod,
    handleCloseModal,
}: ClassModalWrapperProps) => {
    let modalOpen = classMod !== undefined

    return (
        <Modal open={modalOpen} onClose={handleCloseModal}>
            <Fade in={modalOpen} timeout={400} exit={false}>
                <ModalWrapper>
                    <ModalCloseButton onClick={handleCloseModal} />
                    {classMod &&
                    <ClassModal
                        key={`${classMod.data.name}-card-${classMod}`}
                        classMod={classMod}
                    />}
                </ModalWrapper>
            </Fade>
        </Modal>
    )
}
