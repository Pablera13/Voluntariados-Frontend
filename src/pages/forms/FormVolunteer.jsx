import React from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import HeroHeader from "../../components/HeroHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { getIdValidate } from "../../services/GeneralService";


function FormVolunteer() {

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
    <HeroHeader header={'Formulario para ser voluntario'} text={'Con este formulario podras realizar la solicitud para poder llegar a ser voluntario activo'}
    img={'heroheader'}/>
    <Container className="mt-3">

      <Card className="card-form">
        <Card.Header>
          <h5>Completa los campos con tu informacion personal</h5>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Numero de cedula</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese el numero de cedula"
                onChange={(event) => setDataId(event.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="email"
             value={data ? data.firstname : ''} disabled/>
              
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Primer apellido</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=""
                    value={data ? data.lastname1 : ''}
                    disabled
                    />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Segundo apellido</Form.Label>
                  <Form.Control
                    type="email"
                    disabled
                    value={data ? data.lastname2 : ''}
                    />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" >
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control type="date" placeholder="Ingrese el numero de cedula" />
              
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Direccion</Form.Label>
              <Form.Control as="textarea" placeholder="Ingrese el numero de cedula" />
              
            </Form.Group>

            <button className="acceptButton"> Subir </button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
                    </>
  );
}

export default FormVolunteer;
