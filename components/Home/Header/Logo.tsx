import useCatalogModal from "@/hooks/useCatalogModal";
import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { link } = useLocationModal();
<<<<<<< HEAD
  const { onCloseCatalog, onCloseMenu } = useCatalogModal();

  const closeMenu = () => {
    onCloseCatalog(), onCloseMenu();
  };
  return (
    <Link href={`/${link}`} onClick={closeMenu}>
=======
  const { onCloseCatalog, onCloseMenu, changeTypeOfMenu } = useCatalogModal();

  const onClickLink = () => {
    changeTypeOfMenu("");
    onCloseCatalog();
    onCloseMenu();
    document.body.style.overflowY = "auto";
  };
  return (
    <Link href={`/${link}`} onClick={onClickLink}>
>>>>>>> 7b47037 (commt)
      <Image src="/logo.png" alt="logo" width={135} height={68} priority />
    </Link>
  );
};

export default Logo;
