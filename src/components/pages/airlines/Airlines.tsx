import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import api from "./../../../api/airlines-api";
import { buildTable } from "../../shared/Table";
import { HlButton } from "../../shared/Button";
import { FormModal, submit } from "../../shared/FormModal";
import { useIntl } from "react-intl";

const Airlines = ({ data }) => {
  const [airlines, setAirlines] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const intl = useIntl();

  const onSubmit = async airline =>
    await submit(airline, airlines, setAirlines, api, () => showModal([false]));

  const actions = [
    {
      desc: intl.formatMessage({ id: "edit" }),
      onClick: async row => {
        console.log(row);
        const airline = (await api.get(row.id)).data;
        showModal([true, airline]);
      }
    }
  ];

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

export { Airlines };
