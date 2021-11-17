import React, { Component }  from "react";
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import Registro from '../components/RegistroComp';


export default class RegistroComp extends Component {
    render() {
        return (
            <MainLayout>
                <Title title={'registro'} span={'registro'}/>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <Registro />
                
            </MainLayout>
        )
    }
};