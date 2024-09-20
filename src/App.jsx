import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { LogoLoader } from "./components";
import { AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux';
function App() {
  const currentTheme = useSelector((state) => state.theme);
  const [logoLoader, setLogoLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLogoLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      {logoLoader ? (
        <div className={currentTheme === 'dark' ? 'dark' : ''}>

          <LogoLoader />
        </div>

      ) : (
        <>
          <div className={currentTheme === 'dark' ? 'dark' : ''}>

            <Home />
          </div>

        </>


      )}
    </AnimatePresence>
  );
}

export default App;
