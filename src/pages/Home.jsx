import React from "react";
import { Info } from "../components/Info";
import { RoundedCard } from "../components/RoundedCard";
import { Table } from "../components/Table";
import first from "../images/1.png";
import second from "../images/2.png";
import third from "../images/3.png";
import fourth from "../images/4.png";
import fifth from "../images/5.png";
import sixth from "../images/6.png";
import { useTranslation } from "react-i18next";
import logo from "../images/littleLemon.png";
import { Link } from "react-router-dom";
export const Home = () => {
    const { t } = useTranslation();
    const cardData = [
        {
            id: 1,
            imageSrc: first,
            heading: t("text_1"),
            description: t("text_2"),
        },
        {
            id: 2,
            imageSrc: second,
            heading: t("text_3"),
            description: t("text_4"),
        },
        {
            id: 3,
            imageSrc: third,
            heading: t("text_5"),
            description: t("text_6"),
        },
        {
            id: 4,
            imageSrc: fourth,
            heading: t("text_7"),
            description: t("text_8"),
        },
        {
            id: 5,
            imageSrc: fifth,
            heading: t("text_9"),
            description: t("text_10"),
        },
        {
            id: 6,
            imageSrc: sixth,
            heading: t("text_11"),
            description: t("text_12"),
        },
    ];
    const headings = [t("text_13"), "   ", t("text_15")];

    const data = [
        [t("text_16"), t("text_17"), t("text_18"), t("text_19")],
        [t("text_20"), "/", t("text_22"), "/"],
        [t("text_24"), "/", t("text_26"), "/"],
        [t("text_28"), "/", t("text_30"), "/"],
        [t("text_32"), "/", t("text_34"), "/"],
        [t("text_36"), "/", t("text_38"), "/"],
        [t("text_40"), "/", t("text_42"), "/"],
        [t("text_44"), "/", t("text_46"), "/"],
    ];

    return (
        <>
            <section
                id="hero"
                className="flex justify-center items-center h-screen"
            >
                <div className="box max-w-7xl p-5 border-4 bg_color">
                    <h1 className="text-yellow-400 text-center text-5xl font-bold uppercase">
                        {t("text_48")}
                        <br />
                        <span className="text-3xl font-bold text-white  ">
                            {t("text_49")}
                        </span>
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <Link to="/reservations">
                          <button class="bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded flex items-center gap-4 ">
      Make a Reservation
                                <img
                                    src={logo}
                                    alt={"dualSWISSpro logo"}
                                    width={10}
                                    height={10}
                                    loading="eager"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="info" className="bg-gray-200">
                <div className="container mx-auto p-4 mt-16">
                    <Info />
                </div>
            </section>

            <section id="advantages">
                <div className="container mx-auto px-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {cardData.map((card) => (
                            <RoundedCard key={card.id} {...card} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto p-4 mt-12">
                    <Table headings={headings} data={data} />
                </div>
            </section>
        </>
    );
};
