import { achievementLists } from "@/lib/constants/achievementLists";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Achievements | SSCSS",
  description: "Achievements of Saraswati Secondary School",
  keywords: [
    "achievements of sscss",
    "saraswati secondary school achievements",
    "what have sscss achieved",
  ],
};
const Page = () => {
  return (
    <div className="container py-10">
      {achievementLists.map((achievement, index) => (
        <div key={index}>
          <h1 className="text-subtitle font-semibold my-2">
            {achievement.title}
          </h1>
          <div
            className={`flex flex-col gap-5 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } border-b-[1px] border-black py-4`}
          >
            <Image
              src={achievement.image}
              alt={achievement.title}
              className="object-contain md:object-fit max-sm:w-full h-[200px] w-[40%]"
            />
            <p className="text-paragraph">{achievement.achievement}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
