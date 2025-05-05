import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#151C33] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            {/* Gradient overlay from top */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0F1116] to-transparent z-20" />

            <div className="relative z-30 mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"We Can Take Your Business To The Next Level."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="MKDYNAMICS excels in crafting custom software and mobile apps, ensuring digital security through cybersecurity services, transforming businesses with innovation and expertise." />

                        <AnimatedBody
                            delay={0.1}
                            text="Established with a passion for pushing technological boundaries, our journey is a testament to our commitment to redefining the landscape of IT solutions."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="We give professional support by our professional, we are always ensure to give our best for our customer and our mission is to provide integrity, transparency, and the highest ethical standards"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
