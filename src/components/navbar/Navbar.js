import React from "react";
import { Link } from "react-router-dom";
import image from "../../pictures/logo.jpg";
import enFlag from "../../pictures/enFlag.jpg";
import frFlag from "../../pictures/frFlag.jpg";

import { I18nProvider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";

export default function Navbar() {
  return (
    <nav>
      <label>
        <img src={image} />
        <Link to="/" className="Home">
          UNIVERSAL KIDS{" "}
        </Link>
        <Link to="/Login" className="Logout">
          {" "}
          LOGOUT
        </Link>
        {/* traduire l'application */}
        <I18nProvider locales={LOCALES.FRENCH}>
          <FormattedMessage id="START">
            <img id="flag" src={frFlag} />
          </FormattedMessage>
        </I18nProvider>
        <I18nProvider locales={LOCALES.ENGHLISH}>
          <FormattedMessage>
            <img id="flag" src={enFlag} />
          </FormattedMessage>
        </I18nProvider>
      </label>
    </nav>
  );
}
