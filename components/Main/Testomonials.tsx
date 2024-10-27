import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { P1 } from "./Paragraph";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialLists } from "@/lib/constants/TestimonialLists";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-10 py-10">
      <Heading title="What does our Alumni Say?" subtitle="Testimonials" />
      <div className="px-10">
        <Carousel>
          <CarouselContent>
            {/* Map through your testimonials */}
            {TestimonialLists.map((testimony, index) => (
              <CarouselItem key={index} className="lg:basis-1/2">
                <div className="bg-gray-200 rounded-md px-6 py-4 m-auto mt-10 min-h-[300px]">
                  <div className="flex gap-4 items-center mb-6 ">
                    <Image
                      src={testimony.image}
                      alt="image"
                      className="h-[70px] w-[70px] object-cover rounded-full"
                    />
                    <div>
                      <h3 className="text-description font-semibold">
                        {testimony.name}
                      </h3>
                      <p>{testimony.relation}</p>
                    </div>
                  </div>
                  <P1>{testimony.text}</P1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
