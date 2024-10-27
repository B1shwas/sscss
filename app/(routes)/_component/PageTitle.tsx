"use client";

import { usePathname } from "next/navigation";
import React from "react";

const PageTitle = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-primary text-white p-4 w-fit text-subtitle font-semibold h-fit my-auto ml-3">
      {pathname.split("/")[1].toLocaleUpperCase()}
    </div>
  );
};

export default PageTitle;
