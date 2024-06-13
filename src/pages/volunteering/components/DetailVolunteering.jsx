import React from "react";
import HeroHeader from "../../../components/HeroHeader";
import { Container, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getVolunteeringById } from "../../../services/Volunteering";
import RegisterModal from "./RegisterModal";


function DetailVolunteering() {
  let { volunteeringId } = useParams();

  const { data, isLoading, isError, refetch } = useQuery(
    `volunteering/${volunteeringId}`,
    () => getVolunteeringById(volunteeringId)
  );

  
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
              <span>Fecha: {(data.startDate).substr(0,10)} - {(data.finishDate).substr(0,10)}</span>
              <hr />
              <p>{data.description}</p>

              <p>{data.contact}</p>
              <p>Cupos máximos: {data.quotas}</p>
              <p>Cupos restantes: {data.quotas - data.volunteeringvolunteers.length}</p>

              <h5>Requisitos</h5>
              <div className="mb-2">{data.requirements}</div>
              <div className="d-flex justify-content-end mt-3">

              <RegisterModal volunteeringId={data.id} refetch={refetch}/>
              </div>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default DetailVolunteering;
