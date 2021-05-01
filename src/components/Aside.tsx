import { useIntl } from "react-intl";
import { ProSidebar, Menu, SidebarHeader, SidebarContent } from "react-pro-sidebar";

import sidebarBg from "./../assets/bg1.jpg";

const Aside = ({ image, collapsed, toggled, handleToggleSidebar, children }) => {
  const intl = useIntl();

  return (
    <ProSidebar
      image={image ? sidebarBg : null}
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
        <Menu iconShape="circle">{children}</Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
