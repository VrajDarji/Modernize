import React from "react";

const InnerContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-8 flex flex-col gap-y-8">{children}</div>;
};

export default InnerContainer;
