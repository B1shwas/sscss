import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/constants/FaqLists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | SSCSS",
  description: "Frequently Asked Questions on Saraswati Secondary School",
  keywords: [
    "faq",
    "faq of sscss",
    "saraswati secondary school frequently asked questions",
    "saraswati school faq",
  ],
};
const page = () => {
  return (
    <div className="container py-3">
      <Accordion type="single" collapsible>
        {FAQ.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-300 px-5 rounded-sm text-black mb-2"
          >
            <AccordionTrigger className="text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-paragraph">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default page;
