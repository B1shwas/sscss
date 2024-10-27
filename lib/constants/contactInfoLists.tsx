import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ContactInfoItemProps } from "../interfaces";

export const contactInfoList: ContactInfoItemProps[] = [
  {
    icon: <FaPhone className="inline -mt-1" />,
    text: "1234567890",
  },
  {
    icon: <MdOutlineMailOutline className="inline -mt-1" />,
    text: "example@mail.com",
  },
  {
    icon: <IoLocationOutline className="inline -mt-1" />,
    text: "XYZ Street, Alabama",
  },
];
