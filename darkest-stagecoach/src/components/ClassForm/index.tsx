import { Button, Modal } from '@material-ui/core'
import React from 'react'
import ClassMod, { defaultClassMod } from '../../data/ClassMod'
import { ClassInfoForm } from './ClassInfoForm'
import { Preview } from './Preview'
import { MainSection } from './styles'

export interface FormBind<T> {
    value: T
    valueChanged: (newValue: T) => void
}

export const ClassForm = () => {
    const [classInfo, setClassInfo] = React.useState<ClassMod>(
        defaultClassMod()
    )
    const [showPreview, setShowPreview] = React.useState<boolean>(false)

    const setName = (newName: string) => {
        setClassInfo({ ...classInfo, name: newName })
    }

    return (
        <MainSection>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Button onClick={() => setShowPreview(true)}>Preview</Button>
            </div>
            <ClassInfoForm
                nameBind={{
                    value: classInfo.name,
                    valueChanged: setName
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
