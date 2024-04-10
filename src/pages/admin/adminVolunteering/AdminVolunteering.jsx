import React from "react";
import { Container, Card, Table, Button, Spinner } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";
import { getVolunteerings } from "../../../services/Volunteering";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


function AdminVolunteering() {
  const { data, isLoading, isError } = useQuery(
    "volunteering",
    getVolunteerings
  );

  if (isLoading) {
    return (
      <Spinner
        animation="border"
        role="status"
        className=" d-flex justify-content-center align-items-center"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <HeroCRUD text={"Voluntariado"} />

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Link to={`/admin/volunteering/create`}>
            <Button>Nuevo voluntariado</Button>
            </Link>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table className="my-3">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Categoria</th>
              <th>Capacidad</th>
           
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <th>{item.projectName}</th>
                <th>{(item.startDate).substring(0,10)}</th>
                <th>{item.category}</th>
                <th>{item.quotas}</th>
            
                <th>
                  <Button>Editar</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default AdminVolunteering;
