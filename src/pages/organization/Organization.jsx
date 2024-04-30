import React from "react";
import HeroHeader from "../../components/HeroHeader";
import { getCompanies } from "../../services/CompanyService";
import { useQuery } from "react-query";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


function Organization() {
  const { data, isLoading, isError } = useQuery("organization", getCompanies);

  if (isLoading) {
    return (
      <>
        <HeroHeader
          header={"Organizaciones"}
          text={"En esta ventana puedes ver las empresas inscritas"}
          img={"organizationhero2"}
        />
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
      <HeroHeader
        header={"Organizaciones"}
        text={"En esta ventana puedes ver las empresas inscritas"}
        img={"organizationhero2"}
      />

      <Container className="mt-3 ">
        <Row className="">
          {data?.map((item) => (
            <Col>
              <div className="myCard mb-3" key={item.id}>
                <p className="cookieHeading">{item.name}</p>
                <p className="cookieDescription">{item.address}</p>

                <div className="buttonContainer">
                  <Link to={`/organization/${item.id}`}>
                  <button className="acceptButton">Ver</button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Organization;
