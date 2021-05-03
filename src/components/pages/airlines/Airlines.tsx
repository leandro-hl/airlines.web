import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { HlColumn, HlRow, HlTable } from "../../shared/table";

const Airlines = () => {
  //get airlines
  const [airlines, setAirlines] = useState(getAirlines());

  useEffect(() => {});

  const columnNames = Object.keys(airlines[0]);
  const columns = columnNames.map(name => <HlColumn name={name} key={name} />);

  const actions = [{ desc: "Edit", onClick: row => console.log(row) }];

  const rows = airlines.map((row, i) => (
    <HlRow data={row} columns={columns} actions={actions} key={i} />
  ));

  return (
    <Container>
      <Row>
        <Button onClick={() => setAirlines([...airlines, newAirline(airlines)])}>
          +
        </Button>
      </Row>
      <Row>
        <HlTable columns={columns} rows={rows} actions={actions} />
      </Row>
    </Container>
  );
};

const newAirline = airlines => {
  const last = airlines.slice(-1)[0];
  const id = last.id + 1;
  return { id: id, name: id.toString() };
};

const getAirlines = () => {
  const airlines = [];
  for (let i = 0; i < 10; i++) {
    airlines.push({ id: i, name: i.toString() });
  }
  return airlines;
};

export { Airlines };
