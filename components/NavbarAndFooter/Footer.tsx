import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/constants/navLinks";
import Link from "next/link";
import { ContactInfoItem } from "./SchoolDetailsHead";
import { contactInfoList } from "@/lib/constants/contactInfoLists";

const Footer = () => {
  const pages = navLinks.slice(1);
  const helpLinks = [
    {
      label: "Help and Support",
      href: "/help",
    },

    {
      label: "FAQ",
      href: "/faq",
    },
  ];
  return (
    <>
      <div className="container flex justify-between gap-10 py-10 flex-col lg:flex-row">
        <div className="space-y-3">
          <Logo />
          <p>Theme message of the school</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-paragraph font-semibold">Pages</h3>
          {pages.map(
            (page, index) =>
              page.href && (
                <Link key={index} href={page.href} className="block">
                  {page.label}
                </Link>
              )
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-paragraph font-semibold">Help</h3>
          {helpLinks.map(
            (page, index) =>
              page.href && (
                <Link key={index} href={page.href} className="block">
                  {page.label}
                </Link>
              )
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-paragraph font-semibold">Contact Us</h3>
          {contactInfoList.map((info, index) => (
            <ContactInfoItem
              key={index}
              icon={info.icon}
              text={info.text}
              className="border-none !text-link"
            />
          ))}
        </div>
      </div>
      <div className="p-3 text-center bg-gray-200">
        <p>Designed and Developed by: Bishwash, Dhiraj and Gelbu </p>
      </div>
    </>
  );
};

export default Footer;
