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

interface ClassCardProps {
    classMod: ClassMod
}

export const ClassCard: React.FunctionComponent<ClassCardProps> = ({
    classMod
}) => {
    const [accordion, setAccordion] = React.useState<number>(-1)

    const handleAccordionChange =
        (panel: number) => (_: React.ChangeEvent<{}>, isExpanded: boolean) => {
            setAccordion(isExpanded ? panel : -1)
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
            <Accordion
                expanded={accordion === 0}
                onChange={handleAccordionChange(0)}>
                <AccordionSummary
                    className="cursor-pointer"
                    expandIcon={<ArrowDownIcon />}>
                    <Typography
                        variant="h3"
                        className="anchor"
                        style={{ padding: '0.5em 1em' }}>
                        Sources
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={accordion === 1}
                onChange={handleAccordionChange(1)}>
                <AccordionSummary
                    className="cursor-pointer"
                    expandIcon={<ArrowDownIcon />}>
                    <Typography
                        variant="h3"
                        className="anchor"
                        style={{ padding: '0.5em 1em' }}>
                        Creators
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ width: '100%' }}>
                        {classMod.authors.map((auth, i) => (
                            <AuthorCard
                                key={`${auth.author.name}-${i}`}
                                author={auth.author}
                                credits={auth.credits}
                            />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}
