import "./App.css";
import { IntlProvider } from "react-intl";
import Layout from "./components/Layout";
import { useState } from "react";

import messages_en from "./translations/en.json";

const messages = {
  en: messages_en
};

function App() {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
