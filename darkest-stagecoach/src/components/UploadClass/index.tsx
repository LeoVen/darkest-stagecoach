import { Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { ClassForm } from '../ClassForm'
import { MainSection } from './styles'

interface UploadClassProps {
    classInfo: ClassMod
    handleClassInfoChange: (classInfo: ClassMod) => void
}

export const UploadClass = ({
    classInfo,
    handleClassInfoChange
}: UploadClassProps) => {
    return (
        <MainSection>
            <Typography variant="h2" style={{ marginBottom: '1rem' }}>
                Add new class
            </Typography>
            <ClassForm
                classInfo={classInfo}
                handleClassInfoChange={handleClassInfoChange}
            />
        </MainSection>
    )
}
