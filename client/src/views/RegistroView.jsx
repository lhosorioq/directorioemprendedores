import React from "react";
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import {RegistroComp} from '../components/RegistroComp';

function RegistroView() {
    return (
        <MainLayout>
            <Title title={'registro'} span={'registro'} />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroComp/>
        </MainLayout>
    );
}

export default RegistroView
