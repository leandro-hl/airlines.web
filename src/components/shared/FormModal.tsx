import { HlModalContainer, HlModal } from "./Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Select } from "./Select";

const FormModal = ({ state, title, description, controls, onHide, onSubmit }) => {
  const [formData, setFormData] = useState(state[1] ?? {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const controlList = (
    <FormControlList
      data={formData}
      controlsConfig={controls}
      handleChange={handleChange}
    />
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

const FormControlList = ({ data, controlsConfig, handleChange }) => {
  const controlTypes = {
    text: Form.Control,
    select: Select
  };

  return (
    <>
      {Object.keys(controlsConfig).map((prop, i) => {
        const config = controlsConfig[prop];
        const Control = controlTypes[config.type];

        const controlConfig = {
          name: prop,
          key: i,
          defaultValue: data[prop],
          onChange: handleChange,
          placeholder: config.desc,
          options: config.options,
          label: config.label
        };

        return <Control {...controlConfig} />;
      })}
    </>
  );
};

const submit = async (toSubmit, collection, setState, api, onFinished) => {
  if (toSubmit.id) {
    const updated = (await api.put(toSubmit.id, toSubmit)).data;

    setState(
      collection.map(item => {
        return item.id == toSubmit.id ? updated : item;
      })
    );
  } else {
    toSubmit.id = (await api.post(toSubmit)).data.id;
    setState([...collection, toSubmit]);
  }

  onFinished();
};

export { FormModal, submit };
