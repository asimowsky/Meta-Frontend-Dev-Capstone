import { useState } from "react";
import logo from "../images/littleLemon.png";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    return (
        <nav className="flex filter drop-shadow-md bg-black bg-opacity-30 px-4 py-4 h-20 items-center fixed top-0 left-0 right-0 z-50">
            <div
                className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
                    open ? "-translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
            >
                <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                    <Link to="/" className="text-xl font-semibold logo">
                        <img src={logo} alt="dualSWISSpro logo" />
                    </Link>
                </div>
                <div className="flex flex-col ml-4">
                    <Link
                        to="/reservations"
                        className="text-xl font-medium my-4 "
                        onClick={() => setTimeout(() => setOpen(!open), 100)}
                    >
                        {t("reservations")}
                    </Link>
                    <Link
                        to="/contact"
                        className="text-xl font-normal my-4"
                        onClick={() => setTimeout(() => setOpen(!open), 100)}
                        data-aos="fade-up"
                    >
                        {t("contact")}
                    </Link>

                    <LanguageSwitcher />
                </div>
            </div>
            <div className="w-3/12 flex items-center">
                <Link to="/" className="text-2xl font-semibold logo text-white">
                    <img
                        src={logo}
                        alt={"dualSWISSpro logo"}
                        width={150}
                        height={150}
                        loading="eager"
                    />
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <div
                    className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                            open ? "rotate-45 translate-y-3.5" : ""
                        }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                            open ? "w-0" : "w-full"
                        }`}
                    />
                    <span
                        className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                            open ? "-rotate-45 -translate-y-3.5" : ""
                        }`}
                    />
                </div>

                <div className="hidden md:flex text-white flex gap-3">
                    <LanguageSwitcher />
                    <Link to="/reservations"> {t("reservations")}</Link>
                    <Link to="/contact"> {t("contact")}</Link>
                </div>
            </div>
        </nav>
    );
};
