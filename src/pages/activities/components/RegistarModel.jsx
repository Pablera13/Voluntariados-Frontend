import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../api/config";
import toast, { Toaster } from "react-hot-toast";

function RegisterModal({ activity, refetch }) {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (activity.eventvolunteers && user.volunteer) {
      const enrolled = activity.eventvolunteers.some(vol => vol.volunteer.id === user.volunteer.id);
      setIsEnrolled(enrolled);
    }
  }, [activity, user]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEnrroll = async () => {
    let newEnrroll = {
      volunteerId: user.volunteer.id,
      eventId: activity.id,
    };
    const response = await api.post("/event-volunteer", newEnrroll);
    if (response.status == 200 || response.status == 201) {
      toast.success("Inscrito con éxito!");
      handleClose();
      refetch();
    }
  };

  if (user.organization) {
    return null;
  }

  console.log(user);
  return (
    <>
      {/* <button className="acceptButton" onClick={handleShow}>
        Inscribirse
      </button>
      
      <Toaster position="bottom-center" /> */}

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
          <Modal.Title>Está seguro que desea incribirse?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se registrará con sus datos actuales</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleEnrroll}>
            Si, Incribirse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
