import { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setRtl(checked);
    setLocale(checked ? "ar" : "en");
  };
  const handleImageChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value: boolean | ((prevState: boolean) => boolean)) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}

export default Layout;
