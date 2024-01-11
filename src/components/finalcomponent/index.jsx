"use client";
import React, { useRef } from "react";
import Styles from "./final.module.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const FinalComponent = () => {
  const DivRef = useRef();
  const SecondDivRef = useRef();

  const onNextButtonClick = () => {
    DivRef.current.classList.remove(Styles.backwardDivAni);
    SecondDivRef.current.classList.remove(Styles.backwardSecondDivAni);
    DivRef.current.classList.add(Styles.forwardDivAni);
    SecondDivRef.current.classList.add(Styles.forwardSecondDivAni);
    SecondDivRef.current.style.top = 0;
  };

  const onBackButtonClick = () => {
    DivRef.current.classList.remove(Styles.forwardDivAni);
    SecondDivRef.current.classList.remove(Styles.forwardSecondDivAni);
    DivRef.current.classList.add(Styles.backwardDivAni);
    SecondDivRef.current.classList.add(Styles.backwardSecondDivAni);
    SecondDivRef.current.style.top = "100%";
  };

  return (
    <div className="w-full h-full bg-blue-200 flex flex-col gap-5 justify-center items-center">
      <div className="relative w-full h-full overflow-hidden min-h-dvh">
        <div ref={DivRef} className={Styles.fdiv}>
          <video
            autoPlay
            loop
            muted
            className=" w-full h-full absolute top-0 left-0 object-contain"
          >
            <source src="/videos/Fleurveda_Final.mp4" type="video/mp4" />
          </video>

          <footer className=" rounded-t-2xl  text-white p-4 absolute bottom-0 w-full text-center  font-serif ">
            <div className="container mx-auto text-center flex items-center justify-between font-sans relative">
              <h1
                className="font-semibold cursor-pointer text-xs md:text-base max-sm:hidden"
                onClick={onNextButtonClick}
              >
                NOTIFY ME
              </h1>

              <button
                onClick={onNextButtonClick}
                // className="bg-blue-600 rounded-lg px-3 py-2 text-center w-1/3 absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
              >
                <MdKeyboardDoubleArrowUp
                  className=" text-center animate-pulse  cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:left-5"
                  color="white"
                  size="30px"
                />
              </button>

              <p className="text-sm sm:text-base cursor-pointer ">
                All rights reserved &copy; 2024
              </p>
            </div>
          </footer>
        </div>
        <div ref={SecondDivRef} className={Styles.secondDiv}>
          <button
            onClick={onBackButtonClick}
            className=" font-semibold rounded-lg    mt-5 ml-6"
          >
            CLOSE
          </button>
          <div
            className="h-full w-full p-5 flex justify-center items-center"
            id="flip-card"
          >
            <form className=" w-full h-fit p-5 rounded-lg text-center bg-white">
              <div className="container">
                <h1 className="text-2xl mb-4 font-semibold max-sm:text-lg">
                  Fleurveda introduces
                </h1>
                <p className="text-sm max-sm:text-xs mb-4">
                  a precise fusion of Science and Ayurveda, transcending the
                  ordinary to elevate your self-care experience!
                </p>
                <p className="text-sm max-sm:text-xs mb-4">
                  Coming up with our exclusive range of beauty elixirs, bath
                  care Products, and hi-tech beauty accessories that cater to
                  the redefined tastes of the discerning connoisseur.
                </p>
                <h3 className="font-normal mb-4 text-yellow-800 max-sm:text-sm">
                  AT FLEURVEDA, LUXURY MEETS PURITY,
                  <br /> AND CARE BECOMES AN ART!
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Subscribe to our newsletter for upcoming updates and exclusive
                  insights!
                </p>
              </div>
              <div className="flex flex-row-reverse gap-2 w-full justify-center items-center mb-4">
                <button
                  className="bg-yellow-800 rounded-full px-4 py-2 text-white text-xs min-w-fit"
                  type="submit"
                >
                  Notify me
                </button>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-40 border border-gray-300 rounded-full outline-none text-xs"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalComponent;
