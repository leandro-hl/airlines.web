import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getRestApi } from "../../../api/rest-api";
import { buildTable } from "../../shared/Table";
import { HlButton } from "../../shared/Button";
import { editAction } from "../../shared/actions";
import { FormModal, submit } from "../../shared/FormModal";
import { useIntl } from "react-intl";

const Flights = ({ data }) => {
  const [airlines, setAirlines] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const api = getRestApi("flights");
  const intl = useIntl();

  const onSubmit = async airline =>
    await submit(airline, airlines, setAirlines, api, () => showModal([false]));

  const actions = [editAction(intl, api.get, airline => showModal([true, airline]))];

  const formControls = {
    name: { type: "text", desc: intl.formatMessage({ id: "name" }) }
  };

  return (
    <Container>
      <Row>
        <HlButton onClick={() => showModal([true])}>+</HlButton>
      </Row>
      <Row>{buildTable(airlines, actions)}</Row>

      {modalState[0] && (
        <FormModal
          state={modalState}
          controls={formControls}
          title={intl.formatMessage({ id: "airline" })}
          description={intl.formatMessage({ id: "airline_create_update" })}
          onSubmit={onSubmit}
          onHide={() => showModal([false])}
        />
      )}
    </Container>
  );
};

export { Flights };
