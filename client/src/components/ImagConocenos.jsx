import React from 'react'
import styled from 'styled-components';
import imgconoc from '../assets/ImagenConocenos.jpg';
import EsloganItem from '../components/EsloganItem'
import {InnerLayout} from '../styles/Layouts'



function ImagConocenos() {
    return (
        <ImageConoStyled>
            <div className="left-content">
                <img src={imgconoc} alt=""/>
            </div>
            <div className="right-content">
            
                
            <InnerLayout>
                <div className="views">
                    <EsloganItem 
                        text={'Es la idea de cinco compañeros que desean apoyar a los emprendedores, y Estamos aqui para sacar a relucir tu EMPRENDIMIENTO como un profesional y como marca. Creo que todos nos destacamos de manera extraordinario en nuestro emprendimiento por que TODOS somo especiales. Sin embargo, '} />
                    
                    
                </div>
            </InnerLayout>
                
                <div className="about-info">
                    <div className="info-title">
                    <p>El reto esta en dominar el 
                    mercado y ser persuasivos para convencer 
                    de que somos unos genios en 
                    nuestro campo.
                    Ese es mi trabajo y estoy deseando ayudarte.</p>
                    
                    </div>
                </div>
                
                
            </div>
        </ImageConoStyled>
    )
}


const ImageConoStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
            }
        }
    
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h6{
            font-size: 1.8rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .about-info{
            display: flex;
            
            .info-title{
                padding-right: 1rem;
                p{
                    font-weight: 1000;
                }
            }
            
        }
    }
    .views{
        display: grid;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`;
export default ImagConocenos;