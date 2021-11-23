import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import TarjetaPerfil from '../components/TarjetasPerfil';
import HeynarS from '../assets/HeynarS.jpg';
import JorgeL from '../assets/JorgeL.jpg';
import LuisHO from '../assets/LuisHO.jpg';
import PatriciaS from '../assets/PatriciaS.jpg'
import EstefaniM from '../assets/EstefaniaM.jpg'

function EquipoComp() {
    return (
        <InnerLayout>
            <EquipoStyled>
                <Title title={'Equipo'} span={'Equipo'} />
                <div className="equipos">

                <TarjetaPerfil 
                        image={LuisHO} 
                        title={'Luis Humberto Osorio Quiceno'}
                        subtitulo={'Scrum Master'}
                        paragraph={'Ingeniero de Sistemas Programador de sistemas de información enfocado al desarrollo de aplicaciones web.'}
                        email={'Email: lhosorio@gmail.com'}
                    /> 
                    
                    <TarjetaPerfil 
                        image={HeynarS} 
                        title={'Heynar Soto Holguin'} 
                        subtitulo={'Product Owner'}
                        paragraph={' Diseño 3D. Me gusta el desarrollo web'}
                        email={'Email: heynar76@hotmail.com'}
                    />
                    
                    <TarjetaPerfil 
                        image={JorgeL} 
                        title={'Jorge Luis Velasquez Vanegas'} 
                        subtitulo={'Developer'}
                        paragraph={'Tecnólogo electrónico. Apasionado de la tecnología y el desarrollo de software..'}
                        email={'Email: jorgeluisvelasquezv@gmail.com'}
                    />
                    
                    <TarjetaPerfil 
                        image={EstefaniM} 
                        title={'Estefania Muñoz Gallego'} 
                        subtitulo={'Developer'}
                        paragraph={' Ingeniera Industrial.'}
                        email={'Email: Estefamg@outlook.es'}
                    />
                    
                    <TarjetaPerfil 
                        image={PatriciaS} 
                        title={'Maria Patricia Serna Lopez'} 
                        subtitulo={'Developer'}
                        paragraph={' Ingeniera en confecciones.'}
                        email={'Email: mariapatriciasernalopez9@gmail.com'}
                    />

                    
                        
                </div>
            </EquipoStyled>
        </InnerLayout>
    )
}

const EquipoStyled = styled.section`
    .equipos{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:1500px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width:1230px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:855px){
            grid-template-columns: repeat(1, 1fr);
        }
        
    }
`;

export default EquipoComp;

