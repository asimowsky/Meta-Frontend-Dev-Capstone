import React, { useState } from "react";
import { toast } from "react-hot-toast";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        title: "",
        message: "",
        email: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        toast.success("Your message has been sent successfully to our contact center!")
        setFormData({
            name: "",
            date: "",
            title: "",
            message: "",
            email: ""
        });

    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
        <div>
            <section
                id="contact"
                className="flex justify-center items-center h-screen"
            >
                <div className="box w-5/6 p-5 border-4 border-orange-200 bg_color">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-white uppercase text-center">
                            Contact Form
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-white text-2xl"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-white text-2xl"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-white text-2xl"
                                >
                                    Name and Surname
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
                                    htmlFor="message"
                                    className="block text-white text-2xl"
                                >
                                    Your Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    min="2"
                                    max="30"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded p-2 w-full"
                                    required
                                />
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


        </div >
    );
};