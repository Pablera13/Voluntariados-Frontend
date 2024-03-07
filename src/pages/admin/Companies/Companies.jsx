import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";

function Companies() {
  return (
    <>
      <HeroCRUD text={'Empresas'}/>

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Button>Nueva empresa</Button>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table  className="my-3">
          <thead>
            <tr>
              <th>Cedula Juridica</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Cuenta de banco</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>111111111</th>
              <th>ACME</th>
              <th>Santa Cruz</th>
              <th>3-12324213</th>
              <th>
                <Button>Editar</Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Companies