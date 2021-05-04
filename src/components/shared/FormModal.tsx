import { HlModalContainer, HlModal } from "./Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";

const FormModal = ({ state, title, description, controls, onHide, onSubmit }) => {
  const [formData, setFormData] = useState(state[1] ?? {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const controlList = (
    <FormControlList data={formData} controls={controls} handleChange={handleChange} />
  );

  return (
    <HlModalContainer show={state[0]} onHide={onHide}>
      <Form
        onSubmit={e => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <HlModal title={title} description={description} onHide={onHide}>
          <Form.Group controlId="params">{controlList}</Form.Group>
        </HlModal>
      </Form>
    </HlModalContainer>
  );
};

const FormControlList = ({ data, controls, handleChange }) => {
  return (
    <>
      {Object.keys(controls).map(prop => {
        return (
          <Form.Control
            type={controls[prop].type}
            key={prop}
            placeholder={controls[prop].desc}
            name={prop}
            defaultValue={data[prop]}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export { FormModal };
