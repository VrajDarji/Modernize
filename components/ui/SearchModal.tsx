"use client";

import { useModal } from "@/hooks/useModal";
import { X } from "lucide-react";
import React from "react";

const SearchModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "searchModal";
  return (
    <>
      {isModalOpen && (
        <div className="h-[100vh] w-full fixed flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-20 shadow-lg shadow-gray-500">
          <div className="w-2/5 aspect-[1.1/1] rounded-md bg-white flex flex-col text-black">
            <div className="h-24 border-b w-full py-4 px-6 flex flex-row items-center justify-between">
              <input
                type="text"
                className="px-3 py-3 border-2 rounded-md w-5/6 focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-none placeholder:text-sm placeholder:font-light placeholder:tracking-wide"
                placeholder="Search here"
              />
              <button
                onClick={() => onClose()}
                className="p-3 rounded-full hover:bg-[rgba(0,0,0,0.05)]"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
