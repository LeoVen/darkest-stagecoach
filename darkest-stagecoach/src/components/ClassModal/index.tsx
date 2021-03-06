import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { AuthorCard } from '../AuthorCard'
import { MainModal, ClassCardBanner } from './styles'
import { ArrowDownIcon } from '../ArrowDownIcon'
import { ResistancesSection } from '../Resistances'
import { BaseStats } from '../BaseStats'
import { ModSources } from '../ModSources'
import { AuthorIndex } from '../../data/AuthorIndex'
import SkillsSection from '../Skills'
import { Image } from '../Image'

interface ClassModalProps {
    classMod: ClassMod
}

interface AccordionTemplateProps {
    expanded: boolean
    handleAccordionChange?: (
        event: React.ChangeEvent<{}>,
        expanded: boolean
    ) => void
    title: React.ReactNode
    children: React.ReactNode
}

const AccordionTemplate = ({
    expanded,
    handleAccordionChange,
    title,
    children
}: AccordionTemplateProps) => (
    <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <AccordionSummary
            className="cursor-pointer"
            expandIcon={<ArrowDownIcon />}>
            <Typography
                variant="h3"
                className="anchor"
                style={{ padding: '0.5em 1em' }}>
                {title}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
)

export const ClassModal = ({ classMod }: ClassModalProps) => {
    const [accordion, setAccordion] = React.useState<boolean[]>([
        false,
        false,
        false,
        false,
    ])

    const handleAccordionChange =
        (panel: number) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
            setAccordion([
                ...accordion.map((state, index) =>
                    index === panel ? isExpanded : state
                )
            ])
        }

    return (
        <MainModal>
            <ClassCardBanner>
                <Image
                    imgData={classMod.data.portrait}
                    style={{ margin: '0 1em 1em 0' }}
                />
                <Typography variant="h2" style={{ margin: '0 0 0.5em 0' }}>
                    {classMod.data.name}
                </Typography>
            </ClassCardBanner>
            <Typography variant="subtitle2">
                {classMod.info.description?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </Typography>
            {classMod.data.originalHero ? null : (
                <AccordionTemplate
                    expanded={accordion[0]}
                    title={'Sources'}
                    handleAccordionChange={handleAccordionChange(0)}>
                    <ModSources sources={classMod.data.sources.concat(classMod.info.sources ?? [])} />
                </AccordionTemplate>
            )}
            {classMod.data.originalHero ? null : (
                <AccordionTemplate
                    expanded={accordion[1]}
                    title={'Creators'}
                    handleAccordionChange={handleAccordionChange(1)}>
                    <div style={{ width: '100%' }}>
                        {classMod.info.authors === undefined ? (
                            <Typography variant="body1">Unavailable</Typography>
                        ) : (
                            classMod.info.authors.map((auth, i) => {
                                const author = AuthorIndex.get(auth.authorKey)
                                return (
                                    <AuthorCard
                                        key={`${auth.authorKey}-${i}`}
                                        author={author ?? auth.authorKey}
                                        credits={auth.credits}
                                    />
                                )
                            })
                        )}
                    </div>
                </AccordionTemplate>
            )}
            <AccordionTemplate
                expanded={accordion[2]}
                title={'Base Stats'}
                handleAccordionChange={handleAccordionChange(2)}>
                <BaseStats stats={classMod.data.stats}
                           icons={classMod.data.equip} />
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[3]}
                title={'Resistances'}
                handleAccordionChange={handleAccordionChange(3)}>
                <ResistancesSection res={classMod.data.resistances} />
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[4]}
                title={'Skills'}
                handleAccordionChange={handleAccordionChange(4)}>
                    <SkillsSection skills={classMod.data.skills} />
            </AccordionTemplate>
        </MainModal>
    )
}
