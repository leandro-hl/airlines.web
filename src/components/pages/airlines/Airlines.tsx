import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import api from "./../../../api/airlines-api";
import { buildTable } from "../../shared/Table";
import { HlButton } from "../../shared/Button";
import { FormModal } from "../../shared/FormModal";

const Airlines = ({ data }) => {
  const [airlines, setAirlines] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const onSubmit = async airline => {
    if (airline.id) {
      await api.put(airline.id, airline);

      setAirlines(
        airlines.map(line => {
          return line.id == airline.id ? airline : line;
        })
      );
    } else {
      airline.id = (await api.post(airline)).data.id;
      setAirlines([...airlines, airline]);
    }

    showModal([false]);
  };

  const actions = [
    {
      desc: "Edit",
      onClick: async row => {
        console.log(row);
        const airline = (await api.get(row.id)).data;
        showModal([true, airline]);
      }
    }
  ];

  const formControls = { name: { type: "text", desc: "Name" } };

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
          title="Airline"
          description="Create an airline or update an existing one."
          onSubmit={onSubmit}
          onHide={() => showModal([false])}
        />
      )}
    </Container>
  );
};

const newAirline = airlines => {
  const last = airlines.slice(-1)[0];
  const id = last.id + 1;
  return { id: id, name: id.toString() };
};

export { Airlines };
