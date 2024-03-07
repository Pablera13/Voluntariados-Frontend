import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";

function Volunteers() {
  return (
    <>
      <HeroCRUD text={"Voluntarios"} />

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Button>Nuevo voluntario</Button>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table className="my-3">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>Direccion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>118780796</th>
              <th>David Acuna Mora</th>
              <th>07-05-2003</th>
              <th>Santa Cruz</th>
              <th>
                <Button>Editar</Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Volunteers;
