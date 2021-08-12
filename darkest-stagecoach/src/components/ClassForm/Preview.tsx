import { Button, Typography } from '@material-ui/core'
import React from 'react'
import ClassMod from '../../data/ClassMod'
import { ClassCard } from '../ClassCard'
import { PreviewCloseButton, PreviewSection } from './styles'

interface Props {
    classInfo: ClassMod
    onClose: () => void
}

export const Preview = ({ classInfo, onClose }: Props) => {
    const [modalOpen, setModalOpen] = React.useState(false)

    return (
        <PreviewSection>
            <Typography variant="h3">Class Preview</Typography>
            <ClassCard
                classKey={classInfo}
                index={0}
                modalOpen={modalOpen}
                handleCloseModal={() => setModalOpen(false)}
                handleOpenModal={() => setModalOpen(true)}
            />
            <PreviewCloseButton>
                <Typography variant="body1">
                    <Button onClick={onClose} variant="outlined">
                        Close
                    </Button>
                </Typography>
            </PreviewCloseButton>
        </PreviewSection>
    )
}
