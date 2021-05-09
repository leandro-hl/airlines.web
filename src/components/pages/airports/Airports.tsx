import React, { useState } from "react";
import { getRestApi } from "../../../api/rest-api";
import { editAction, addAction } from "../../shared/actions";
import { submit } from "../../shared/FormModal";
import { PageLayout } from "../PageLayout";
import { useIntl } from "react-intl";

const Airports = ({ id, data }) => {
  const [airports, setAirports] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const api = getRestApi(id);
  const intl = useIntl();

  //header
  const headerConfig = {
    buttons: [addAction(intl, () => showModal([true]))]
  };

  //grid
  const gridConfig = {
    data: airports,
    columnsConfig: [
      { key: "id", name: "id" },
      { key: "name", name: "name" }
    ],
    actions: [editAction(intl, api.get, airport => showModal([true, airport]))]
  };

  //modal
  const modalConfig = {
    state: modalState,
    formControls: {
      name: { type: "text", desc: intl.formatMessage({ id: "name" }) }
    },
    onSubmit: async airport =>
      await submit(airport, airports, setAirports, api, () => showModal([false])),
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

export { Airports };
