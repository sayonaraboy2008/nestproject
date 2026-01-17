import React, { useState, useRef, useEffect } from "react";

function MiniSection() {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setLangOpen(false);
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      ref={ref}
      className="max-w-[1310px] m-auto flex justify-between items-center border-b-2 border-[#ECECEC] py-2.5 px-4">
      {/* LEFT */}
      <ul className="flex items-center text-[13px] text-[#7E7E7E]">
        <li className="px-2.5">
          <a href="">About Us</a>
        </li>
        <li className="border-l-2 border-gray-300 px-2.5">
          <a href="">My Account</a>
        </li>
        <li className="border-l-2 border-gray-300 px-2.5">
          <a href="">Wishlist</a>
        </li>
        <li className="border-l-2 border-gray-300 px-2.5">
          <a href="">Order Tracking</a>
        </li>
      </ul>

      {/* CENTER */}
      <p className="text-[#3BB77E] text-[14px] font-bold">
        100% Secure delivery without contacting the courier
      </p>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-[13px] text-[#7E7E7E]">
        <p>
          Need help? Call Us:
          <span className="text-[#3BB77E] ml-1 font-semibold">+1800900122</span>
        </p>

        {/* LANGUAGE DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => {
              setLangOpen(!langOpen);
              setCurrencyOpen(false);
            }}
            className="flex items-center gap-1 hover:text-[#3BB77E]">
            English
            <span className="text-xs">▼</span>
          </button>

          {langOpen && (
            <ul className="absolute right-0 mt-2 w-28 bg-white border shadow-md rounded-md">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                English
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Russian
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Uzbek
              </li>
            </ul>
          )}
        </div>

        {/* CURRENCY DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => {
              setCurrencyOpen(!currencyOpen);
              setLangOpen(false);
            }}
            className="flex items-center gap-1 hover:text-[#3BB77E]">
            INR
            <span className="text-xs">▼</span>
          </button>

          {currencyOpen && (
            <ul className="absolute right-0 mt-2 w-20 bg-white border shadow-md rounded-md">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                INR
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                USD
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                EUR
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default MiniSection;
