import { Button, ButtonGroup, Modal, Typography } from '@material-ui/core'
import React from 'react'
import ClassMod, { defaultClassMod } from '../../data/ClassMod'
import { SnackbarContext } from '../../services/SnackbarService'
import { ConfirmModal } from '../ConfirmModal'
import { ClassInfoForm } from './ClassInfoForm'
import { Preview } from './Preview'
import { MainSection } from './styles'

interface ClassFormProps {
    classInfo: ClassMod
    handleClassInfoChange: (classInfo: ClassMod) => void
}

export const ClassForm = ({
    classInfo,
    handleClassInfoChange
}: ClassFormProps) => {
    const [showPreview, setShowPreview] = React.useState<boolean>(false)
    const [showConfirmModal, setShowConfirmModal] =
        React.useState<boolean>(false)

    const snackbarContext = React.useContext(SnackbarContext)

    const handleResetData = () => {
        setShowConfirmModal(false)
        handleClassInfoChange(defaultClassMod())
    }

    const setName = (newName: string) =>
        handleClassInfoChange({ ...classInfo, name: newName })
    const setReligious = (newValue: boolean) =>
        handleClassInfoChange({ ...classInfo, religious: newValue })
    const setTransform = (newValue: boolean) =>
        handleClassInfoChange({ ...classInfo, transform: newValue })

    return (
        <MainSection>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Typography variant="body1" component="span">
                    <ButtonGroup>
                        <Button
                            onClick={() => setShowConfirmModal(true)}
                            variant="outlined">
                            Reset
                        </Button>
                        <Button
                            onClick={() => setShowPreview(true)}
                            variant="outlined">
                            Preview
                        </Button>
                        <Button
                            onClick={() =>
                                snackbarContext?.setMessage('Coming Soon')
                            }
                            variant="outlined">
                            File
                        </Button>
                    </ButtonGroup>
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
                <div>
                    <Preview
                        classInfo={classInfo}
                        onClose={() => setShowPreview(false)}
                    />
                </div>
            </Modal>
            <ConfirmModal
                open={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleResetData}
                title={'Reset Data'}>
                <Typography>
                    This will reset all values, including the ones created
                    automatically
                </Typography>
            </ConfirmModal>
        </MainSection>
    )
}
