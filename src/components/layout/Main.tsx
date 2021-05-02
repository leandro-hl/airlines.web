import { FaBars } from "react-icons/fa";

const Main = ({ handleToggleSidebar, children }) => {
  return (
    <main>
      <div className="btn-toggle" onClick={handleToggleSidebar}>
        <FaBars />
      </div>
      {children}
    </main>
  );
};

export default Main;
