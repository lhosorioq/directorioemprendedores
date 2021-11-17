import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';




export default function TarjetaComp({title, subtitulo,paragraph, email, image}) {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitulo}</Card.Subtitle>
        
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>{paragraph}</ListGroupItem>
        <ListGroupItem>{email}</ListGroupItem>
    </ListGroup>
    
    </Card>
    )
}