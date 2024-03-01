import { Power } from "lucide-react";
import Image from "next/image";
import React from "react";
import SidebarScroll from "./ui/SidebarScroll";

const Sidebar = () => {
  return (
    <div className="hidden w-1/6 fixed h-[100vh] md:flex flex-col items-center justify-between p-4 z-10 border-r shadow-sm">
      <div className="px-4 py-4 flex flex-row w-full justify-start items-start">
        <Image
          src={
            "https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
          }
          alt=""
          width={174}
          height={26}
        />
      </div>
      <SidebarScroll />
      <div className="mt-auto w-full p-2 pt-3">
        <div className="w-full h-20 flex flex-row items-center gap-4 bg-[#E8F7FF] rounded-xl px-3">
          <div className="rounded-full">
            <Image
              src={
                "https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
              }
              alt=""
              height={40}
              width={40}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col gap-1 text-black">
            <p className="text-sm font-normal">Mathew</p>
            <p className="text-xs font-light">Designer</p>
          </div>
          <div className="ml-auto items-center flex">
            <button className="h-10 flex justify-center items-center aspect-square rounded-full hover:bg-[rgba(0,0,0,0.05)]">
              <Power color="#678FFF" size={18} />
            </button>
            S
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
