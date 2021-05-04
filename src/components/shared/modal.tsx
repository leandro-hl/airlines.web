import { Button, Modal } from "react-bootstrap";
import React from "react";

const HlModal = ({ title, description, show, handleClose, children }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button type="submit">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export { HlModal };
