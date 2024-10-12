import about from "../../assets/sasas.jpg";
import { skills } from "../../utilities/constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section
            id="about"
            className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[900px]"
            initial={{ opacity: 0, y: 25 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-end relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText dark:text-lightpText font-bold">
                <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] dark:bg-blue-400/20 bg-orange-600/20 relative top-[5px] mr-[20px] "></div>
                <span className="relative -bottom-1 text-themeBlue dark:text-lightTheme font-mono text-smallSize font-semibold mr-[10px]">
                    02.
                </span>
                <h2 className="text-sectionHeading">About me</h2>
                <div className="block md:hidden w-full h-[1px] bg-blue-400/20 dark:bg-orange-500/20 relative top-[5px] ml-[10px] "></div>
            </div>
            <div className="flex justify-center lg:justify-between place-items-start gap-10 flex-wrap-reverse md:flex-nowrap">
                <div className="group w-full max-w-[300px] border-themeBlue dark:border-lightTheme relative h-[340px]">
                    <div className="absolute top-[14px]  right-[14px] w-full h-[320px] border-2  rounded-lg transition-all duration-200  group-hover:top-[24px] group-hover:right-[24px]"></div>
                    <div className="block relative w-full border-themeBlue dark:border-lightTheme  max-h-[400px] h-[320px] rounded-lg transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <div
                            className="w-full h-full bg-no-repeat rounded-lg relative z-[1] border-themeBlue dark:border-lightTheme transition-all duration-300   group-hover:filter-none"
                            style={{
                                backgroundImage: `url(${about})`,
                                backgroundPosition: "center 25%",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="text-secondaryText dark:text-lightsText font-fontParagraph text-base md:text-justify w-full md:max-w-[350px] lg:max-w-[500px]">
                    <p className="mb-3">
                        As a Full Stack Developer, I possess an impressive arsenal of skills
                        in <span className="text-themeBlue dark:text-lightTheme">HTML</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">CSS</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">SCSS</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">JavaScript</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">React</span> ,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Tailwind</span> ,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Redux</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Node.js</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Next.js</span>,{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Express.js</span> and{" "}
                        <span className="text-themeBlue dark:text-lightTheme">Mongo DB</span>. I excel in
                        designing and maintaining responsive websites that offer a smooth
                        user experience. My expertise lies in crafting dynamic, engaging
                        interfaces through writing clean and optimized code and utilizing
                        cutting-edge development tools and techniques.
                    </p>
                    <p className="mb-3">
                        I possess a keen interest in leveraging Data Structures and
                        Algorithms using <span className="text-themeBlue dark:text-lightTheme">C++</span>. I
                        actively participate in coding contests to continually refine my
                        skills.
                    </p>
                    <p className="mb-3">
                        I am also a team player who thrives in collaborating with
                        cross-functional teams to produce outstanding web applications.
                    </p>
                    <p className="mb-4">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul className="grid grid-cols-custom gap-x-3 overflow-hidden list-none">
                        {skills &&
                            skills.map((skill, i) => (
                                <li key={i}>
                                    <i className="text-themeBlue dark:text-lightTheme leading-3 mr-[7px]">▹</i>
                                    {skill}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default About;