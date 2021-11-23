import React from 'react'
import styled from 'styled-components';

function EsloganItem({text}) {
    return (
        <RevivewItemStyled>
            <p>{text}</p>
        </RevivewItemStyled>
    )
}

const RevivewItemStyled = styled.div`
    padding: 1rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--fondocolor);
    position: relative;
    width: 110%;
    top: -20%;
    &:not(:first-child){
        
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--fondocolor) transparent transparent var(--fondocolor);
    }
    p{
        padding: 1rem 0;
    }
`;

export default EsloganItem;