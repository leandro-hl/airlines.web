import { useState } from "react";
import { useIntl } from "react-intl";
import routing from "./routing";
import { BrowserRouter } from "react-router-dom";
import {
  FaTachometerAlt,
  FaGlobeAmericas,
  FaLuggageCart,
  FaPlane,
  FaPlaneDeparture
} from "react-icons/fa";

import Aside from "./Aside";
import Main from "./Main";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Airlines } from "../pages/airlines/Airlines";
import { Airports } from "../pages/airports/Airports";
import { Flights } from "../pages/flights/Flights";
import { Planes } from "../pages/planes/Planes";
import { getRestApi } from "../../api/rest-api";

function Layout({ setLocale }) {
  const [collapsed, setCollapsed] = useState(false);
  const image = true;

  const handleLocaleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setLocale(checked ? "ar" : "en");
  };

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const routes = [
    { icon: <FaTachometerAlt />, comp: Dashboard, route: "dashboard" },
    {
      icon: <FaLuggageCart />,
      comp: Airports,
      route: "airports",
      init: getRestApi("airports").getAll
    },
    {
      icon: <FaGlobeAmericas />,
      comp: Airlines,
      route: "airlines",
      init: getRestApi("airlines").getAll
    },
    {
      icon: <FaPlaneDeparture />,
      comp: Flights,
      route: "flights",
      init: getRestApi("flights").getAll
    },
    {
      icon: <FaPlane />,
      comp: Planes,
      route: "planes",
      init: getRestApi("planes").getAll
    }
  ];

  const rt = routing(routes);

  return (
    <div className="app">
      <BrowserRouter>
        <Aside image={image} collapsed={collapsed}>
          {rt.menuItems}
        </Aside>
        <Main handleToggleSidebar={handleToggleSidebar}>{rt.routes}</Main>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
