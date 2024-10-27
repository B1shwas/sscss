"use client";
import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "yet-another-react-lightbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { galleryList } from "@/lib/constants/galleryLists";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
  const categories = [...new Set(galleryList.map((item) => item.category))];
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
    setOpen(true);
  };

  return (
    <>
      <div className="container py-4">
        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="bg-transparent flex gap-4 flex-wrap h-fit">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-paragraph data-[state=active]:bg-slate-400 data-[state=active]:text-white border-[1px] border-black"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="my-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {galleryList
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <div key={index} onClick={() => handleImageClick(index)}>
                      <Image
                        src={item.image}
                        alt={item.category}
                        className="w-full h-[250px] object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Place Lightbox here */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={galleryList
            .filter(
              (item) =>
                item.category.toLowerCase() === activeCategory.toLowerCase()
            )
            .map((item) => ({
              src: item.image.src,
              alt: item.category,
            }))}
          index={currentImage}
        />
      </div>
    </>
  );
};

export default GalleryPage;
