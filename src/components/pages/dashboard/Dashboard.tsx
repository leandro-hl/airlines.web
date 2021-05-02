import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrivalsAndDeparturesByAirport from "./ArrivalsAndDeparturesByAirport";

const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ArrivalsAndDeparturesByAirport />
          </Col>
          <Col>
            <ArrivalsAndDeparturesByAirport />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Dashboard };
