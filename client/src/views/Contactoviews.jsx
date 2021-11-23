import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../components/Title';
import Button from '../components/Button';
import Icon from '../components/Icons';
import ContactoComp from '../components/ContactoComp';


function Contactoviews() {
    const phone = <Icon className="fas fa-phone-alt" /> 
    const email = <Icon className="fas fa-envelope" />
    const location = <Icon className="fas fa-map-marker-alt" />
    return (
        <MainLayout>
            <Title title={'Contacto'} span={'Contacto'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Pongase en contacto con nosotros</h4>
                    </div>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Introduzca su nombre*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Introduzca su Email*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Introduzca su asunto</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">introduce su mensaje*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <Button title={'Enviar mensaje'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactoComp title={'Teléfono'} icon={phone} cont1={'+57 475-4785-2545'} cont2={'+57 663520283'} />
                    <ContactoComp title={'Email'} icon={email} cont1={'sueñosrealidad@call.com'} cont2={'sueñorealidad@gmail.com'} />
                    <ContactoComp title={'Dirección'} icon={location} cont1={'Calle del desarrollo'} cont2={'Colombia'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default Contactoviews

