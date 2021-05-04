import { Form } from "react-bootstrap";

const AirlineForm = () => {
  return (
    <Form>
      <Form.Group controlId="params">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
    </Form>
  );
};

export { AirlineForm };
