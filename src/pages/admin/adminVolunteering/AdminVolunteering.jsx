import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";

function AdminVolunteering() {
  return (
    <>
      <HeroCRUD text={'Voluntariado'}/>

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Button>Nuevo voluntariado</Button>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table  className="my-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Categoria</th>
              <th>Capacidad</th>
              <th>Descripcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Limpieza playa tamarindo</th>
              <th>12-12-2012</th>
              <th>Salud</th>
              <th>1</th>
              <th>Prueba</th>
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

export default AdminVolunteering;
