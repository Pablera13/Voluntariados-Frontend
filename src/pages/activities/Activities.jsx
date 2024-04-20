import React from "react";
import { Container, Spinner, Card, Button, Row, Col } from "react-bootstrap";
import HeroHeader from "../../components/HeroHeader";
import { getEvents } from "../../services/Activities";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


function Activities() {
  const { data, isLoading, isError } = useQuery("event", getEvents);

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
        header={"Lista de actividades"}
        text={
          "En esta lista podras filtrar y encontrar actividades acorde a lo que deseas"
        }
        img={"activitieshero"}
      />
      <Container className="mt-3">
        <Row>
          {data?.map((item)=>(
            <Col key={item.id} xs={12} md={6}>
              <Card className="mb-3">
                <Card.Body>
                <h4>{item.name}</h4>
                <h6>{item.category}</h6>
                <p>
                  La fecha de la actividad es {(item.date).substr(0,10)}
                </p>
                <Link to={`/volunteering/${item.id}`}>
                <button className="acceptButton">Ver</button>
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

export default Activities;
