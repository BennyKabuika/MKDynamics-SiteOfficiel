import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />

            {/* Logo en haut à gauche */}
            <div className="absolute top-5 left-5 z-20">
                <Link href="/">
                    <Image
                        src="/logo.png" 
                        alt="MK Dynamics Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                    />
                </Link>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >
                    <AnimatedTitle
                        text={"MKDynamics | IT Solutions"}
                        className={
                            "mb-1 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
