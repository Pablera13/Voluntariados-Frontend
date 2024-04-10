import React from "react";
import { Container, Spinner, Card, Button, Row, Col } from "react-bootstrap";
import HeroHeader from "../../components/HeroHeader";
import { getVolunteerings } from "../../services/Volunteering";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Volunteering() {
  const { data, isLoading, isError } = useQuery(
    "volunteering",
    getVolunteerings
  );

  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className=" d-flex justify-content-center align-items-center">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <HeroHeader
        header={"Lista de voluntariados"}
        text={
          " En esta lista podras filtrar y encontrar voluntariados acorde a lo que deseas"
        }
        img={"volunthero"}
      />
      <Container className="mt-3">
      <Row>
        {data?.map((item) => (
          <Col key={item.id} xs={12} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <h4>{item.projectName}</h4>
                <h6>{item.category}</h6>
                <p>
                  La fecha de inicio del voluntariado es: {item.startDate} y termina en: {item.finishDate}
                </p>
                <Link to={`/volunteering/${item.id}`}>
                <Button variant="outline-warning">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default Volunteering;
