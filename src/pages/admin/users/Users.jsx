import React from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";

function Users() {
  return (
    <>
      <HeroCRUD text={'Usuarios'}/>

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Button>Nuevo usuario</Button>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table  className="my-3">
          <thead>
            <tr>
              <th>Mail</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>davidacumora@gmail.com</th>
              <th>Admin</th>
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

export default Users