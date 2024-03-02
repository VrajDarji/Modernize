"use client";
import Image from "next/image";
import React from "react";

const infoBoxes = [
  {
    tag: "Employees",
    value: "96",
    bgColor: "#ECF2FF",
    textColor: "#5D87FF",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-user-male.svg",
  },
  {
    tag: "Clients",
    value: "3,650",
    bgColor: "#FEF5E5",
    textColor: "#FFAE1F",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-briefcase.svg",
  },
  {
    tag: "Projects",
    value: "356",
    bgColor: "#E8F7FF",
    textColor: "#49BEFF",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-mailbox.svg",
  },
  {
    tag: "Events",
    value: "696",
    bgColor: "#FDEDE8",
    textColor: "#FA896B",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-favorites.svg",
  },
  {
    tag: "Payroll",
    value: "$96k",
    bgColor: "#E6FFFA",
    textColor: "#13DEB9",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-speech-bubble.svg",
  },
  {
    tag: "Reports",
    value: "59",
    bgColor: "#E8F7FF",
    textColor: "#49BEFF",
    img: "https://modernize-angular-main.netlify.app/assets/images/svgs/icon-connect.svg",
  },
];

const HeroBoxes = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-6">
        {infoBoxes.map((info) => (
          <div
            key={info.tag}
            className={`w-full aspect-square flex items-center justify-center flex-col rounded-lg gap-1`}
            style={{
              background: info.bgColor,
              color: info.textColor,
            }}
          >
            <Image src={info.img} alt="" height={40} width={40} />
            <p className="font-medium mt-2">{info.tag}</p>
            <p className="text-xl font-medium">{info.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroBoxes;
