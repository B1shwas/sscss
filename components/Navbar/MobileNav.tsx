import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoClose, IoGlobe } from "react-icons/io5";
import DropdownLink from "./DropdownLink";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
const MobileNav: React.FC = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="p-2 border-2 border-black">
            <IoMdMenu className="text-subtitle" />
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col px-5 py-20 justify-between">
          <SheetClose className="absolute top-6 right-6">
            <IoClose className="text-2xl" />
          </SheetClose>
          <Logo />
          <div>
            <DropdownLink className="flex-col-reverse items-start" />
          </div>
          <div className="flex gap-2 items-center">
            <IoGlobe className="text-title" />
            <h6 className="font-semibold">
              Contact us
              <p>4567654</p>
            </h6>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
