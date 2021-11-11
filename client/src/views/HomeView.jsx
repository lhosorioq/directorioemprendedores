import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsComp from '../components/CardsComp';
import { ProgressBar } from 'react-bootstrap';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';

function HomeView(props) {
    const [emprendedores, setEmprendedores] = useState(null);

    useEffect(() => {
        async function getEmprendedores() {
            if (!emprendedores) {
                try {
                    const response = await Axios({
                        method: 'get',
                        url: `/user/`,
                        responseType: 'json',
                    });
                    setEmprendedores(response.data.emprendedores);
                    return emprendedores;
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getEmprendedores();
    });

    if (emprendedores) {
        return (
            <>
                <HeaderComp />
                <CardsComp data={emprendedores} />
                <FooterComp />
            </>
        );
    }
    return (
        <>
            <HeaderComp />
            <ProgressBar animated now={45} />
            <FooterComp />
        </>
    );
}

HomeView.propTypes = {};

export default HomeView;
