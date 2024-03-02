import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed right-0 w-full top-0 md:w-5/6 bg-white text-black flex h-[100vh] overflow-y-scroll">
      {children}
    </div>
  );
};

export default Container;
