import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const MainProjectCard = ({
    project: { title, description, tags, demo, github, image },
    idx,
    length,
}) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: 25 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative grid gap-[10px] grid-cols-12 items-center ${idx !== length - 1 ? "mb-[70px] md:mb-[100px]" : ""
                } transition-all duration-200 shadow-aboutShadow md:shadow-none`}
        >
            <div
                className={`p-[25px] pb-[20px] !col-full ${idx % 2 === 0
                    ? "md:!col-mdScreenRev lg:!col-lgScreen md:text-right"
                    : "md:!col-mdScreen lg:!col-lgContent"
                    } sm:p-[40px] sm:pb-[30px]  flex flex-col justify-center h-full z-[5] md:block md:h-auto relative`}
                style={{
                    gridArea: "1 / 1 / -1 / 7",
                }}
            >
                <p className="my-[10px] text-themeBlue dark:text-lightTheme font-mono text-sm font-semibold tracking-wider">
                    Featured Project
                </p>

                <h3 className="text-primaryText dark:text-lightpText font-bold leading-[1.1] text-sectionHeading transition-all duration-200 hover:text-themeBlue dark:hover:text-lightTheme font-fontHeading md:mb-[20px]">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>

                <div className="shadow-none md:shadow-aboutShadow transition-all duration-200 relative z-[2] py-[20px] md:p-[25px] rounded text-secondaryText dark:text-lightsText text-base bg-transparent md:bg-[#21232c] md:dark:bg-[#ebf3fe] font-fontParagraph md:hover:shadow-bigShadow">
                    <p>{description}</p>
                </div>
                {/* <div className="shadow-none md:shadow-lg transition-all duration-300 ease-in-out relative z-10 py-4 md:py-6 px-4 md:px-6 rounded-lg text-gray-700 dark:text-gray-300 text-base bg-white md:bg-[#ffb24d] dark:bg-gray-800 md:dark:bg-[#112240] font-sans hover:shadow-xl">
                    <p>{description}</p>
                </div> */}


                <ul
                    className={`flex flex-wrap ${idx % 2 === 0 && "md:justify-end"
                        } relative z-[2] my-[10px] md:mt-[25px] md:mb-[10px] p-0 list-none`}
                >
                    {tags.map((tag, i) => (
                        <li
                            key={i}
                            className="font-mono whitespace-nowrap text-sm text-secondaryText dark:text-lightsText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div
                    className={`flex items-center relative mt-[10px] ml-[10px] ${idx % 2 === 0 && "md:justify-end md:ml-0 md:mr-[10px]"
                        } text-primaryText dark:text-lightpText
 text-[22px]`}
                >
                    <a
                        href={github}
                        className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue
                        dark:hover:text-lightTheme
                        "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={demo}
                        className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue
                        dark:hover:text-lightTheme"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiExternalLink />
                    </a>
                </div>
            </div>

            <div
                className={`!col-full h-full opacity-25 ${idx % 2 === 0
                    ? "md:!col-lgScreenRev"
                    : "md:!col-lgScreen lg:!col-lgImage"
                    } md:h-auto md:opacity-100 shadow-aboutShadow transition-all duration-200 relative`}
                style={{
                    gridArea: "1 / 6 / -1 / -1",
                }}
            >
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full"
                >
                    <div className="group w-full relative max-w-[712px] h-full">
                        <div className="block relative w-full  shadow-aboutShadow  rounded-lg transition-all duration-500  h-full z-[3]">
                            <img
                                className="w-full md:w-full h-full min-h-[400px] bg-no-repeat rounded-lg relative object-cover transition-all duration-500 mix-blend-multiply brightness-50 md:brightness-95   group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4]"
                                src={image}
                            />
                        </div>
                    </div>
                </a>
            </div>
        </motion.li>
    );
};

export default MainProjectCard;