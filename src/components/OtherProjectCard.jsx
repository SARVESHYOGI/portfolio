import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const OtherProjectCard = ({
    project: { title, description, tags, github, demo },
}) => {
    return (
        <motion.li
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative transition-all duration-200 ease-in-out"
        >
            <div className="group flex flex-col justify-center items-start relative h-full px-7 py-8 rounded-[4px] md:bg-[#21232c] dark:bg-[#ebf3fe] transition-all duration-200 ease-in-out overflow-auto shadow-aboutShadow cursor-pointer">
                <header>
                    <div className="flex justify-between items-center mb-[35px]">
                        <div className="text-themeBlue dark:text-lightTheme text-5xl">
                            <CiFolderOn />
                        </div>
                        <div className="flex items-center -mr-[10px] ">
                            <a
                                href={github}
                                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText dark:text-lightsText dark:hover:text-lightTheme
 transition-all duration-200  hover:text-themeBlue"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText dark:text-lightsText transition-all duration-200 dark:hover:text-lightTheme
  hover:text-themeBlue"
                            >
                                <FiExternalLink />
                            </a>
                        </div>
                    </div>

                    <h3 className="mb-[10px] text-primaryText dark:text-lightpText
 transition-all duration-500  group-hover:text-themeBlue dark:group-hover:text-lightTheme
 text-xl font-bold leading-[1.1] font-fontHeading">
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <div className="block absolute z-0 w-full h-full top-0 left-0"></div>
                            {title}
                        </a>
                    </h3>
                    <div className="text-secondaryText dark:text-lightsText
 text-[14px] font-semibold font-fontParagraph">
                        <p>{description}</p>
                    </div>
                </header>
                <footer>
                    <ul className="flex items-end flex-wrap p-0 mt-[20px] list-none">
                        {tags.map((tag, idx) => (
                            <li
                                key={idx}
                                className={`font-mono text-[13px] leading-7 whitespace-nowrap text-secondaryText dark:text-lightsText
 ${idx !== tags.length - 1 && "mr-[12px]"
                                    }`}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </footer>
            </div>
        </motion.li>
    );
};

export default OtherProjectCard;