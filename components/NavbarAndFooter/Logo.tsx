import { schoolLogo } from "@/lib/imports";
import Image from "next/image";
import Link from "next/link";
const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <Image src={schoolLogo} alt="Logo" height={90} />
        <h1 className="text-paragraph font-semibold max-sm:max-w-52">
          Shree Saraswati Community Secondary School{" "}
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
