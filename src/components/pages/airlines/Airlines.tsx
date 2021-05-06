import React, { useState } from "react";
import { getRestApi } from "../../../api/rest-api";
import { editAction, addAction } from "../../shared/actions";
import { submit } from "../../shared/FormModal";
import { PageLayout } from "../PageLayout";
import { useIntl } from "react-intl";

const Airlines = ({ id, data }) => {
  const [airlines, setAirlines] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const api = getRestApi(id);
  const intl = useIntl();

  //header
  const headerConfig = {
    buttons: [addAction(intl, () => showModal([true]))]
  };

  //grid
  const gridConfig = {
    data: airlines,
    columnNames: ["id", "name"],
    actions: [editAction(intl, api.get, airline => showModal([true, airline]))]
  };

  //modal
  const modalConfig = {
    state: modalState,
    formControls: {
      name: { type: "text", desc: intl.formatMessage({ id: "name" }) }
    },
    onSubmit: async airline =>
      await submit(airline, airlines, setAirlines, api, () => showModal([false])),
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

export { Airlines };
