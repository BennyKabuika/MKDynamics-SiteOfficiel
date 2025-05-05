import React from "react";
import { FaLaptop, FaCode, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/container/Container";

const WebsiteCard = () => {
    const cards = [
        {
            id: 1,
            icon: <FaLaptop className="text-[40px] text-[#e4ded7]" />,
            title: "Landing Page",
            description:
                "The Landing Page allows you to present your company, its products and its services in a simple way while being professional. Your site is hosted on our server, guaranteeing you security, speed and accessibility 24/7.",
        },
        {
            id: 2,
            icon: <FaCode className="text-[40px] text-[#e4ded7]" />,
            title: "Website",
            description:
                "Need some features such as a reservation system, data backup or just adding a contact form? The Website is the one for you. We define together the different functionalities that you can integrate into your website. Training in the management of orders, customers and the creation and / or modification of products We make a point of giving each of our clients their own identity with a unique graphic design.",
        },
        {
            id: 3,
            icon: <FaShoppingCart className="text-[40px] text-[#e4ded7]" />,
            title: "E-commerce",
            description:
                "The e-commerce site provides a sales platform and an online payment system. A secure online store with the setting of HTTPS (SSL certificate) and GDPR compliant International online payment gateways with VISA or MASTERCARD (Stripe, Paypal, etc.)",
        },
    ];

    return (
        <section className="flex w-full bg-[#0F1116] items-center justify-center py-10 px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] w-full">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
                        initial="initial"
                        animate="animate"
                    >
                        <Container
                            width="100%"
                            height="100%"
                            borderRadius={25}
                            color="rgba(255, 255, 255, 0.1)"
                            blur={false}
                            grain={true}
                            top="0px"
                            left="0px"
                            angle={0}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <div className="mb-4">{card.icon}</div>
                                <h3 className="text-[24px] font-bold leading-none text-white md:text-[28px] lg:text-[30px]">
                                    {card.title}
                                </h3>
                                <p className="mt-4 text-[16px] font-semibold text-[#95979D] max-w-[457px]">
                                    {card.description}
                                </p>
                            </div>
                        </Container>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WebsiteCard;