import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsComp from '../components/CardsComp';
import { ProgressBar } from 'react-bootstrap';
import HeaderComp from '../components/HeaderComp';
import FooterComp from '../components/FooterComp';
import SearchComp from '../components/SearchComp';
import CarouselComp from '../components/CarouselComp';

function HomeView() {
    const [emprendedores, setEmprendedores] = useState(null);

    const [imagenes, setImagenes] = useState(null);

    const loadEmprendedores = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                setEmprendedores(response.data.emprendedores);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedores;
    };

    useEffect(() => {
        async function getEmprendedores() {
            if (!emprendedores) {
                try {
                    const response = await Axios({
                        method: 'get',
                        url: `/user/visible`,
                        responseType: 'json',
                    });
                    setEmprendedores(response.data.emprendedores);

                    setImagenes(imagenes ?? response.data.emprendedores);

                    return emprendedores;
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getEmprendedores();
    });

    if (emprendedores && imagenes) {
        return (
            <>
                <CarouselComp data={imagenes} />
                <SearchComp
                    loadEmprendedores={(item) => loadEmprendedores(item)}
                />
                <div style={{ minHeight: '500px' }}>
                    <CardsComp data={emprendedores} />
                </div>
            </>
        );
    }
    return (
        <>
            <HeaderComp />
            <SearchComp />
            <div className="container" style={{ height: '500px' }}>
                <ProgressBar animated now={45} />
            </div>
            <FooterComp />
        </>
    );
}

HomeView.propTypes = {};

export default HomeView;
