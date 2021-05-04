import { HlModal } from "../../shared/modal";
import { AirlineForm } from "./AirlineForm";

const AirlineModal = ({ show, setShow }) => {
  return (
    <HlModal
      show={show}
      title="Airline"
      description="Create an airline or update an existing one."
      handleClose={() => setShow(false)}
    >
      <AirlineForm />
    </HlModal>
  );
};

export { AirlineModal };
