import { Typography } from '@material-ui/core'
import { ClassForm } from '../ClassForm'
import { MainSection } from './styles'

export const UploadClass = () => {
    return (
        <MainSection>
            <Typography variant="h2" style={{ marginBottom: '1rem' }}>
                Add new class
            </Typography>
            <ClassForm />
        </MainSection>
    )
}
