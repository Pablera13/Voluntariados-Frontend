import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { CompanySchema, FormDataCompany } from "../../../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

function FormCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormDataCompany>({
    resolver: zodResolver(CompanySchema),
  });

  const onSubmit: SubmitHandler<FormDataCompany> = async (
    data
  ) => {
    console.log("SUCCESS", data);
  };

  return (
    <Card>
      <Card.Header>
        <h5>Complete los datos para registrar una empresa</h5>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-2">
            <label>Cedula Juridica</label>
            <input
              type="number"
              className="form-control"
              {...register('cedula')}
              placeholder="Cedula de la compañia"
            />
            {errors.cedula && (
              <small  className="form-text text-danger">
                {errors.cedula?.message}
              </small>
            )}
          </div>
          <div className="form-group  mb-2">
            <label>Nombre de la compañia</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              {...register('name')}
            />
            {errors.name && (
              <small  className="form-text text-danger">
                {errors.name?.message}
              </small>
            )}
          </div>
          <div className="form-group  mb-2">
            <label>Direccion de la compañia</label>
            <input
              type="text"
              className="form-control"
              placeholder="Direccion"
              {...register('address')}
            />
            {errors.address && (
              <small  className="form-text text-danger">
                {errors.address?.message}
              </small>
            )}
          </div>
          <div className="form-group  mb-2">
            <label>Cuenta bancaria de la compañia</label>
            <input
              type="number"
              className="form-control"
              placeholder="Cuenta bancaria"
              {...register('bankaccount')}
            />
            {errors.name && (
              <small  className="form-text text-danger">
                {errors.name?.message}
              </small>
            )}
          </div>

          <Button type="submit">Subir</Button>
        </form>
      </Card.Body>
    </Card>
  );
}

export default FormCompany;
