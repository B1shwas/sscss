import { Metadata } from "next";
import GalleryPage from "../_component/GalleryPage";
export const metadata: Metadata = {
  title: "Gallery | SSCSS",
  description:
    "Photo collection of different events on Saraswati Secondary School",
  keywords: [
    "photos sscss",
    "saraswati school photos",
    "sscss gallery",
    "events in saraswati secondary school",
    "gallery saraswati school",
  ],
};
const page = () => {
  return (
    <>
      <GalleryPage />
    </>
  );
};

export default page;
