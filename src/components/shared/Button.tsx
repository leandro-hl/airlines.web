import { Button } from "react-bootstrap";

const HlButton = ({ onClick, submit, children }: { onClick?; submit?; children }) => {
  return (
    <Button onClick={onClick} type={submit ? "submit" : "button"}>
      {children}
    </Button>
  );
};

export { HlButton };
