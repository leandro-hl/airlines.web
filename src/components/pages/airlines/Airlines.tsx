import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

import { buildTable } from "../../shared/table";
import { AirlineModal } from "./AirlineModal";

const Airlines = ({ data }) => {
  const [airlines, setAirlines] = useState(data);
  const [show, setShow] = useState(false);

  const actions = [
    {
      desc: "Edit",
      onClick: row => {
        console.log(row);
        setShow(true);
      }
    }
  ];

  return (
    <Container>
      <Row>
        <Button
          onClick={() => {
            setAirlines([...airlines, newAirline(airlines)]);
            setShow(true);
          }}
        >
          +
        </Button>
      </Row>
      <Row>{buildTable(airlines, actions)}</Row>

      <AirlineModal show={show} setShow={setShow} />
    </Container>
  );
};

const newAirline = airlines => {
  const last = airlines.slice(-1)[0];
  const id = last.id + 1;
  return { id: id, name: id.toString() };
};

export { Airlines };
