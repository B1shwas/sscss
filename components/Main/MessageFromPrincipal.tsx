import Image from "next/image";
import { principal } from "@/lib/imports";

const MessageFromPrincipal = () => {
  return (
    <div className="px-4 md:px-10 py-10 bg-gray-200">
      <h3 className="text-subtitle font-semibold">Message from Principal</h3>
      <p className="text-justify my-6 text-paragraph italic font-medium min-h-[200px]">
        <Image
          src={principal}
          alt="image"
          className="float-left mr-4 max-sm:hidden h-[200px] w-[250px] object-cover"
        />
        Welcome to our school community! As principal, I am honored to lead a
        dedicated team of educators who are committed to fostering a supportive
        and inspiring environment for our students. Here, we prioritize academic
        excellence, personal growth, and character development. Every student is
        unique, and we strive to cultivate their individual strengths and
        talents. Together, with the support of our parents and community, we
        create a collaborative atmosphere that encourages exploration,
        creativity, and critical thinking. I invite you to explore our programs
        and join us in our mission to empower students to reach their fullest
        potential. Thank you for being an essential part of our journey.
        Together, we can achieve great things!
      </p>
      <span className="uppercase tracking-wide text-link text-black/50">
        Mr. Madan Kumar Tamang
      </span>
    </div>
  );
};

export default MessageFromPrincipal;
