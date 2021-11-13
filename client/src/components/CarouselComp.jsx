import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComp(props) {
    const { data } = props;

    const uri = `http://localhost:4000/user/`;

    const [emprendedores, setEmprendedores] = useState([]);

    useEffect(() => loadImagenes());

    const loadImagenes = () => setEmprendedores(data);

    if (emprendedores) {
        return (
            <div>
                <Carousel>
                    {emprendedores.map((emprendedor, i) => {
                        if (emprendedor.visible) {
                            return (
                                <Carousel.Item key={i}>
                                    <img
                                        variant="top"
                                        className="d-block w-100"
                                        src={uri + emprendedor._id}
                                        alt="First slide"
                                        style={{ height: '400px' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>{emprendedor.nombre}</h3>
                                        <p>{emprendedor.msg_description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        }
                        return null;
                    })}
                </Carousel>
            </div>
        );
    }
}

export default CarouselComp;
