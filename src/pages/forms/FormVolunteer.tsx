import React, { useRef } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import HeroHeader from "../../components/HeroHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { getIdValidate } from "../../services/GeneralService";
import { FormDataVolunteer, FormVolunteerSchema } from "../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../api/config";
import toast, { Toaster } from "react-hot-toast";

function FormVolunteer() {
  const [dataId, setDataId] = useState(0);
  const [data, setData] = useState<any>();
  const cedulaId = useRef(0);

  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     const get = async () => {
  //       const object = await getIdValidate(dataId);
  //       console.log(object);
  //       setData(object.results[0]);
  //     };
  //     get();
  //   }, 2000);

  //   return () => clearTimeout(getData);
  // }, [dataId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormDataVolunteer>({
    resolver: zodResolver(FormVolunteerSchema),
  });

  const onSubmit: SubmitHandler<FormDataVolunteer> = async (data) => {
    let newUser = {
      mail: data.mail,
      password: data.password,
    };

    const response = await api.post(`users`, newUser);

    if (response.status == 200 || response.status == 201) {
      let newVolunteer = {
        cedula: data.cedula,
        name: data.name,
        lastName1: data.lastName1,
        lastName2: data.lastName2,
        birthday: data.birthday,
        address: data.address,
        itsVerified: false,
        userId: response.data.id,
      };

      const responseUser = await api.post(`volunteer`, newVolunteer);

      if (responseUser.status == 200 || responseUser.status == 201) {
        toast.success("Voluntario creado con exito!");
        reset();
      }
    }
  };

  return (
    <>
      <Toaster 
      position="bottom-center"/>
      <HeroHeader
        header={"Formulario para ser voluntario"}
        text={
          "Con este formulario podras realizar la solicitud para poder llegar a ser voluntario activo"
        }
        img={"heroheader"}
      />
      <Container className="mt-3">
        <Card className="card-form">
          <Card.Header>
            <h5>Completa los campos con tu informacion personal</h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electronico"
                      {...register("mail")}
                    />
                    {errors.mail && (
                      <span className="text-danger">{errors.mail.message}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese la contraseña"
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="text-danger">
                        {errors.password.message}
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Numero de cedula</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese su numero de cedula"
                  {...register("cedula", { valueAsNumber: true })}
                />
                {errors.cedula && (
                  <span className="text-danger">{errors.cedula.message}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Primer apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su primer apellido"
                      {...register("lastName1")}
                    />
                    {errors.lastName1 && (
                      <span className="text-danger">
                        {errors.lastName1.message}
                      </span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Segundo apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su segundo apellido"
                      {...register("lastName2")}
                    />
                    {errors.lastName2 && (
                      <span className="text-danger">
                        {errors.lastName2.message}
                      </span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Ingrese su fecha de nacimiento"
                  {...register("birthday")}
                />
                {errors.birthday && (
                  <span className="text-danger">{errors.birthday.message}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingrese su direccion"
                  {...register("address")}
                />
                {errors.address && (
                  <span className="text-danger">{errors.address.message}</span>
                )}
              </Form.Group>

              <button className="acceptButton" type="submit">
                {" "}
                Subir{" "}
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default FormVolunteer;
