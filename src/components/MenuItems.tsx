import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import { useIntl } from "react-intl";
import { Route } from "react-router";

const MenuItems = (routes: { icon; route }[]) => {
  const intl = useIntl();
  return routes.map(route => {
    return (
      <MenuItem icon={route.icon} key={route.toString()}>
        {intl.formatMessage({ id: route.route })}
        <Link to={route.route} />
      </MenuItem>
    );
  });
};

const RouteItems = (routes: { comp; route }[]) => {
  return routes.map(route => {
    return (
      <Route
        path={`/${route.route}`}
        exact={true}
        component={route.comp}
        key={route.toString()}
      />
    );
  });
};

const routing = (routes: { icon; comp; route }[]) => {
  return {
    routes: RouteItems(routes),
    menuItems: MenuItems(routes)
  };
};

export default routing;
