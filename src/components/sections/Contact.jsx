import ButtonLink from "../shared/ButtonLink";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="contact"
            className="px-0 py-[60px] sm:py-[80px] md:py-[100px] max-w-[600px] text-center mt-[0px] mx-auto mb-[50px] md:mb-[0px]"
        >
            <h2 className="mx-0 mt-[10px] mb-[20px] w-full leading-[1.1] block text-themeBlue dark:text-lightTheme font-mono text-lg tracking-wider">
                <span className="text-base relative bottom-0 -mb-[3px] mr-[5px] sm:mr-[10px] sm:mb-0">
                    05.
                </span>
                Whats's Next?
            </h2>
            <h2 className="font-fontHeading text-primaryText dark:text-lightpText text-clamp3 mb-[10px] font-semibold leading-[1.1]">
                Get In Touch
            </h2>
            <p className="font-sans mt-10 text-secondaryText dark:text-lightsText text-lg leading-[1.5] tracking-wide">
                I am actively seeking new career opportunities, and my inbox is always
                open. Whether you have a job opportunity or if you just want to connect,
                feel free to reach out.
            </p>
            <ButtonLink
                content="Say Hello"
                url="mailto:sarveshyogi2005@gmail.com"
                classNameBox="mt-[50px]"
                classNameBtn="px-7 !py-4 !font-fontHeading tracking-widest"
            />
        </motion.section>
    );
};

export default Contact;