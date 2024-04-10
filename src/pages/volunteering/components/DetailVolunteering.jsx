import React from "react";
import HeroHeader from "../../../components/HeroHeader";
import { Container, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getVolunteeringById } from "../../../services/Volunteering";


function DetailVolunteering() {
  let { volunteeringId } = useParams();

  const { data, isLoading, isError } = useQuery(
    `volunteering/${volunteeringId}`,
    () => getVolunteeringById(volunteeringId)
  );

  console.log(volunteeringId);
  return (
    <>
      <HeroHeader
        header={"Detalles del voluntariado"}
        text={
          "En esta ventana puedes ver los detalles en profundidad del voluntariado seleccionado"
        }
      />
      <Container className="">
        {data && (
          <Card className="card-detail">
            <Card.Header>
                <div className="d-flex justify-content-between align-items-center">

              <h5>{data.category}</h5>
              <Link to={'/volunteering'}>
              <Button variant="dark"><i class="fa fa-arrow-left" aria-hidden="true"></i></Button>
              </Link>
                </div>
            </Card.Header>
            <Card.Body>
              <h3>{data.projectName}</h3>
              <span>Fecha: {data.startDate} - {data.finishDate}</span>
              <hr />
              <p>{data.description}</p>

              <p>{data.contact}</p>
              <p>Cupos disponibles maximos: {data.quotas}</p>

              <h5>Requisitos</h5>
              <div className="card mb-2">test1</div>
              <div className="card mb-2">test2</div>
              <div className="card mb-2">test2</div>

              <Button>Inscribirse</Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default DetailVolunteering;
