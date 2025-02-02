import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";

const AboutCard = () => {
    const [startCount, setStartCount] = useState(false);

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setStartCount(true)}
        >
            {[
                { end: 29.3, suffix: "k", color: "#1AB69D", text: "STUDENT ENROLLED" },
                { end: 32, suffix: "k", color: "#EE4A62", text: "CLASS COMPLETED" },
                { end: 100, suffix: "%", color: "#8E56FF", text: "SATISFACTION RATE" },
                { end: 354, suffix: "+", color: "#F8941F", text: "TOP INSTRUCTORS" }
            ].map((item, index) => (
                <div key={index} className="shadow-box rounded-lg text-center py-10">
                    <h1 className="text-4xl md:text-5xl font-bold" style={{ color: item.color }}>
                        <CountUp start={startCount ? 0 : null} end={item.end} duration={2.5} />{item.suffix}
                    </h1>
                    <h3 className="text-[16px] font-semibold text-[#333333] mt-2">{item.text}</h3>
                </div>
            ))}
        </motion.div>
    );
};

export default AboutCard;
