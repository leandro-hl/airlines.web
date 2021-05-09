import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const generateOptions = options => {
  return options?.map(opt => {
    return (
      <option value={opt.val} key={opt.val}>
        {opt.desc}
      </option>
    );
  });
};

const Select = ({ name, options, defaultValue, placeholder, onChange }) => {
  const [availableOptions, setAvailableOptions] = useState([]);

  useEffect(() => {
    if (options instanceof Function) {
      options().then(r => setAvailableOptions(generateOptions(r)));
    } else {
      setAvailableOptions(generateOptions(options));
    }
  }, []);

  return (
    <>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        as="select"
        custom
        name={name}
        onChange={onChange}
        value={defaultValue}
      >
        {!defaultValue ? (
          <option disabled selected>
            {placeholder}
          </option>
        ) : null}
        {availableOptions}
      </Form.Control>
    </>
  );
};

export { Select };
