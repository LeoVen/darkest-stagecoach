import { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { ClassForm } from '../ClassForm'
import { ButtonsGroup, MainSection } from './styles'
import { AuthorForm } from '../AuthorForm'
import Author from '../../data/Author'

interface UploadSectionProps {
    classInfo: ClassMod
    handleClassInfoChange: (classInfo: ClassMod) => void
    authorInfo: Author
    handleAuthorInfoChange: (authorInfo: Author) => void
}

export const UploadSection = ({
    classInfo,
    handleClassInfoChange,
    authorInfo,
    handleAuthorInfoChange,
}: UploadSectionProps) => {
    const [section, setSection] = useState(0)

    if (section === 0) {
        return (
            <MainSection
            >
            <Typography variant='h2' style={{ marginBottom: '1rem' }}>
                {classInfo.key === '' ? 'Add new class' : `Edit class ${classInfo.name}`}
            </Typography>
                <ButtonsGroup>
                    <Button variant='outlined' onClick={() => setSection(1)}>Add or Edit Class</Button>
                    <Button variant='outlined' onClick={() => setSection(2)}>Add or Edit Author</Button>
                </ButtonsGroup>
            </MainSection>
        )
    } else if (section === 1) {
        return (
            <MainSection
            >

                <Typography variant='h2' style={{ marginBottom: '1rem' }}>
                    {classInfo.key === '' ? 'Add new class' : `Edit class ${classInfo.name}`}
                {<Button variant='outlined' onClick={() => setSection(0)}>Return</Button>}
                </Typography>
                <ClassForm
                    classInfo={classInfo}
                    handleClassInfoChange={handleClassInfoChange}
                />
            </MainSection>
        )
    } else if (section === 2) {
        return (
            <MainSection            >
            <Typography variant='h2' style={{ marginBottom: '1rem' }}>
                {classInfo.key === '' ? 'Add new class' : `Edit class ${classInfo.name}`}
                {<Button variant='outlined' onClick={() => setSection(0)}>Return</Button>}
            </Typography>
                <AuthorForm
                    authorInfo={authorInfo}
                    handleAuthorInfoChange={handleAuthorInfoChange}
                />
            </MainSection>
        )
    }

    return (
        <MainSection>
            <Typography variant='h2'>
                Error
            </Typography>
        </MainSection>
    )
}
