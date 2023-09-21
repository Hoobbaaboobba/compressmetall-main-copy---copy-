import useCatalogModal from "@/hooks/useCatalogModal";
import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { link } = useLocationModal();
  const { onCloseCatalog, onCloseMenu } = useCatalogModal();

  const closeMenu = () => {
    onCloseCatalog(), onCloseMenu();
  };
  return (
    <Link href={`/${link}`} onClick={closeMenu}>
      <Image src="/logo.png" alt="logo" width={135} height={68} priority />
    </Link>
  );
};

export default Logo;
