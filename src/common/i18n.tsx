import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(
    {
      lng: "en",
      fallbackLng: ["en"],
      backend: {
        loadPath: "/i18n/translations/{{lng}}/{{ns}}.json",
      },
      ns: ["common", "data"],
      defaultNS: "common",
    },
    (err) => {
      if (err)
        console.log(
          "An Error occured from **i18n** while loading resources\n",
          err
        );
    }
  );

export default i18n;
