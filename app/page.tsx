import Benefits from "@/components/Main/Benefits";
import BoardMember from "@/components/Main/BoardMember";
import Gallery from "@/components/Main/Gallery";
import Hero from "@/components/Main/Hero";
import MessageFromPrincipal from "@/components/Main/MessageFromPrincipal";
import SchoolNumbers from "@/components/Main/SchoolNumbers";
import Testomonials from "@/components/Main/Testomonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <BoardMember />
        <SchoolNumbers />
        <MessageFromPrincipal />
        <Gallery />
        <Testomonials />
      </main>
    </>
  );
}
