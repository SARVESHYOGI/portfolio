import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store/Slice/thememode';  // Import the toggleTheme action

function Theme() {
    const dispatch = useDispatch();
    const currentTheme = useSelector((state) => state.theme);  // Access current theme from Redux state

    // Toggle theme and dispatch to Redux
    const handleThemeToggle = () => {
        dispatch(toggleTheme());  // Dispatch the action to toggle theme
    };

    return (
        <div>
            {/* <h1>Current Theme: {currentTheme}</h1> */}
            <button
                className=" text-white rounded mx-2"
                onClick={handleThemeToggle}
            >
                {/* Toggle to {currentTheme === 'light' ? 'dark' : 'light'} mode */}
                <label className="inline-flex items-center relative">
                    <input
                        className="peer hidden"
                        id="toggle"
                        type="checkbox"
                        checked={currentTheme === 'dark'}  // Checkbox checked state depends on current theme
                        onChange={handleThemeToggle}  // Toggle the theme on change
                    />
                    {/* Tailwind styles for the toggle switch */}
                    <div
                        className="relative w-[80px] h-[40px] bg-[#F5F7FA] dark:bg-[#000000] border border-themeBlue dark:border-lightpText rounded-full shadow-sm duration-300
     peer-checked:bg-white 
  peer-checked:after:left-[40px] 
  peer-checked:after:bg-gradient-to-r peer-checked:from-orange-500 peer-checked:to-yellow-400
  after:absolute after:w-[30px] after:h-[30px] after:bg-zinc-900 after:rounded-full after:top-[5px] 
  after:left-[5px] after:translate-x-[3px]
  peer-checked:after:translate-x-0 after:duration-300"
                    ></div>





                    {/* Moon icon for dark mode */}
                    <svg
                        height="512"
                        width="512"
                        viewBox="0 0 24 24"
                        className="fill-white peer-checked:fill-black absolute w-4 h-4 left-[16px]"
                    >
                        <path
                            d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                        ></path>
                    </svg>
                    {/* Sun icon for light mode */}

                    <svg
                        height="0"
                        width="100"
                        viewBox="0 0 24 24"
                        className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[16px]"  // Reduced size to w-4 h-4

                    >
                        <path
                            d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                        ></path>
                    </svg>
                </label>

            </button>


        </div>
    );
}

export default Theme;
