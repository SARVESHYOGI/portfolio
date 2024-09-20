import { useEffect, useState } from "react";
import {
    About,
    Contact,
    Footer,
    Header,
    Hero,
    Projects,
    SocialLinks,
} from "../components";

const Home = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const scrollTop = document.documentElement.scrollTop;
            const scrollLeft = document.documentElement.scrollLeft;
            setPosition({ x: clientX + scrollLeft, y: clientY + scrollTop });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="flex flex-col w-full h-full dark:bg-lightmBg bg-mainBg min-h-screen relative">
            <div
                className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient( 400px at ${position.x}px ${position.y}px, rgba(29, 140, 216, 0.15), transparent 70%)`,
                }}
            ></div>
            {/* <div
                className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
                style={{
                    background: `radial-gradient( 400px at ${position.x}px ${position.y}px, rgba(100, 181, 246, 0.4), transparent 70%)`,
                }}
            ></div> */}
            {/* rgba(100, 181, 246, 0.2) */}
            <Header />
            <SocialLinks />
            <div id="content" className="">
                <main className="px-[25px] sm:px-[50px] py-0 md:px-[100px] lg:px-[150px] my-0 mx-auto w-full max-w-[1600px] min-h-screen">
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;