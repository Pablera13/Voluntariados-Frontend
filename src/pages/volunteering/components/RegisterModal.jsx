import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="acceptButton" onClick={handleShow}>
        Inscribirse
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Está seguro que desea incribirse?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se registrará con sus datos actuales</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Si, Incribirse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
