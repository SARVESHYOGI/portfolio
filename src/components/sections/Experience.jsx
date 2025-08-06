import { experience } from '../../utilities/constants';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

function Experience() {
    return (
        <section
            id="experience"
            className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[900px]"
        >
            <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText dark:text-lightpText font-bold">
                <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] dark:bg-blue-400/20 bg-orange-600/20 relative top-[5px] mr-[20px]"></div>
                <span className="relative -bottom-1 text-themeBlue dark:text-lightTheme font-mono text-smallSize font-semibold mr-[10px]">
                    03.
                </span>
                <h2 className="text-sectionHeading">Professional Experience</h2>
                <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] dark:bg-blue-400/20 bg-orange-600/20 relative top-[5px] mr-[20px]"></div>
                <div className="block md:hidden w-full h-[1px] bg-blue-400/20 dark:bg-orange-500/20 relative top-[5px] ml-[10px]"></div>
            </div>

            <div className="relative mt-10">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-slate-500 to-emerald-500"></div>

                {experience.map((exp, index) => (
                    <div key={index} className="relative mb-12 last:mb-0 group">
                        <div className="absolute left-6 w-5 h-5 dark:bg-white bg-slate-950 border-4 border-themeBlue rounded-full z-10 transition-all duration-300 group-hover:scale-110"></div>

                        <div className="ml-20">
                            <div className="rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 dark:bg-white bg-slate-950 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold dark:text-lightpText text-primaryText mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 dark:text-lightTheme text-themeBlue font-semibold text-lg mb-3">
                                            <Briefcase className="w-5 h-5" />
                                            {exp.company}
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 dark:text-slate-500 text-secondaryText text-sm">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {exp.description.map((desc, descIndex) => (
                                        <div key={descIndex} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="dark:text-slate-600 text-slate-300 leading-relaxed">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default Experience;
