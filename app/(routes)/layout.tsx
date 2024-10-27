import Image from "next/image";
import React from "react";
import { program1 } from "@/lib/imports";
import PageTitle from "./_component/PageTitle";

const HeaderRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${program1.src})` }}
        className="h-[20vh] bg-cover bg-top flex"
      >
        <PageTitle />
      </div>
      {children}
    </div>
  );
};

export default HeaderRouteLayout;
