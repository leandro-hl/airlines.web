import Form from "react-bootstrap/Form";

const Select = ({ label, options, selected, onChange }) => {
  const selectOptions = options.map(opt => {
    return (
      <option value={opt.val} key={opt.val}>
        {opt.desc}
      </option>
    );
  });

  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" custom onChange={onChange} value={selected}>
        {selectOptions}
      </Form.Control>
    </>
  );
};

export default Select;
