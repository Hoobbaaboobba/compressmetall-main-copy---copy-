import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuButtonProps {
  src: string;
  name: string;
  icon: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ src, name, icon }) => {
  const pathname = usePathname();

  const isActive = pathname === src;

  return (
    <Link
      href={`${src}`}
      className={`flex py-2 font-medium justify-center items-center gap-8 ${
        isActive ? "bg-orange-bg" : ""
      } xl:hover:bg-orange-bg transition w-full`}
    >
      {icon === "true" && <MenuIcon />} {name}
    </Link>
  );
};

export default MenuButton;
