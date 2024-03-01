"use client";
import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const navLinks = ["Chat", "Calender", "Email"];

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="w-full h-16 px-5 py-2 flex items-center justify-between">
      <div className="flex flex-row gap-3 font-light">
        <button className="p-2 rounded-full flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)]">
          <Search size={20} strokeWidth={1.7} />
        </button>
        <button className="px-2 py-1 rounded-lg flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)]">
          <p className="flex flex-row gap-1 items-center">
            App <ChevronDown size={18} strokeWidth={1.5} />
          </p>
        </button>
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => router.push(link)}
            className="px-2 py-1 rounded-lg flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)]"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
