"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants/navLinks";
import Link from "next/link";

const DropdownLink = (props: { className?: string }) => {
  const { className } = props;
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={`flex gap-6 text-link font-medium ${className}`}
      >
        {navLinks.map((link, index) =>
          link.sublink ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!text-link">
                {link.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="py-2 px-4">
                  {link.sublink.map((sublink) => (
                    <li key={sublink.href} className="link my-2">
                      <Link href={sublink.href} legacyBehavior passHref>
                        <NavigationMenuLink>{sublink.label}</NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className="link px-4 py-2 text-nowrap">
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownLink;
