import React from "react";
import logo from "../images/littleLemon.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-white bg-opacity-30">
            <div className="container mx-auto px-4 py-8 text-center">
                <Link to="/" className="flex items-center justify-center mb-4">
                    <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                </Link>
                <ul className="flex flex-wrap justify-center mb-6 text-sm font-medium text-gray-500">
                    <li>
                        <Link
                            to="/reservations"
                            className="mr-4 hover:underline"
                        >
                            {t("reservations")}
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:underline">
                            {t("contact")}
                        </Link>
                    </li>
                </ul>
                <hr className="my-6 border-gray-200" />
                <span className="block text-sm text-gray-500">
                    Copyright © 2023 asimowsky™
                    {t("rights")}.
                </span>
            </div>
        </footer>
    );
};
