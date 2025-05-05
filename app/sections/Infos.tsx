import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Infos = () => {
    return (
        <section
            className="flex w-full bg-[#0F1116] items-center justify-center py-10 px-6 text-[#e4ded7]"
            id="infos"
        >
            <div className="flex w-[90%] max-w-[1200px] flex-col items-center justify-between gap-8 md:flex-row">
                {/* Phone */}
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[24px] text-[#e4ded7]" />
                    <span className="text-[18px] md:text-[20px]">+32475440347</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-[24px] text-[#e4ded7]" />
                    <span className="text-[18px] md:text-[20px]">contact@mkdynamics.be</span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                    <FaInstagram className="text-[24px] text-[#e4ded7]" />
                    <span className="text-[18px] md:text-[20px]">mkdynamics.be</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-[24px] text-[#e4ded7]" />
                    <span className="text-[18px] md:text-[20px]">1000 Brussels Belgium</span>
                </div>
            </div>
        </section>
    );
};

export default Infos;