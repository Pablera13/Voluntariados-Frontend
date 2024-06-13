import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../../../context/AuthContext.jsx";
import api from "../../../api/config.js";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import { FormVolunteeringSchema } from "../../../types.ts";

function CreateVolunteering({ organizationId, refetch }) {
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(FormVolunteeringSchema),
  });

  const projectName = useRef();
  const startDate = useRef();
  const finishDate = useRef();
  const category = useRef();
  const quotas = useRef();
  const description = useRef();
  const requirements = useRef();
  const contact = useRef();

  const onSubmit = async () => {

    let newVolunteering = {
      projectName: projectName.current.value,
      startDate: startDate.current.value,
      finishDate: finishDate.current.value,
      category: category.current.value,
      quotas: quotas.current.value,
      description: description.current.value,
      requirements: requirements.current.value,
      contact: contact.current.value,
      organizationId: organizationId
    }

    const response = await api.post('volunteering', newVolunteering);

    if (response.status === 200 || response.status === 201) {
      toast.success('Creado con éxito!');
      reset();
      handleClose();
      refetch();
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="acceptButton" onClick={handleShow}>
        Nuevo
      </button>
      <Toaster position="bottom-center" />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo voluntariado</Modal.Title>
        </Modal.Header>

        <br></br>
        <br></br>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <Card className="card-form">
            <Card.Body>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del Proyecto</Form.Label>
                    <Form.Control
                      ref={projectName}
                      type="text"
                      placeholder="Ingrese el nombre del proyecto"
                    />
                    {errors.projectName?.message && (
                      <span className="text-danger">{String(errors.projectName.message)}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha de Inicio</Form.Label>
                    <Form.Control
                      type="date"
                      ref={startDate}
                    />
                    {errors.startDate?.message && (
                      <span className="text-danger">{String(errors.startDate.message)}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha de Finalización</Form.Label>
                    <Form.Control
                      type="date"
                      ref={finishDate}
                    />
                    {errors.finishDate?.message && (
                      <span className="text-danger">{String(errors.finishDate.message)}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                      type="text"
                      ref={category}
                      placeholder="Ingrese la categoría"
                    />
                    {errors.category?.message && (
                      <span className="text-danger">{String(errors.category.message)}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Cuotas</Form.Label>
                <Form.Control
                  type="number"
                  ref={quotas}
                  placeholder="Ingrese el número de cuotas"
                />
                {errors.quotas?.message && (
                  <span className="text-danger">{String(errors.quotas.message)}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  ref={description}
                  placeholder="Ingrese la descripción"
                />
                {errors.description?.message && (
                  <span className="text-danger">{String(errors.description.message)}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Requisitos</Form.Label>
                <Form.Control
                  as="textarea"
                  ref={requirements}
                  placeholder="Ingrese los requisitos"
                />
                {errors.requirements?.message && (
                  <span className="text-danger">{String(errors.requirements.message)}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contacto</Form.Label>
                <Form.Control
                  type="email"
                  ref={contact}
                  placeholder="Ingrese el correo de contacto"
                />
                {errors.contact?.message && (
                  <span className="text-danger">{String(errors.contact.message)}</span>
                )}
              </Form.Group>
            </Card.Body>
          </Card>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" type="submit" onClick={onSubmit}>
              Guardar
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>
    </>
  );
}

export default CreateVolunteering;
