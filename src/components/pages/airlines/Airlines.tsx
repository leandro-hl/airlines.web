import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { tableBuilder } from "../../shared/table";

const Airlines = ({ data }) => {
  const [airlines, setAirlines] = useState(data);

  const actions = [{ desc: "Edit", onClick: row => console.log(row) }];

  return (
    <Container>
      <Row>
        <Button onClick={() => setAirlines([...airlines, newAirline(airlines)])}>
          +
        </Button>
      </Row>
      <Row>{tableBuilder(airlines, actions)}</Row>
    </Container>
  );
};

const newAirline = airlines => {
  const last = airlines.slice(-1)[0];
  const id = last.id + 1;
  return { id: id, name: id.toString() };
};

export { Airlines };
