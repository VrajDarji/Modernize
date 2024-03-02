"use client";
import React from "react";
import RevenueGraph from "./ui/RevenueGraph";
import YearlyBreakup from "./ui/YearlyBreakup";
import MonthlyEarning from "./ui/MonthlyEarning";

const RevenueInfo = () => {
  return (
    <div className="flex flex-row gap-8 w-full">
      <RevenueGraph />
      <div className="grid grid-rows-2 gap-y-8 h-full">
        <YearlyBreakup />
        <MonthlyEarning />
      </div>
    </div>
  );
};

export default RevenueInfo;
