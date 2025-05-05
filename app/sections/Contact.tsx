import Link from "next/link";
import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedWords from "../animations/AnimatedWords";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section 
            className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
            id="contact"
            initial="initial"
            animate="animate"
        >
            <ContactBackground />
            <div className="relative z-20 mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
                <div
                    className={`flex flex-col items-start justify-center ${inter.className} relative w-full sm:items-center lg:max-w-[1440px] `}
                    style={{ marginTop: "-50px" }}
                >
                    <AnimatedWords
                        title={"contact"}
                        style={
                            "flex max-w-[250px] flex-col items-start text-center text-[30px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[60px] md:text-[70px] lg:text-center lg:text-[90px] xl:text-[120px]"
                        }
                    />
                </div>

                <div className="mt-20 relative z-20 flex w-full flex-col items-start justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-center lg:mt-12 lg:max-w-[1440px]">
                    <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                        <p className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4">
                            Got a question, proposal, project, or want to work together on something?
                        </p>
                        <Link
                            href="mailto:contact@mkdynamics.be?subject=MKDynamics%20Information%20Technology!&amp;body=Hello%2C%20write%20your%20message%20here."
                            target="_blank"
                            aria-label="Send an email"
                            className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        >
                            Send an email
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
