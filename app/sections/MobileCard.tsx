import React from "react";
import { FaMobileAlt, FaGlobe, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/container/Container";

const MobileCard = () => {
    const cards = [
        {
            id: 1,
            icon: <FaMobileAlt className="text-[40px] text-[#e4ded7]" />,
            title: "Native App",
            description:
                "A native application is a mobile application that is developed specifically for one of the operating systems used by smartphones and tablets (iOS, Android, etc.). Native iPhone applications are for example developed with the Objective-C and for Android with Java.",
        },
        {
            id: 2,
            icon: <FaCode className="text-[40px] text-[#e4ded7]" />,
            title: "Hybrid",
            description:
                "It is a mobile application that combines the features of a web application and those of a native application. In this way, the mobile application is accessible on all application platforms.",
        },
        {
            id: 3,
            icon: <FaGlobe className="text-[40px] text-[#e4ded7]" />,
            title: "Web",
            description:
                "A mobile web application is a mobile application developed in HTML and accessible and executable through a mobile phone Internet browser. A mobile web application is normally accessible by all smartphones regardless of their brand and operating system.",
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

export default MobileCard;