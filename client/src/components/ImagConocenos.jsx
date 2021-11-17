import React from 'react'
import styled from 'styled-components';
import imgconoc from '../assets/ImagenConocenos.jpg';
import { Card } from 'react-bootstrap';



function ImagConocenos() {
    return (
        <ImageConoStyled>
            <div className="left-content">
                <img src={imgconoc} alt=""/>
            </div>
            <div className="right-content">
            
                <div center="center">
                    <Card >
                        <Card.Body className="card text center bg-light">
                            
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text className="text-center">
                                
                            <h6>Estamos aqui <br /> para sacar a <br /> relucir tu EMPRENDIMIENTO <br /> como profesional y <br /> como marca </h6> 
                            </Card.Text>
                            
                            
                            
                        </Card.Body>
                    </Card>
                </div>
                <h6 className="paragraph">
                    Creo que todos nos destacamos de manera 
                    extraordinario en nuestro emprendimiento
                    por que TODOS somo especiales.
                    Sin embargo, el reto esta en dominar el 
                    mercado y ser persuasivos para convencer 
                    de que somos unos genios en 
                    nuestro campo. <br />
                    Ese es mi trabajo y estoy deseando ayudarte.
                    
                </h6>
                
                
            </div>
        </ImageConoStyled>
    )
}


const ImageConoStyled = styled.div`
    margin-top: 4rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        
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
        .Card.Text{
            width: 100%;
            h5{
                font-size: 1.8rem;
                color: var(--white-color);
                span{
                    font-size: 2rem;
                }
            }
        .paragraph{
            padding: 1rem 0;
        }
        }
    }
`;
export default ImagConocenos;