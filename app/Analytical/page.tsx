import Container from "@/components/Container";
import HeroBoxes from "@/components/HeroBoxes";
import Nav from "@/components/Nav";
import RevenueInfo from "@/components/RevenueInfo";
import InnerContainer from "@/components/ui/InnerContainer";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Nav />
      <InnerContainer>
        <HeroBoxes />
        <RevenueInfo />
      </InnerContainer>
    </div>
  );
};

export default page;
