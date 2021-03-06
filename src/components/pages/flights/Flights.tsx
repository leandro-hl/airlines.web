import React, { useState } from "react";
import { getRestApi } from "../../../api/rest-api";
import { editAction, addAction } from "../../shared/actions";
import { submit } from "../../shared/FormModal";
import { PageLayout } from "../PageLayout";
import { useIntl } from "react-intl";

const Flights = ({ id, data }) => {
  const [flights, setFlights] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const api = getRestApi(id);
  const airportsApi = getRestApi("airports");
  const airlinesApi = getRestApi("airlines");
  const intl = useIntl();

  //header
  const headerConfig = {
    buttons: [addAction(intl, () => showModal([true]))]
  };

  //grid
  //dependency between how the column is called and the data shown (make obj descr and prop)
  const gridConfig = {
    data: flights,
    columnsConfig: [
      { key: "id", name: "id" },
      { key: "departure", name: "departure" },
      { key: "departureDate", name: "departure date" },
      { key: "arrival", name: "arrival" },
      { key: "arrivalDate", name: "arrival date" },
      { key: "airlineName", name: "Airline" }
    ],
    actions: [editAction(intl, api.get, flight => showModal([true, flight]))]
  };

  //modal
  const modalConfig = {
    state: modalState,
    formControls: {
      departureId: {
        type: "select",
        desc: intl.formatMessage({ id: "departure" }),
        options: async () => {
          return (await airportsApi.options()).data;
        },
        label: intl.formatMessage({ id: "departures" })
      },
      arrivalId: {
        type: "select",
        desc: intl.formatMessage({ id: "arrival" }),
        options: async () => {
          return (await airportsApi.options()).data;
        },
        label: intl.formatMessage({ id: "arrivals" })
      },
      airlineId: {
        type: "select",
        desc: intl.formatMessage({ id: "airline" }),
        options: async () => {
          return (await airlinesApi.options()).data;
        },
        label: intl.formatMessage({ id: "airlines" })
      }
    },
    onSubmit: async flight =>
      await submit(flight, flights, setFlights, api, () => showModal([false])),
    onHide: () => showModal([false])
  };

  return (
    <PageLayout
      id={id}
      headerConfig={headerConfig}
      gridConfig={gridConfig}
      modalConfig={modalConfig}
    />
  );
};

export { Flights };
