import Image from "next/image";
import { contact } from "@/lib/imports";
import { contactInfoList } from "@/lib/constants/contactInfoLists";
import { ContactInfoItem } from "@/components/NavbarAndFooter/SchoolDetailsHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help | SSCSS",
  description: "Contact Information of Saraswati Secondary School",
  keywords: [
    "contact of sscss",
    "saraswati secondary school contact",
    "help and support sscss",
  ],
};
const page = () => {
  return (
    <div className="container py-10 flex flex-col md:flex-row gap-5">
      <Image
        src={contact}
        alt="image"
        width={200}
        height={300}
        className="object-cover max-sm:w-full max-sm:h-[300px]"
      />
      <div>
        <h1 className="text-subtitle font-semibold">Contact Us:</h1>
        {contactInfoList.map((item, index) => (
          <ContactInfoItem key={index} {...item} className="border-none" />
        ))}
      </div>
    </div>
  );
};

export default page;
