import { contactInfoList } from "@/constants/navBar";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

interface ContactInfoItemProps {
  icon: JSX.Element;
  text: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, text }) => (
  <div className="flex items-center text-xl border-r-2 pr-5 last:border-none">
    {icon}
    <span className="ml-4 text-link">{text}</span>
  </div>
);

const Navbar: React.FC = () => {
  return (
    <nav className="bg-nav">
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
    </nav>
  );
};

export default Navbar;
