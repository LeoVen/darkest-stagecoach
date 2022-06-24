import { Typography } from "@material-ui/core";
import { Launch, Skill, Target } from "../../Types";
import { Image } from "../Image";
import { Circle, LaunchContainer, MainSection, SkillContainer, SkillSection, Square, TargetContainer } from "./styles";

interface SkillsProps {
    skills: Skill[]
}

const circle = (key: string, color: string, blur: string) => {
    return (
        <Circle key={key} color={color} blur={blur} />
    )
}

const square = (key: string, color: string, blur?: string) => {
    return (
        <Square key={key} color={color} blur={blur} />
    )
}

const target = (target: Target) => {
    if (target.targets.every(val => !val)) {
        return
    }

    let joins = target.mods.includes('~')

    let targets = [
        target.targets[0],
        joins && target.targets[0] && target.targets[1],
        target.targets[1],
        joins && target.targets[1] && target.targets[2],
        target.targets[2],
        joins && target.targets[2] && target.targets[3],
        target.targets[3],
    ]

    let targetColor = 'var(--skill-target-color)'
    let targetGlow = 'var(--skill-target-glow)'

    if (target.mods.includes('@')) {
        targetColor = 'var(--skill-ally-color)'
        targetGlow = 'var(--skill-ally-glow)'
    }

    return (
        <TargetContainer>
            {targets.map((value, i) => i % 2 === 1 ?
                value ?
                    square(`skill-target-${i}`, targetColor, targetGlow) :
                    square(`skill-target-${i}`, 'var(--bg-secondary)')
                    :
                value ?
                    circle(`skill-target-${i}`, targetColor, targetGlow) :
                    circle(`skill-target-${i}`, 'var(--skill-off-color)', 'var(--skill-off-glow)'))}
        </TargetContainer>
    )

}

const launch = (launch: Launch) => {
    return (
        <LaunchContainer>
            {launch.map((value, i) => value ?
                circle(`skill-launch-${i}`, 'var(--skill-launch-color)', 'var(--skill-launch-glow)') :
                circle(`skill-launch-${i}`, 'var(--skill-off-color)', 'var(--skill-off-glow)'))}
        </LaunchContainer>
    )
}

const skillSlot = (skill: Skill) => {
    return (
        <SkillSection>
            <Typography variant="body1" style={{whiteSpace: 'nowrap'}}>
                {skill.name}
            </Typography>
            <Image imgData={skill.image} style={{ width: '72px', height: '72px' }} />
            <SkillContainer wrap={skill.target.mods.includes('@')}>
                {launch(skill.launch)}
                {target(skill.target)}
            </SkillContainer>
            {!skill.target.mods.includes('?') ? <></> :
                <Typography variant="body1">
                    Random Target
                </Typography>
            }
        </SkillSection>
    )
}

export const SkillsSection = ({ skills }: SkillsProps) => {
    return (
        <MainSection>
            {skills.map(skill => skillSlot(skill))}
        </MainSection>
    )
}

export default SkillsSection
