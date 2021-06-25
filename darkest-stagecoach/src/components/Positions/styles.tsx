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

export const Circle = styled.div<{ color: string; blur: boolean }>`
    background-color: ${props => props.color};
    ${props => (props.blur ? `box-shadow: 0px 0px 6px ${props.color}` : '')};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 8px;
    font-weight: bold;
    font-family: 'Mate SC';
`
