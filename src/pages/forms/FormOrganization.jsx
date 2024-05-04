import React from 'react'
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import HeroHeader from '../../components/HeroHeader';
import { useState, useEffect } from "react";
import { getIdValidate } from "../../services/GeneralService";


function FormOrganization() {
  const [dataId, setDataId] = useState(0);
  const [data, setData] = useState();

    useEffect(() => {
      const getData = setTimeout(() => {
        const get = async () => {
          const object  = await getIdValidate(dataId);
          console.log(object);
          setData(object.results[0])
        }
    get()
      }, 2000)
  
      return () => clearTimeout(getData)
    }, [dataId])
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
                
                placeholder="Ingrese el numero de cedula juridica"
                onChange={(event) => setDataId(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email" placeholder="Ingrese el nombre" value={data ? data.fullname:''} disabled/>
              
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