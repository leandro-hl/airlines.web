import { useIntl } from "react-intl";

const Desc = ({ reactLogo }) => {
  const intl = useIntl();
  return (
    <header>
      <h1>
        <img width={80} src={reactLogo} alt="react logo" />{" "}
        {intl.formatMessage({ id: "title" })}
      </h1>
      <p>{intl.formatMessage({ id: "description" })}</p>
      <div className="social-bagdes">
        <a
          href="https://github.com/azouaoui-med/react-pro-sidebar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="GitHub stars"
            src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
          />
        </a>
        <a
          href="https://github.com/azouaoui-med/react-pro-sidebar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social"
          />
        </a>
      </div>
    </header>
  );
};
