import React from 'react';
import Axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    FormLabel,
    Row,
    Col,
    InputGroup,
    Button,
    Container,
} from 'react-bootstrap';

function SignupComp(props) {

    const { item } = props;

    const {
        nombre,
        actividad,
        telefono,
        direccion,
        ciudad,
        departamento,
        mail,
        password,
        visible,
    } = item;

    const loginSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        actividad: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        telefono: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        direccion: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        ciudad: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        departamento: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        email: Yup.string()
            .email('No es un correo valido')
            .required('Campo requerido'),
        visible: Yup.bool().required('Campo requerido'),
    });

    const updateEmprendedor = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                // setEmprendedores(response.data.emprendedores);
            })
            .catch((err) => {
                console.log(err);
            });
        return 'emprendedores';
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const data = values;
        resetForm({ values: { email: '', password: '' } });
        setSubmitting(false);
        updateEmprendedor(data);
    };

    return (
        <Container
            style={{ width: '600px', height: '600px', marginTop: '100px' }}
        >
            <Formik
                initialValues={{
                    nombre,
                    actividad,
                    telefono,
                    direccion,
                    ciudad,
                    departamento,
                    mail,
                    password,
                    visible,
                }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => {
                    return (
                        <Form>
                            <Row>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Nombre:{' '}
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="nombre"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="nombre"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Actividad:
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="actividad"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="actividad"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Telefono:{' '}
                                        <Field
                                            className="form-control"
                                            type="number"
                                            name="telefono"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="telefono"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Direccion:{' '}
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="direccion"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="direccion"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Ciudad:{' '}
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="ciudad"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="ciudad"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Departamento:{' '}
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="departamento"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="departamento"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Email:{' '}
                                        <Field
                                            className="form-control"
                                            type="email"
                                            name="mail"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="mail"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                                <Col>
                                    <FormLabel
                                        style={{
                                            display: 'block',
                                            margin: '10px 0',
                                            textAlignLast: 'left',
                                        }}
                                    >
                                        Visible:{' '}
                                        <Field
                                            className="form-control"
                                            type="select"
                                            name="visible"
                                            style={{ display: 'block' }}
                                        />
                                        <ErrorMessage
                                            name="visible"
                                            component="div"
                                        />
                                    </FormLabel>
                                </Col>
                            </Row>
                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Guardar
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </Container>
    );
}

export default SignupComp;
