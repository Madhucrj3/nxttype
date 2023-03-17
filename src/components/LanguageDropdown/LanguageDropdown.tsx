import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    setSelectedLang(language);
    i18n.changeLanguage(language.substring(0, 2));
  };

  return (
    <select
      value={selectedLang}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      {["english", "hindi", "telgu"].map((lng) => (
        <option key={lng} value={lng}>
          {lng}
        </option>
      ))}
    </select>
  );
};
export default LanguageDropdown;
