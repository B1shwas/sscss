import React from "react";
import Heading from "./Heading";
import { Button } from "../ui/button";
import Image from "next/image";

import { staffLists } from "@/lib/constants/Staffs";
import Link from "next/link";

const BoardMember = () => {
  const BOARD_SUBTITLE = "OUR TEAM";
  const BOARD_TITLE = "Meet Our Board Members";
  const boardMemberList = staffLists
    .filter((item) => item.category === "BOD")
    .slice(0, 4);

  return (
    <div className="px-4 md:px-10 py-10 border-t-primary border">
      <div className="flex items-center justify-between">
        <div className="space-y-5">
          <Heading subtitle={BOARD_SUBTITLE} title={BOARD_TITLE} />
        </div>
        <Link href="/staff">
          <Button variant={"outline"}>View All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-3">
        {boardMemberList.map((item, index) => (
          <div key={index} className="space-y-2">
            <Image
              //@ts-ignore
              src={item.image}
              alt="image"
              className="object-cover h-[300px]"
            />
            <h4 className="text-xl font-medium">{item.name}</h4>
            <p className="text-link text-para">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMember;
