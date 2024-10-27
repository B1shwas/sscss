import Image from "next/image";
import { q2 } from "@/lib/imports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision | SSCSS",
  description: "Vision of Saraswati Secondary School",
  keywords: [
    "vision of sscss",
    "saraswati school vision",
    "goals of sscss",
    "saraswati secondary school goals",
  ],
};

const page = () => {
  return (
    <div className="container py-10 flex flex-col md:flex-row gap-5">
      <Image
        src={q2}
        alt="Vision of SSCSS"
        width={200}
        height={300}
        className="object-cover max-sm:w-full max-sm:h-[300px]"
      />
      <div className="text-paragraph">
        <h1 className="text-2xl font-bold">Our Vision</h1>
        <p>
          At Saraswati Secondary School, our vision is to cultivate a dynamic
          learning environment that empowers students to become lifelong
          learners and responsible global citizens. We aspire to provide a
          holistic education that nurtures creativity, critical thinking, and
          ethical values.
        </p>
        <p>
          We aim to foster a culture of excellence, where every student is
          encouraged to explore their passions and talents. Through innovative
          teaching methods and a supportive community, we strive to equip our
          students with the skills and knowledge necessary to excel in an
          ever-changing world.
        </p>
        <p>
          Our goal is to inspire students to embrace challenges with confidence,
          think independently, and contribute positively to society. We believe
          that education is the key to unlocking potential and creating a
          brighter future for all.
        </p>
      </div>
    </div>
  );
};

export default page;
