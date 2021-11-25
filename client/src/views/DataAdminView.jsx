import React, { useState } from 'react';
import { Tabs, Tab, Container} from 'react-bootstrap';
import TablaEmprendedoresComp from '../components/TablaEmprendedoresComp';
import TableAdministradoresCom from '../components/TableAdministradoresCom';

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
                </Tab>
                <Tab eventKey="administradores" title="Administradores">
                    <TableAdministradoresCom/>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default AdminEmprendedoresView;
