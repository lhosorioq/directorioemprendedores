import React, { Component } from 'react'
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImagConocenos from '../components/ImagConocenos';
import EquipoComp from '../components/EquipoComp'


export default class ConocenosComp extends Component {
    render() {
        return (
            <MainLayout>
                <ConoStyled>
                <Title title={'conócenos'} span={'conócenos'}/>
                <ImagConocenos />
                <EquipoComp />
                </ConoStyled>
            </MainLayout>
        )
    }
}

const ConoStyled = styled.div `


`;
