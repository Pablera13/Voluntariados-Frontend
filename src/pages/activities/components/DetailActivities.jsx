import React from "react";
import HeroHeader from "../../../components/HeroHeader";
import { Container, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActivityById } from "../../../services/Activities";
import { format } from "date-fns";
import RegisterModal from "./RegistarModel";
import ParticipantsModal from "./ParticipantsModal";


function DetailActivities() {
  let { activitiesId } = useParams();

  const { data, isLoading, isError, refetch } = useQuery(
    `activities/${activitiesId}`,
    () => getActivityById(activitiesId)
  );

  return (
    <>
      <HeroHeader
        header={"Detalles del evento"}
        text={
          "En esta ventana puedes ver los detalles en profundidad del evento seleccionado"
        }
      />
      <Container className="">
        {data && (
          <Card className="card-detail">
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
              <h5>{data.category}</h5>
              <Link to={'/activities'}>
              <Button variant="dark"><i class="fa fa-arrow-left" aria-hidden="true"></i></Button>
              </Link>
                </div>
            </Card.Header>
            <Card.Body>
              <h3>{data.name}</h3>
              <span>
              Fecha: {format(new Date(data.date), "yyyy-MM-dd")}
              </span>
              <hr />
              <p>{data.description}</p>
              <p>Cupos máximos: {data.quota}</p>
              <p>Cupos restantes: {data.quota - data.eventvolunteers.length}</p>
              <h5>Dirección</h5>
              <div className=" mb-2">{data.address}</div>
              <h5>Contacto</h5>
              <div className=" mb-2">{data.contact}</div>

              <div className="d-flex justify-content-end mt-3">

              <RegisterModal activity={data} refetch={refetch}/>
              <ParticipantsModal volunteers={data.eventvolunteers} />

              </div>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default DetailActivities;
