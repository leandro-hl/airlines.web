import { useState } from "react";
import { useIntl } from "react-intl";
import routing from "./MenuItems";
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

function Layout({ setLocale }) {
  const intl = useIntl();
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleLocaleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setLocale(checked ? "ar" : "en");
  };

  const handleImageChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value: boolean | ((prevState: boolean) => boolean)) => {
    setToggled(value);
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
    <div className={`app ${toggled ? "toggled" : ""}`}>
      <BrowserRouter>
        <Aside
          image={image}
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
        >
          {rt.menuItems}
        </Aside>
        <Main handleToggleSidebar={handleToggleSidebar}>{rt.routes}</Main>
      </BrowserRouter>
    </div>
  );
}

const Dashboard = () => {
  return <div>Here would be charts</div>;
};

const Airports = () => {
  return <div>Here would be airports</div>;
};

const Airlines = () => {
  return <div>Here would be airlines</div>;
};

const Flights = () => {
  return <div>Here would be flights</div>;
};

const Planes = () => {
  return <div>Here would be planes</div>;
};

export default Layout;
