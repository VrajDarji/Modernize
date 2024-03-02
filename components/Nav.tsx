"use client";

import { useModal } from "@/hooks/useModal";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const navLinks = ["Chat", "Calender", "Email"];
const apps = [
  {
    name: "Chat Application",
    desc: "Messages & Emails",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-chat.svg",
  },
  {
    name: "Todo App",
    desc: "Completed tasks",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-cart.svg",
  },
  {
    name: "Invoice App",
    desc: "Get latest invoice",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-invoice.svg",
  },
  {
    name: "Calender",
    desc: "Get Dates",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-date.svg",
  },
  {
    name: "Contact Application",
    desc: "2 Unsaved Contacts",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-mobile.svg",
  },
  {
    name: "Ticket App",
    desc: "Create new ticket",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-lifebuoy.svg",
  },
  {
    name: "Email App",
    desc: "Get new emails",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-message-box.svg",
  },
  {
    name: "Courses",
    desc: "Create new course",
    logo: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-application.svg",
  },
];

const quickLinks = [
  "Pricing Page",
  "Authentication Design",
  "Register Now",
  "404 Error Page",
  "Notes App",
  "Employee App",
  "Todo Application",
  "Treeview",
];

const Nav = () => {
  const router = useRouter();
  const { onOpen } = useModal();
  const [isAppClicked, setIsAppClicked] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full h-16 px-5 py-2 flex items-center justify-between sticky top-0 left-0 border-b shadow-sm bg-white">
        <div className="flex flex-row gap-3 font-light">
          <button
            className="p-3 rounded-full flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)]"
            onClick={() => onOpen("searchModal")}
          >
            <Search size={20} strokeWidth={1.7} />
          </button>
          <button
            className="px-2 py-1 rounded-lg flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)] relative"
            onClick={() => setIsAppClicked((prev) => !prev)}
          >
            <p className="flex flex-row gap-1 items-center">
              App <ChevronDown size={18} strokeWidth={1.5} />
            </p>
            {isAppClicked && (
              <div
                className={`absolute -bottom-[405px] left-0 min-w-max bg-white appsbox flex flex-row rounded-lg shadow-md`}
              >
                <div className="flex flex-col border-r">
                  <div className="border-b p-6  pr-24 grid grid-cols-2 gap-x-16 gap-y-2">
                    {apps.map((app) => (
                      <div
                        key={app.name}
                        className="flex flex-row gap-4 items-center p-2"
                      >
                        <div className="p-2 flex justify-center items-center bg-[#ECF2FF] rounded-lg group">
                          <Image src={app.logo} alt="" width={20} height={20} />
                        </div>
                        <div className="flex flex-col gap-y-1 items-start">
                          <p className="group-hover:text-[#5D87FF] text-base font-medium">
                            {app.name}
                          </p>
                          <p className="text-xs ">{app.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row w-full p-5">
                    <p className="flex flex-row gap-x-2 items-center">
                      <HelpCircle strokeWidth={1.2} /> Frequently Asked
                      Questions
                    </p>
                    <button className="ml-auto px-3 py-2 bg-[#5D87FF] text-white font-medium rounded-md">
                      Check
                    </button>
                  </div>
                </div>
                <div className="flex flex-col h-full px-6 py-8 pr-12 gap-4 items-start">
                  <p className="text-lg font-medium">Quick Links</p>
                  <div className="flex flex-col gap-y-2 items-start">
                    {quickLinks.map((links) => (
                      <button
                        key={links}
                        className="font-normal hover:text-[#5D87FF]"
                      >
                        {links}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
    </>
  );
};

export default Nav;
