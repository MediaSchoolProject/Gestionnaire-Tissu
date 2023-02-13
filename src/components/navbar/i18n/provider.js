import React, { Fragment } from "react";
import { intlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";

const Provider = ({ children, locale= LOCALES.ENGHLISH }) => {
  <intlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </intlProvider>;
};

export default Provider;