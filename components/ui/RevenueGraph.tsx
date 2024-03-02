import { ChevronDown, Grip } from "lucide-react";
import React from "react";
import StakedBarChart from "./graphs/StakedBarChart";

const RevenueGraph = () => {
  return (
    <div className="p-6 border rounded-md flex flex-col shadow-md">
      <div className="w-full flex flex-row">
        <div className="flex flex-col">
          <p className="text-2xl font-medium">Revenue Updates</p>
          <p className="-mt-1 text-sm">Overview of profit</p>
        </div>
        <button className="ml-auto flex flex-row border rounded-md px-3 py-2 gap-x-2 items-center">
          March 2023 <ChevronDown size={18} strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex flex-row gap-x-4">
        <div className="w-[463px] h-[300px]">
          <StakedBarChart />
        </div>
        <div className="flex flex-col h-full items-center justify-center px-3 pl-16 py-6 gap-y-6">
          <div className="flex flex-row gap-x-4 items-center">
            <div className="p-3 flex justify-center items-center bg-[#ECF2FF] rounded-lg group">
              <Grip size={20} color="#5D87FF" />
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-2xl font-medium">$63,489.50</p>
              <p className="font-light text-sm">Total Earnings</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <div className="p-1 bg-[#5D87FF] rounded-full -mt-8"></div>
            <div className="flex flex-col gap-y-2">
              <p className="font-light text-sm ">Earning this month</p>
              <p className="text-xl font-medium">$48,820</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <div className="p-1 bg-[#49BEFF] rounded-full -mt-8"></div>
            <div className="flex flex-col gap-y-2">
              <p className="font-light text-sm ">Expense this month</p>
              <p className="text-xl font-medium">$26,498</p>
            </div>
          </div>
          <button className="flex bg-[#5D87FF] py-2 text-white items-center justify-center w-full rounded-md">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueGraph;
