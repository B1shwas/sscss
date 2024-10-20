import { benefitCardList } from "@/lib/constants/BenefitCardLists";
import Heading from "./Heading";
import { P1 } from "./Paragraph";
import { Button } from "../ui/button";
import BenefitDetailCard from "./BenefitDetailCard";

const Benefits: React.FC = () => {
  const BENEFIT_SUBTITLE = "Our Benefits";
  const BENEFIT_TITLE = "Discover our Top  School Child Benefits";
  const PARAGRAPH =
    "Visit our school and speak with our parents and staff for more to educate and empower young women. Vision of education inspire us today.";
  return (
    <div className="bg-gray-300 px-4 md:px-10 py-10 grid grid-cols-3 gap-5">
      <div className="col-span-3 lg:col-span-1 space-y-5">
        <Heading title={BENEFIT_TITLE} subtitle={BENEFIT_SUBTITLE} />
        <P1>{PARAGRAPH}</P1>
        <Button variant={"outline"} className="text-paragraph px-5 rounded-sm">
          Learn More
        </Button>
      </div>
      <div className="col-span-3 lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          {benefitCardList.map((item, index) => (
            <BenefitDetailCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
