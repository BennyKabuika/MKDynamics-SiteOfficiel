import React from "react";
import { FaGlobe, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/container/Container";

const SecurityCard = () => {
    const cards = [
        {
            id: 1,
            icon: <FaNetworkWired className="text-[40px] text-[#e4ded7]" />,
            title: "External Network Pentest",
            description:
                "Exploit vulnerabilities in hosts accessible via the internet",
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-[40px] text-[#e4ded7]" />,
            title: "Internal Network Pentest",
            description:
                "Excess the extent of your vulnerability to insider attacks",
        },
        {
            id: 3,
            icon: <FaGlobe className="text-[40px] text-[#e4ded7]" />,
            title: "Web Application Pentest",
            description:
                "Check whether any sensitive data is under risk of leakage",
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

export default SecurityCard;