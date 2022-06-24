import styled from 'styled-components'

export const MainSection = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow-x: auto;
    padding: 1rem;
`

export const SkillSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 1rem;
    border: 2px solid var(--bg-primary);
    border-radius: 4%;
    min-width: 150px;
`

export const SkillContainer = styled.div<{
    wrap: boolean
}>`
    display: flex;
    flex-direction: ${props => props.wrap ? 'column' : 'row'};
    gap: ${props => props.wrap ? '8px' : '1rem'};
`

export const LaunchContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 6px;
`

export const TargetContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Circle = styled.div<{
    color: string
    blur: string
}>`
    background-color: ${(props) => props.color };
    ${props => (props.blur ? `box-shadow: 0px 0px 4px ${props.blur}` : '')};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`

export const Square = styled.div<{
    color: string
    blur?: string
}>`
    background-color: ${(props) => props.color };
    ${props => (props.blur ? `box-shadow: 0px 0px 4px ${props.blur}` : '')};
    width: 6px;
    height: 4px;
`
