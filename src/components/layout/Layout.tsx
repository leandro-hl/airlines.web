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

function Layout({ setLocale }) {
  const intl = useIntl();
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);

  const handleLocaleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setLocale(checked ? "ar" : "en");
  };

  const handleImageChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setImage(checked);
  };

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const routes = [
    { icon: <FaTachometerAlt />, comp: Dashboard, route: "dashboard" },
    { icon: <FaLuggageCart />, comp: Airports, route: "airports" },
    { icon: <FaGlobeAmericas />, comp: Airlines, route: "airlines" },
    { icon: <FaPlaneDeparture />, comp: Flights, route: "flights" },
    { icon: <FaPlane />, comp: Planes, route: "planes" }
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

const Airports = () => {
  return <div>Here would be airports</div>;
};

const Flights = () => {
  return <div>Here would be flights</div>;
};

const Planes = () => {
  return <div>Here would be planes</div>;
};

export default Layout;
