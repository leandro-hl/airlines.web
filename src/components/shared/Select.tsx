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
  const [selectOptions, setOptions] = useState([]);

  useEffect(() => {
    if (options instanceof Function) {
      options().then(r => setOptions(generateOptions(r)));
    } else {
      setOptions(generateOptions(options));
    }
  }, []);

  return (
    <>
      <Form.Control
        as="select"
        custom
        name={name}
        onChange={onChange}
        value={defaultValue}
        placeholder={placeholder}
        defaultValue={defaultValue}
      >
        <option disabled selected={!defaultValue}>
          {placeholder}
        </option>
        {selectOptions}
      </Form.Control>
    </>
  );
};

export { Select };
