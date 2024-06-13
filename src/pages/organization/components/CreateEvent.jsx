import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import { FormEventSchema } from "../../../types.ts"; // Asegúrate de importar el esquema correcto
import api from "../../../api/config.js";

function CreateEvent({ organizationId, refetch }) {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(FormEventSchema),
  });

  const name = useRef();
  const description = useRef();
  const date = useRef();
  const address = useRef();
  const category = useRef();
  const quota = useRef();
  const contact = useRef();

  const onSubmit = async () => {

    let newEvent = {
      name: name.current.value,
      description: description.current.value,
      date: date.current.value,
      address: address.current.value,
      category: category.current.value,
      quota: parseInt(quota.current.value),
      contact: contact.current.value,
      organizationId: organizationId
    };

    const response = await api.post('event', newEvent);

    if (response.status === 200 || response.status === 201) {
      toast.success('Evento creado con éxito!');
      reset();
      handleClose();
      refetch();
    }
  };

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
          <Modal.Title>Nuevo Evento</Modal.Title>
        </Modal.Header>

        <br></br>
        <br></br>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Card className="card-form">
            <Card.Body>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del Evento</Form.Label>
                    <Form.Control
                      ref={name}
                      type="text"
                      placeholder="Ingrese el nombre del evento"
                    />
                    {errors.name?.message && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Fecha y Hora</Form.Label>
                    <Form.Control
                      ref={date}
                      type="datetime-local"
                      placeholder="Ingrese la fecha y hora del evento"
                    />
                    {errors.date?.message && (
                      <span className="text-danger">{errors.date.message}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      ref={address}
                      type="text"
                      placeholder="Ingrese la dirección del evento"
                    />
                    {errors.address?.message && (
                      <span className="text-danger">{errors.address.message}</span>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control
                      ref={category}
                      type="text"
                      placeholder="Ingrese la categoría del evento"
                    />
                    {errors.category?.message && (
                      <span className="text-danger">{errors.category.message}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Cupo</Form.Label>
                <Form.Control
                  ref={quota}
                  type="number"
                  placeholder="Ingrese el número de cupos"
                />
                {errors.quota?.message && (
                  <span className="text-danger">{errors.quota.message}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  ref={description}
                  as="textarea"
                  placeholder="Ingrese la descripción del evento"
                />
                {errors.description?.message && (
                  <span className="text-danger">{errors.description.message}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contacto</Form.Label>
                <Form.Control
                  ref={contact}
                  type="email"
                  placeholder="Ingrese el correo de contacto"
                />
                {errors.contact?.message && (
                  <span className="text-danger">{errors.contact.message}</span>
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

export default CreateEvent;
