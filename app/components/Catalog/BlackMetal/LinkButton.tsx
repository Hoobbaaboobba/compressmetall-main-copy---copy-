"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import EastIcon from "@mui/icons-material/East";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const LinkButton = ({ navLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`p-4 w-[250px] font-medium ${
              isActive ? "bg-orange-bg text-white" : "bg-light-gray text-black "
            } ${
              link.href === "/catalog/black_metal/lists" ? "rounded-t-xl" : ""
            } ${
              link.href === "/catalog/black_metal/e-steel"
                ? "rounded-b-xl"
                : ""
            } flex justify-between items-center cursor-pointer lg:hover:bg-orange-bg transition lg:hover:text-white`}
          >
            {link.label}{" "}
            {isActive ? (
              <EastIcon fontSize="small" />
            ) : (
              <AddCircleOutlineIcon fontSize="small" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default LinkButton;
