"use client";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative z-1">
      <div
        className={`sidebar bg-[#100910] h-screen w-80 flex flex-col justify-between ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <ul className="ml-10 text-xl">
            <li>
              <Link href={"/"}>
                <p className="text-white hover:text-gray-400 mt-20 mb-10">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href={"/settings"}>
                <p className="text-white hover:text-gray-400">Settings</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* Zusätzlicher Inhalt unten, falls erforderlich */}
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white focus:outline-none z-10"
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
