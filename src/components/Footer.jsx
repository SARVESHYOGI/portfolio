import { social_links } from "../utilities/constants";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center flex-col h-auto min-h-[70px] p-[15px] text-center">
            <div className="w-full max-w-[270px] mx-auto mb-[10px] text-secondaryText dark:text-lightsText md:hidden">
                <ul className="flex justify-between items-center p-0 m-0 list-none">
                    {social_links &&
                        social_links.map(({ url, icon, name }, idx) => (
                            <li key={idx}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="p-[10px] hover:text-themeBlue dark:hover:text-lightTheme transition-all duration-200"
                                >
                                    {icon}
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="text-secondaryText dark:text-lightsText font-mono text-sm leading-4">
                <a
                    href="https://github.com/SARVESHYOGI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[10px] hover:text-themeBlue dark:hover:text-lightTheme transition-all duration-200"
                >
                    <div> Sarvesh Yogi</div>
                </a>
            </div>
        </footer>
    );
};

export default Footer;