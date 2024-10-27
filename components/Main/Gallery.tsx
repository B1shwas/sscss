"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Heading from "./Heading";

import "yet-another-react-lightbox/styles.css";
import { Lightbox } from "yet-another-react-lightbox";
import { galleryList } from "@/lib/constants/galleryLists";
import Link from "next/link";

const Gallery = () => {
  const GALLERY_TITLE = "Explore Our School's Vibrant World";
  const GALLERY_SUBTITLE = "Gallery";

  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  return (
    <>
      <div className="px-4 md:px-10 py-10">
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <Heading subtitle={GALLERY_SUBTITLE} title={GALLERY_TITLE} />
          </div>
          <Link href={"/gallery"}>
            <Button variant={"outline"}>View All</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {galleryList.slice(0, 8).map((item, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <Image
              src={item.image}
              alt={item.category}
              className="w-full h-[250px] object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryList.map((item) => ({
          src: item.image.src,
          alt: item.category,
        }))}
        index={currentImage}
      />
    </>
  );
};

export default Gallery;
