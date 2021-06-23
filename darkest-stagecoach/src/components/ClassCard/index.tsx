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
import { SynergyIcons } from '../SynergyIcon'

interface ClassCardProps {
    classMod: ClassMod
}

const AccordionTemplate: React.FunctionComponent<{
    expanded: boolean
    handleAccordionChange?: (
        event: React.ChangeEvent<{}>,
        expanded: boolean
    ) => void
    title: React.ReactNode
    children: React.ReactNode
}> = ({ expanded, handleAccordionChange, title, children }) => {
    return (
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
}

export const ClassCard: React.FunctionComponent<ClassCardProps> = ({
    classMod
}) => {
    const [accordion, setAccordion] = React.useState<boolean[]>([
        false,
        false,
        false
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
                <img
                    src={classMod.portrait}
                    alt="Hero Portrait"
                    style={{ margin: '0 1em 1em 0' }}
                />
                <Typography variant="h2" style={{ margin: '0 0 0.5em 0' }}>
                    {classMod.name}
                </Typography>
            </ClassCardBanner>
            <Typography variant="subtitle2">
                {classMod.description?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </Typography>
            <AccordionTemplate
                expanded={accordion[0]}
                title={'Sources'}
                handleAccordionChange={handleAccordionChange(0)}>
                <ModSources sources={classMod.sources} />
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[1]}
                title={'Creators'}
                handleAccordionChange={handleAccordionChange(1)}>
                <div style={{ width: '100%' }}>
                    {classMod.authors === undefined ? (
                        <Typography variant="body1">Unavailable</Typography>
                    ) : (
                        classMod.authors.map((auth, i) => (
                            <AuthorCard
                                key={`${auth.author.name}-${i}`}
                                author={auth.author}
                                credits={auth.credits}
                            />
                        ))
                    )}
                </div>
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[2]}
                title={'Base Stats'}
                handleAccordionChange={handleAccordionChange(2)}>
                <BaseStats stats={classMod.stats} />
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[3]}
                title={'Resistances'}
                handleAccordionChange={handleAccordionChange(3)}>
                <ResistancesSection res={classMod.resistances} />
            </AccordionTemplate>
        </MainModal>
    )
}
