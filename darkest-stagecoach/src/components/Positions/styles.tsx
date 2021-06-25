import styled from 'styled-components'

export const MainSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 6px;
    align-items: center;
    width: 100%;
    margin: 8px 0 22px 0;
`

export const Circle = styled.div<{
    color: string
    border: string
    blur: boolean
}>`
    background-color: ${props => props.color};
    ${props => (props.blur ? `box-shadow: 0px 0px 4px #fff` : '')};
    border: 1px ${props => props.border} solid;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 9px;
    font-weight: bold;
    font-family: 'Mate SC';
    color: var(--font-primary);
`
