"use client";
// Sidebar.js
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`sidebar w-80 transition-width ${
        isHovered ? "w-200" : "w-80"
      }`}
    >
      <nav>
        <h1 className="mb-4">Sidebar</h1>
        <ul>
          <li>
            <Link href={"/"}>
              <p className="text-white hover:text-gray-400">Home</p>
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <p className="text-white hover:text-gray-400">Settings</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
