import { useIntl } from "react-intl";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGlobeAmericas,
  FaLuggageCart,
  FaPlane,
  FaPlaneDeparture
} from "react-icons/fa";
import sidebarBg from "./../assets/bg1.jpg";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={image ? sidebarBg : null}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {intl.formatMessage({ id: "sidebarTitle" })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />}>
            {intl.formatMessage({ id: "dashboard" })}
          </MenuItem>
          <MenuItem icon={<FaLuggageCart />}>
            {intl.formatMessage({ id: "airports" })}
          </MenuItem>
          <MenuItem icon={<FaGlobeAmericas />}>
            {intl.formatMessage({ id: "airlines" })}
          </MenuItem>
          <MenuItem icon={<FaPlaneDeparture />}>
            {intl.formatMessage({ id: "flights" })}
          </MenuItem>
          <MenuItem icon={<FaPlane />}>{intl.formatMessage({ id: "planes" })}</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
