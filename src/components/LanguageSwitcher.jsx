import React from "react";
import { useTranslation } from "react-i18next";
import en from "../images/en.png";
import fr from "../images/france.png";
import de from "../images/germany.png";
export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex gap-4">
            <button onClick={() => changeLanguage("en")}>
                <img src={en} alt="en" />
            </button>
            <button onClick={() => changeLanguage("fr")}>
                <img src={fr} alt="French" />
            </button>
            <button onClick={() => changeLanguage("de")}>
                <img src={de} alt="German" />
            </button>
        </div>
    );
};
