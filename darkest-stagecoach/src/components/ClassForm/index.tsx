import { Button, Modal, Typography } from '@material-ui/core'
import React from 'react'
import ClassMod, { defaultClassMod } from '../../data/ClassMod'
import { ClassInfoForm } from './ClassInfoForm'
import { Preview } from './Preview'
import { MainSection } from './styles'

export interface FormBind<T> {
    value: T
    valueChanged: (newValue: T) => void
}

interface ClassFormProps {
    classInfo: ClassMod
    handleClassInfoChange: (classInfo: ClassMod) => void
}

export const ClassForm = ({
    classInfo,
    handleClassInfoChange
}: ClassFormProps) => {
    const [showPreview, setShowPreview] = React.useState<boolean>(false)

    const setName = (newName: string) =>
        handleClassInfoChange({ ...classInfo, name: newName })
    const setReligious = (newValue: boolean) =>
        handleClassInfoChange({ ...classInfo, religious: newValue })
    const setTransform = (newValue: boolean) =>
        handleClassInfoChange({ ...classInfo, transform: newValue })

    return (
        <MainSection>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Typography variant="body1">
                    <Button
                        onClick={() => setShowPreview(true)}
                        variant="outlined">
                        Preview
                    </Button>
                </Typography>
            </div>
            <ClassInfoForm
                nameBind={{
                    value: classInfo.name,
                    valueChanged: setName
                }}
                religiousBind={{
                    value: classInfo.religious || false,
                    valueChanged: setReligious
                }}
                transformBind={{
                    value: classInfo.transform || false,
                    valueChanged: setTransform
                }}
            />
            <Modal open={showPreview} onClose={() => setShowPreview(false)}>
                <Preview
                    classInfo={classInfo}
                    onClose={() => setShowPreview(false)}
                />
            </Modal>
        </MainSection>
    )
}
