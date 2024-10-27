import { contactInfoList } from "@/lib/constants/contactInfoLists";
import { ContactInfoItemProps } from "@/lib/interfaces";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  text,
  className,
}) => (
  <div
    className={`flex items-center text-xl border-r-2 pr-5 last:border-none ${className}`}
  >
    {icon}
    <span className="ml-4 text-link">{text}</span>
  </div>
);

const SchoolDetailsHead = () => {
  return (
    <div className="bg-nav">
      <div className="container mx-auto py-4 text-white flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-3 text-nowrap">
          {contactInfoList.map((info, index) => (
            <ContactInfoItem key={index} icon={info.icon} text={info.text} />
          ))}
        </div>
        <div className="flex gap-5">
          {[FaFacebookF, FaLinkedin, FaYoutube].map((Icon, index) => (
            <div key={index} className="p-2 bg-white/40 rounded-md">
              <Icon className="text-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolDetailsHead;
