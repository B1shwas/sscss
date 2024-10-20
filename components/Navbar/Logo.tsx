import logo from "@/public/images/logo/logo.webp";
import Image from "next/image";
const Logo: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image src={logo} alt="Logo" height={70} />
      <h1 className="text-paragraph font-semibold max-sm:max-w-52">
        Shree Saraswati Secondary School{" "}
      </h1>
    </div>
  );
};

export default Logo;
