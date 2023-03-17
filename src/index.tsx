import i18n from "./common/i18n";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "./index.css";
const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </I18nextProvider>
);
