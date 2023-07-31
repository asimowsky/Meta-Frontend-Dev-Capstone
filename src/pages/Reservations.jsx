import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import logo from "../images/littleLemon.png"
const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const Reservations = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        date: "",
        time: "",
        numberOfPeople: "",
        occasion: "",
    });

    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const randomId = generateRandomId();

        const newItem = { ...formData, id: randomId };

        let storedItems = JSON.parse(localStorage.getItem("items")) || [];

        storedItems.push(newItem);

        localStorage.setItem("items", JSON.stringify(storedItems));

        setItems(storedItems);

        if (newItem) {
            toast.success("Reserved successfully");
        }
        setFormData({
            id: "",
            name: "",
            date: "",
            time: "",
            numberOfPeople: "",
            occasion: "",
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const deleteReservation = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);

        localStorage.setItem("items", JSON.stringify(updatedItems));

        setItems(updatedItems);

        if (updatedItems) {
            toast.error("Reservation deleted successfully");
        }
    };

    useEffect(() => {
        const fetchItems = () => {
            const storedItems = JSON.parse(localStorage.getItem("items")) || [];
            setItems(storedItems);
        };
        fetchItems();
    }, []);


    return (
        <div>
            <section
                id="reservations"
                className="flex justify-center items-center h-screen"
            >
                <div className="box w-5/6 p-5 border-4 border-orange-200 bg_color">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-white uppercase text-center">
                            Reservation Form
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="date"
                                    className="block text-white text-2xl"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="date"
                                    className="block text-white text-2xl"
                                >
                                    Select Date:
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="time"
                                    className="block text-white text-2xl"
                                >
                                    Select Time:
                                </label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                >
                                    <option value="">Select time</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="22:00">22:00</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="numberOfPeople"
                                    className="block text-white text-2xl"
                                >
                                    Number of People:
                                </label>
                                <input
                                    type="number"
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                    min="2"
                                    max="30"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">

                                <label
                                    htmlFor="occasion"
                                    className="block text-white text-2xl"
                                >
                                    Occasion:
                                </label>
                                <select
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                >
                                    <option value="">Select occasion</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 w-full hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"

                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-3">
                <div className="flex  justify-center">
                    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        {items.map((card) => (
                            <div className="bg-white rounded-lg shadow-lg p-6" key={card.id}>
                                <h2 className="text-2xl font-semibold mb-4 flex justify-center gap-4">   <img
                                    src={logo}
                                    alt={"dualSWISSpro logo"}
                                    width={20}
                                    height={10}
                                    loading="eager"
                                /> {card.name}</h2>
                                <p className="text-gray-600 mb-2"><strong>Date:</strong> {card.date}</p>
                                <p className="text-gray-600 mb-2"><strong>Time:</strong> {card.time}</p>
                                <p className="text-gray-600 mb-2"><strong>Number of People:</strong> {card.numberOfPeople}</p>
                                <p className="text-gray-600 mb-4"><strong>Occasion:</strong> {card.occasion}</p>
                                <button onClick={() => deleteReservation(card.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md">Delete Reservation</button>
                            </div>
                        ))}
                    </div>

                </div>
            </section >
        </div >
    );
};