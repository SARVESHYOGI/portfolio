import { social_links } from "../utilities/constants";
import { motion } from "framer-motion";
import Theme from "./Theme";

const SocialLinks = () => {
    return (
        <>
            <motion.div
                className="w-[40px] hidden fixed bottom-0 md:block left-[20px] right-auto lg:left-[40px] z-10 text-primaryText dark:text-lightpText"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <ul className="flex flex-col items-center m-0 p-0 list-none">
                    {social_links &&
                        social_links.map(({ url, icon, name }, idx) => (
                            <li
                                key={idx}
                                className="p-[10px] transition hover:-translate-y-[3px] duration-300 text-secondaryText hover:text-themeBlue"
                            >
                                <a
                                    href={url}
                                    target="_blank"
                                    aria-label={name}
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                </ul>
                <div className="block w-[1px] h-[90px] mx-auto my-0 mt-[15px] bg-secondaryText dark:text-lightsText"></div>
            </motion.div>

            <motion.div
                className="w-[40px] hidden fixed bottom-0 md:block left-auto right-[20px] lg:right-[40px] z-10 text-primaryText dark:text-lightpText"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="fixed right-[18px] bottom-[25rem] rotate-90">
                    <Theme />

                </div>
                <div className="flex flex-col items-center relative">
                    <a
                        href="mailto:sarveshyogi2005@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="font-mono text-sm my-[20px] mx-auto p-[10px] tracking-widest transition hover:-translate-y-[3px] duration-300 text-secondaryText dark:text-lightsText hover:text-themeBlue dark:hover:text-lightTheme
"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        sarveshyogi2005@gmail.com
                    </a>
                </div>

                <div className="block w-[1px] h-[90px] mx-auto my-0 bg-secondaryText dark:text-lightsText"></div>


            </motion.div>


        </>
    );
};

export default SocialLinks;