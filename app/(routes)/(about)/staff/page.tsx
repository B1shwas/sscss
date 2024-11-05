import { staffLists } from "@/lib/constants/Staffs";
import { Metadata } from "next";
import Image from "next/image";
import { noImage } from "@/lib/imports";

export const metadata: Metadata = {
  title: "Staff | SSCSS",
  description: "Staff Members of Saraswati Secondary School",
  keywords: [
    "staff of sscss",
    "member of sscss",
    "saraswati secondary school staffs",
    "saraswati secondary school members",
  ],
};

const page = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {staffLists.map((staff, index) => (
          <div key={index} className="col-span-1 space-y-1">
            <Image
              src={staff.image || noImage}
              alt={staff.name}
              className=" object-cover h-[250px] bg-black/25"
            />
            <div className="max-sm:text-center">
              <h3 className="font-semibold text-lg">{staff.name}</h3>
              <h1 className="text-gray-500">{staff.role}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
