import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Reservations } from "./pages/Reservations";
import { Toaster } from "react-hot-toast"
import { Contact } from "./pages/Contact";
export default function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes></>
    );
}
