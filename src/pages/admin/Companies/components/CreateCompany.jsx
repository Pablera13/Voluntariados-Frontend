import React from "react";
import FormCompany from "./FormCompany";
import { Container } from "react-bootstrap";
import HeroCRUD from "../../components/HeroCRUD";


function CreateCompany() {
  return (
    <>
    <HeroCRUD text={'Crear empresa'}/>
    <Container className="my-3">
      <FormCompany />
    </Container>
    </>
  );
}

export default CreateCompany;
