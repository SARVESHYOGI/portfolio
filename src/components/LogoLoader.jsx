import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
    const duration = 1; // Total duration of the animation in seconds
    const numChars = text.length; // Number of characters in the text
    const delayIncrement = duration / numChars; // Delay between each character

    return (
        <div className="text-white dark:text-black text-2xl md:text-[3rem] lg:text-[8rem] tracking-[2rem] m-5 lg:m-11">
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * delayIncrement, ease: "easeInOut" }} // Dynamic delay
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

const LogoLoader = () => (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center bg-[#020c1b] dark:bg-white dark:text-black text-white">
        <motion.div
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-2 bg-white dark:bg-black w-full"
        ></motion.div>

        <AnimatedText text="welcome" />

        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-2 bg-white dark:bg-black w-full"
        ></motion.div>
    </div>
);

export default LogoLoader;
