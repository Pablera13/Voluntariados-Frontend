import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../../../context/AuthContext";
import toast, { Toaster } from 'react-hot-toast';

function ParticipantsModal({ volunteers }) {
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="declineButton" onClick={handleShow}>
        Inscritos
      </button>
      <Toaster position="bottom-center"/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Voluntarios inscritos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {volunteers.map((volunteer) => (
            <div key={volunteer.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{volunteer.volunteer.name} {volunteer.volunteer.lastName1} {volunteer.volunteer.lastName2}</h5>
                <p className="card-text"><strong>Cédula:</strong> {volunteer.volunteer.cedula}</p>
                <p className="card-text"><strong>Email:</strong> {volunteer.volunteer.user.mail}</p>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ParticipantsModal;
