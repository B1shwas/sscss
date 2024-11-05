
import DropdownLink from "./DropdownLink";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center container py-2">
      <Logo />
      <div className="hidden lg:block">
        <DropdownLink />
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
