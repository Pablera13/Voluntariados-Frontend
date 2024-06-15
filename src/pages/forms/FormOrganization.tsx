import React from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import HeroHeader from "../../components/HeroHeader";
import { useState, useEffect } from "react";
import { getIdValidate } from "../../services/GeneralService";
import { FormDataOrganization, FormOrganizationSchema } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../api/config";
import toast from "react-hot-toast";

function FormOrganization() {
  // const [dataId, setDataId] = useState(0);
  // const [data, setData] = useState<any>();

  //   useEffect(() => {
  //     const getData = setTimeout(() => {
  //       const get = async () => {
  //         const object  = await getIdValidate(dataId);
  //         console.log(object);
  //         setData(object.results[0])
  //       }
  //   get()
  //     }, 2000)

  //     return () => clearTimeout(getData)
  //   }, [dataId])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormDataOrganization>({
    resolver: zodResolver(FormOrganizationSchema),
  });

  const onSubmit: SubmitHandler<FormDataOrganization> = async (data) => {
    let newUser = {
      mail: data.mail,
      password: data.password,
    };

    const response = await api.post(`users`, newUser);

    if (response.status == 200 || response.status == 201) {
      let newOrganization = {
        cedula: data.cedula,
        name: data.name,
        address: data.address,
        bankaccount:data.bankaccount,
        verified: false,
        userId: response.data.id,
        imageUrl: data.imagen
      };

      const responseOrganization = await api.post('organization', newOrganization);

      if(responseOrganization.status == 200 || responseOrganization.status == 201){
        toast.success("Organizacion creada con exito!");
        reset();
      }
    }
  };

  return (
    <>
      <HeroHeader
        header={"Formulario para integrar tu organizacion"}
        text={
          "Con este formulario podras realizar la solicitud para poder llegar a ser una organizacion activa"
        }
        img={"organizationhero"}
      />
      <Container className="mt-3">
        <Card className="card-form">
          <Card.Header>
            <h5>Completa los campos con la informacion de la empresa</h5>
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
                  placeholder="Ingrese el numero de cedula juridica"
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
                  placeholder="Ingrese el nombre"
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cuenta bancaria</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese la cuenta bancaria"
                  {...register("bankaccount", {valueAsNumber:true})}
                />
                {errors.bankaccount && (
                  <span className="text-danger">
                    {errors.bankaccount.message}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingrese la direccion de la empresa"
                  {...register("address")}
                />
                {errors.address && (
                  <span className="text-danger">{errors.address.message}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ingrese la imagen de la empresa"
                  {...register("imagen")}
                />
                {errors.imagen && (
                  <span className="text-danger">{errors.imagen.message}</span>
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

export default FormOrganization;
