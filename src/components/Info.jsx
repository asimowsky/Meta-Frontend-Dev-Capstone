import React from "react";
import dinner from "../images/dinner.png";
import { useTranslation } from "react-i18next";
export const Info = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto px-4 py-4 w-full">
            <div className="flex flex-col-reverse justify-between items-center md:flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-4">{t("text_48")}</h1>
                    <p className="text-gray-600">{t("text_51")}</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center rotate">
                    <img
                        src={dinner}
                        alt="Nature"
                        className="rounded-lg"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};
