import { Modal } from "react-bootstrap";
import { HlButton } from "./Button";

const HlModalContainer = ({ show, onHide, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {children}
    </Modal>
  );
};

const HlModal = ({ title, description, onHide, children }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <HlButton onClick={onHide}>Close</HlButton>
        <HlButton submit>Save</HlButton>
      </Modal.Footer>
    </>
  );
};

export { HlModalContainer, HlModal };
