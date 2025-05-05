import React from "react";
import { FaPaintBrush, FaFileAlt, FaIdCard, FaPencilAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../components/container/Container";

const GraphicCard = () => {
    const cards = [
        {
            id: 1,
            icon: <FaPaintBrush className="text-[40px] text-[#e4ded7]" />,
            title: "Logo",
            description:
                "If you can imagine it, we can design it. We create a logo that reflects your brand identity and values. Our team of designers will work with you to create a unique and memorable logo that stands out from the competition.",
        },
        {
            id: 2,
            icon: <FaFileAlt className="text-[40px] text-[#e4ded7]" />,
            title: "Brochure and Flyers",
            description:
                "Need to share your Business Broucher and flyers? We can help you create a stunning brochure that showcases your products and services. Our team of designers will work with you to create a brochure that is visually appealing and easy to read.",
        },
        {
            id: 3,
            icon: <FaIdCard className="text-[40px] text-[#e4ded7]" />,
            title: "Flyers and Business Card",
            description:
                "The right card for your business? We print that. Design a Brochure and Flyer for your business? We print that.",
        },
        {
            id: 4,
            icon: <FaPencilAlt className="text-[40px] text-[#e4ded7]" />,
            title: "Custom Illustration",
            description:
                "We will provide you with original illustrated graphics created from scratch to match your specific needs and illustration style based on your feedback. Landing Pages, Social Media Post, Infographics.",
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

export default GraphicCard;