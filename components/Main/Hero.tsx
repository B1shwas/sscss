import hero1 from "@/public/images/hero/hero1.png";
import hero2 from "@/public/images/hero/hero2.png";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="bg-red-300 h-[80vh] grid grid-cols-1 md:grid-cols-3  grid-rows-3">
      <div
        className="col-span-1 md:col-span-3 lg:col-span-2 row-span-3 bg-cover bg-center px-10 flex items-center"
        style={{ backgroundImage: `url(${hero1.src})` }}
      >
        <div className="text-white font-bold">
          <h5 className="text-title">One Team. One Mission</h5>
          <h3 className="text-7xl">Knowledge</h3>
          <Button className="text-paragraph px-5 py-3 mt-5 rounded-sm">
            Learn More
          </Button>
        </div>
      </div>
      <div
        className="bg-cover bg-center row-span-2 "
        style={{ backgroundImage: `url(${hero2.src})` }}
      ></div>
      <div className="bg-secondary p-8 text-white font-semibold md:col-span-2 lg:col-span-1">
        <p className="text-title max-w-[80%]">Enrollment for 2080-81 is open</p>
        <Link href="/admission" className="underline mt-4">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Hero;
