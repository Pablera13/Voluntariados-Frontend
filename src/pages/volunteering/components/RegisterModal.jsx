import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../api/config";
import toast, { Toaster } from 'react-hot-toast';

function RegisterModal({ volunteering, refetch }) {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (volunteering.volunteeringvolunteers && user.volunteer) {
      const enrolled = volunteering.volunteeringvolunteers.some(vol => vol.volunteer.id === user.volunteer.id);
      setIsEnrolled(enrolled);
    }
  }, [volunteering, user]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEnroll = async () => {
    let newEnroll = {
      volunteerId: user.volunteer.id,
      volunteeringId: volunteering.id
    };
    const response = await api.post('/volunteering-volunteer', newEnroll);
    if (response.status === 200 || response.status === 201) {
      toast.success('¡Inscrito con éxito!');
      handleClose();
      refetch();
      setIsEnrolled(true);
    }
  };

  if (user.organization) {
    return null; 
  }

  return (
    <>
      <Button
        className="acceptButton"
        onClick={handleShow}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Inscrito" : "Inscribirse"}
      </Button>
      <Toaster position="bottom-center" />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>¿Está seguro que desea inscribirse?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se registrará con sus datos actuales.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleEnroll} disabled={isEnrolled}>
            Sí, Inscribirse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
