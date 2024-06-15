import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCompanyById } from "../../../services/CompanyService";
import { useQuery } from "react-query";
import { Spinner, Container, Card } from "react-bootstrap";
import logo from "../../../assets/logointel.png";


function DetailOrganization() {
  let { organizationId } = useParams();

  const { data, isLoading, isError } = useQuery(
    `organization/${organizationId}`,
    () => getCompanyById(organizationId)
  );

  if (isLoading) {
    return (
      <>
        <Spinner
          animation="border"
          role="status"
          className=" d-flex justify-content-center align-items-center"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <>
      <Container className="">
        <div className="mt-5 row">
          <div className="col">
            <h6>Perfil de la empresa</h6>
            <h1>{data.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              laboriosam ut, voluptatibus nobis odit iure, unde omnis,
              doloremque ex impedit provident? Asperiores accusantium, ex fugit
              vero commodi esse perspiciatis labore.
            </p>
            <button className="acceptButton w-25">Ir al sitio web</button>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={data.imageUrl} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row mt-5 d-flex align-items-center">
          <div className="col">
            <h4>
              Lista de voluntariados <br /> Disponibles
            </h4>
          </div>
          <div className="col desc-col">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-dark p-4 mt-1"></div>

      <Container className="mt-5">
        <div className="row">
          {data?.volunteerings.map((item) => (
            <div className="col">
              <Card className="mb-3 card">
                <Card.Body>
                  <h4>{item.projectName}</h4>
                  <h6>{item.category}</h6>
                  <p>
                    La fecha de inicio del voluntariado es:{" "}
                    {item.startDate.substr(0, 10)} y termina en:{" "}
                    {item.finishDate.substr(0, 10)}
                  </p>
                  <Link to={`/volunteering/${item.id}`}>
                    <button className="acceptButton">Ver</button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="row mt-5 d-flex align-items-center">
        <div className="col desc-col">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col">
            <h4>
              Lista de eventos ofrecidos
            </h4>
          </div>
        </div>
      </Container>

      <Container className="mt-5">
      <div className="row">
      {data.events?.map((item)=>(
        <div className="col">
        <Card className="mb-3 card">
          <Card.Body>
            <h4>{item.name}</h4>
            <h6>{item.category}</h6>
            <p>
            La fecha de la actividad es {(item.date).substr(0,10)}
            </p>
            <Link to={`/activities/${item.id}`}>
              <button className="acceptButton">Detalles</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
          ))}
        </div>
        </Container>

    </>
  );
}

export default DetailOrganization;
