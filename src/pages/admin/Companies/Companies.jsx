import React, { useEffect, useState } from "react";
import { Container, Card, Table, Button } from "react-bootstrap";
import HeroCRUD from "../components/HeroCRUD";
import { getCompanies } from "../../../services/CompanyService";
import { useQuery } from "react-query";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";


function Companies() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["organization"],
    queryFn: getCompanies,
  });

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
  }

  return (
    <>
      <HeroCRUD text={"Empresas"} />

      <Card className="cardHeroCRUD shadow">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Link to={`/admin/companies/create`}>
            <Button>Nueva empresa</Button>
            </Link>
            <input type="text" />
          </div>
        </Card.Body>
      </Card>

      <Container className="">
        <Table className="my-3">
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
              {data?.map((item) => (
                <>
                  <th>{item.cedula}</th>
                  <th>{item.name}</th>
                  <th>{item.address}</th>
                  <th>{item.bankaccount}</th>
                  <th>
                    <Button>Editar</Button>
                  </th>
                </>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Companies;
