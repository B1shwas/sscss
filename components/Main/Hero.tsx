import { hero3, hero4 } from "@/lib/imports";
import { Button } from "../ui/button";
import Link from "next/link";
import NepaliDate from "nepali-datetime";

const Hero: React.FC = () => {
  const month = parseInt(new NepaliDate().format("MM"));
  const year = parseInt(new NepaliDate().format("YYYY"));
  return (
    <div className="bg-red-300 h-[80vh] grid grid-cols-1 md:grid-cols-3  grid-rows-3">
      <div
        className="relative col-span-1 md:col-span-3 lg:col-span-2 row-span-3 bg-cover bg-center px-10 flex items-center"
        style={{ backgroundImage: `url(${hero4.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="text-white font-bold relative">
          <h5 className="text-[24px] sm:text-title">
            We always put the students first
          </h5>
          <h3 className="text-[32px] sm:text-7xl">Knowledge</h3>
          <Link href={"/vision"}>
            <Button className="text-paragraph px-5 py-3 mt-5 rounded-sm">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center row-span-2 "
        style={{ backgroundImage: `url(${hero3.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="bg-secondary p-8 text-white font-semibold md:col-span-2 lg:col-span-1">
        {month === 12 ? (
          <p className="text-2xl font-bold">Admission Open for {year + 1}</p>
        ) : (
          <p className="text-2xl font-bold">Welcome to SSCSS!</p>
        )}
        {month === 12 ? (
          <Link href="#admission" className="underline mt-4">
            Learn More
          </Link>
        ) : (
          <Link href="#benefits" className="underline mt-4">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
