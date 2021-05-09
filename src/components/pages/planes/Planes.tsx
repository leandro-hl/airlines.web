import React, { useState } from "react";
import { getRestApi } from "../../../api/rest-api";
import { editAction, addAction } from "../../shared/actions";
import { submit } from "../../shared/FormModal";
import { PageLayout } from "../PageLayout";
import { useIntl } from "react-intl";

const Planes = ({ id, data }) => {
  const [planes, setPlanes] = useState(data);
  const [modalState, showModal] = useState([false, {}]);

  const api = getRestApi(id);
  const intl = useIntl();

  //header
  const headerConfig = {
    buttons: [addAction(intl, () => showModal([true]))]
  };

  //grid
  const gridConfig = {
    data: planes,
    columnsConfig: [
      { key: "id", name: "id" },
      { key: "model", name: "model" },
      { key: "seats", name: "seats" }
    ],
    actions: [editAction(intl, api.get, plane => showModal([true, plane]))]
  };

  //modal
  const modalConfig = {
    state: modalState,
    formControls: {
      model: { type: "text", desc: intl.formatMessage({ id: "model" }) },
      seats: { type: "text", desc: intl.formatMessage({ id: "seats" }) }
    },
    onSubmit: async plane =>
      await submit(plane, planes, setPlanes, api, () => showModal([false])),
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

export { Planes };
