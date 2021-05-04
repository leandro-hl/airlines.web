import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import { useIntl } from "react-intl";
import { Route } from "react-router";
import { Load } from "../shared/Load";

const MenuItems = (routes: { icon; route }[]) => {
  const intl = useIntl();
  return routes.map(route => {
    return (
      <MenuItem icon={route.icon} key={route.route}>
        {intl.formatMessage({ id: route.route })}
        <Link to={route.route} />
      </MenuItem>
    );
  });
};

const RouteItems = (routes: { comp; route; init? }[]) => {
  return routes.map(r => {
    return (
      <Route
        path={`/${r.route}`}
        exact={true}
        render={() => <Load Component={r.comp} initialLoad={r.init} />}
        key={r.route}
      />
    );
  });
};

const routing = (routes: { icon; comp; route; init? }[]) => {
  return {
    routes: RouteItems(routes),
    menuItems: MenuItems(routes)
  };
};

export default routing;
