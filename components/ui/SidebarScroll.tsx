"use client";
import {
  Album,
  Aperture,
  Calendar,
  CircleDot,
  ClipboardList,
  ListTodo,
  Mail,
  MessageSquare,
  Notebook,
  Phone,
  ShoppingCart,
  SquareUserRound,
  Ticket,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  {
    tag: "home",
    children: [
      { icon: <Aperture size={20} strokeWidth={1.2} />, tag: "Analytical" },
      { icon: <ShoppingCart size={20} strokeWidth={1.2} />, tag: "eCommerce" },
    ],
  },
  {
    tag: "apps",
    children: [
      { icon: <MessageSquare size={20} strokeWidth={1.2} />, tag: "Chat" },
      { icon: <Calendar size={20} strokeWidth={1.2} />, tag: "Calender" },
      { icon: <Mail size={20} strokeWidth={1.2} />, tag: "Email" },
      { icon: <Phone size={20} strokeWidth={1.2} />, tag: "Contacts" },
      { icon: <Album size={20} strokeWidth={1.2} />, tag: "Courses" },
      {
        icon: <SquareUserRound size={20} strokeWidth={1.2} />,
        tag: "Employee",
      },
      { icon: <Notebook size={20} strokeWidth={1.2} />, tag: "Notes" },
      { icon: <Ticket size={20} strokeWidth={1.2} />, tag: "Tickets" },
      { icon: <ListTodo size={20} strokeWidth={1.2} />, tag: "ToDo" },
      { icon: <ClipboardList size={20} strokeWidth={1.2} />, tag: "Taskboard" },
      { icon: <CircleDot size={20} strokeWidth={1.2} />, tag: "Blog" },
    ],
  },
];

const SidebarScroll = () => {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];
  console.log(pathname);

  return (
    <div className="h-full w-full overflow-y-scroll text-black p-2">
      {links.map((link) => {
        return (
          <div className="flex flex-col w-full gap-2 py-2" key={link.tag}>
            <p className="text-sm uppercase font-medium text-[#2A3547]">
              {link.tag}
            </p>
            <div className="flex flex-col gap-1 w-full items-center justify-start px-1">
              {link.children.map((child) => {
                return (
                  <button
                    key={child.tag}
                    className={`w-full flex justify-start items-center px-3 py-2 gap-2 rounded-lg font-light  ${
                      child.tag === pathname
                        ? "bg-[#5D87FF] text-white"
                        : "hover:bg-[rgba(0,0,0,0.07)]"
                    }`}
                    onClick={() => router.push(`/${child.tag}`)}
                  >
                    {child.icon}
                    {child.tag}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarScroll;
