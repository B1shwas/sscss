import Image from "next/image";
import { hero3 } from "@/lib/imports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction | SSCSS",
  description: "Introduction of Saraswati Secondary School",
  keywords: [
    "sscss",
    "saraswati secondary school",
    "saraswati school introduction",
    "about sscss",
    "details about saraswati school",
  ],
};

const page = () => {
  return (
    <div className="container py-10 flex flex-col md:flex-row gap-5">
      <Image
        src={hero3}
        alt="Saraswati Secondary School"
        width={200}
        height={300}
        className="object-cover max-sm:w-full max-sm:h-[300px]"
      />
      <div className="text-paragraph">
        <h1 className="text-2xl font-bold">
          Welcome to Saraswati Secondary School
        </h1>
        <p>
          Saraswati Secondary School (SSCSS) is a co-educational English medium
          school located in Jiri. Established with the vision of providing
          quality education, SSCSS offers a nurturing environment where students
          can thrive academically and personally.
        </p>
        <p>
          Our curriculum is designed to foster critical thinking and creativity,
          ensuring that students are well-prepared for the challenges of the
          future. We prioritize holistic development, offering a variety of
          extracurricular activities, including sports, arts, and community
          service, to complement our academic programs.
        </p>
        <p>
          At SSCSS, we believe in the importance of a collaborative learning
          environment. Our dedicated team of educators works closely with
          students to guide and support them in their educational journey. We
          also value parental involvement and encourage families to engage in
          school activities and initiatives.
        </p>
        <p>
          Join us at Saraswati Secondary School as we inspire the next
          generation of leaders, thinkers, and innovators. Together, we can
          create a bright future for our students and our community.
        </p>
      </div>
    </div>
  );
};

export default page;
