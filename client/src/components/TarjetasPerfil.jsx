import React from 'react'

import styled from 'styled-components';

function TarjetasPerfil({title, subtitulo,paragraph, email, image}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{subtitulo}</p>
                <p>{paragraph}</p>
                <p>{email}</p>
            </div>
        </ServiceCardStyled >
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--white-color);
    border-top: 8px solid var(--white-color);
    border-right: 1px solid var(--white-color);
    border-bottom: 1px solid var(--white-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--colorlogo);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--colorlogo);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0;
        }
    }
`;

export default TarjetasPerfil;