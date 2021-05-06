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
  const intl = useIntl();

  //header
  const headerConfig = {
    buttons: [addAction(intl, () => showModal([true]))]
  };

  //grid
  const gridConfig = {
    data: flights,
    columnNames: ["id", "departure", "departure date", "arrival", "arrival date"],
    actions: [editAction(intl, api.get, flight => showModal([true, flight]))]
  };

  //modal
  const modalConfig = {
    state: modalState,
    formControls: {
      name: { type: "text", desc: intl.formatMessage({ id: "name" }) }
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
