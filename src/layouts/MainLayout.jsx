import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Outlet />
            <section id="footer">
                <Footer />
            </section>
        </div>
    );
};
