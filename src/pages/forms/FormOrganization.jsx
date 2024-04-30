import React from 'react'
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import HeroHeader from '../../components/HeroHeader';

function FormOrganization() {
  return (
    <>
    <HeroHeader header={'Formulario para integrar tu organizacion'} text={'Con este formulario podras realizar la solicitud para poder llegar a ser una organizacion activa'}
    img={'organizationhero'}/>
    <Container className="mt-3">
      <h3></h3>
      <p>
        
      </p>

      <Card className='card-form'>
        <Card.Header>
          <h5>Completa los campos con la informacion de la empresa</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Numero de cedula</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese el numero de cedula juridica"
                />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el nombre" />
              
            </Form.Group>
           
            <Form.Group className="mb-3" >
              <Form.Label>Cuenta bancaria</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la cuenta bancaria" />
              
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Direccion</Form.Label>
              <Form.Control as="textarea" placeholder="Ingrese la direccion de la empresa" />
              
            </Form.Group>

            <button className='acceptButton'> Subir </button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
                </>
  )
}

export default FormOrganization