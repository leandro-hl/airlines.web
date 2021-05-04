import Select from "../../shared/Select";
import Form from "react-bootstrap/Form";
import { useIntl } from "react-intl";
import React, { useState } from "react";
import { getData } from "./functions";
import TwoLinesChart from "../../shared/TwoLinesChart";

const ArrivalsAndDeparturesByAirport = () => {
  const intl = useIntl();

  const [airport, setAirport] = useState({ val: "UK", desc: "London" });

  const { airports, data } = getData();

  const onChange = ev => {
    setAirport(airports.find(x => x.val === ev.currentTarget.value));
  };

  return (
    <>
      <h4>Vuelos que partieron y llegaron a un aeropuerto en un mes determinado</h4>
      <p>Parametros: aeropuerto (ddl) mes/año (Date)</p>

      <Form>
        <Form.Group controlId="params">
          <Select
            label={intl.formatMessage({ id: "airportSelect" })}
            options={airports}
            selected={airport.val}
            onChange={onChange}
          />
        </Form.Group>
      </Form>

      <TwoLinesChart airport={airport} data={data} />
    </>
  );
};

export default ArrivalsAndDeparturesByAirport;
