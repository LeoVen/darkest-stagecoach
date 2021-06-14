import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Paper,
    Typography
} from '@material-ui/core'
import ClassMod from '../../data/ClassMod'
import { AuthorCard } from '../AuthorCard'
import { ClassCardBanner } from './styles'
import { ArrowDownIcon } from '../ArrowDownIcon'
import { StatsSection } from '../StatsSection'

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
            style={{ backgroundColor: 'var(--bg-primary)' }}>
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
        <Paper
            style={{
                padding: '2em'
            }}>
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
                <div style={{ width: '100%' }}>
                    <Typography variant="subtitle2">
                        You can find this class mod in the following places
                    </Typography>
                    <div style={{ paddingLeft: '1em' }}>
                        {classMod.sources.map((src, i) => (
                            <a
                                key={`${src.name}-${i}`}
                                href={src.link}
                                target="_blank"
                                rel="noreferrer">
                                {src.name}
                            </a>
                        ))}
                    </div>
                </div>
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[1]}
                title={'Creators'}
                handleAccordionChange={handleAccordionChange(1)}>
                <div style={{ width: '100%' }}>
                    {classMod.authors.map((auth, i) => (
                        <AuthorCard
                            key={`${auth.author.name}-${i}`}
                            author={auth.author}
                            credits={auth.credits}
                        />
                    ))}
                </div>
            </AccordionTemplate>
            <AccordionTemplate
                expanded={accordion[2]}
                title={'Resistances'}
                handleAccordionChange={handleAccordionChange(2)}>
                <StatsSection res={classMod.resistances} />
            </AccordionTemplate>
        </Paper>
    )
}
