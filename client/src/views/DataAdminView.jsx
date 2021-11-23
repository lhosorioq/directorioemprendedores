import React, { useState } from 'react';
import { Tabs, Tab, Container} from 'react-bootstrap';
import TablaEmprendedoresComp from '../components/TablaEmprendedoresComp';

function AdminEmprendedoresView() {
    const [key, setKey] = useState('emprendedores');
    return (
        <Container> 
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-2"
            >
                <Tab eventKey="emprendedores" title="Emprendedores">
                    <TablaEmprendedoresComp/>
                    {/* <Sonnet /> clase ficticia hace referencia al vista que se va a mostrar */}
                </Tab>
                <Tab eventKey="administradores" title="Administradores">
                    {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    {/* <Sonnet /> */}
                </Tab>
            </Tabs>
        </Container>
    );
}

export default AdminEmprendedoresView;
