import useCatalogModal from "@/hooks/useCatalogModal";
import useLocationModal from "@/hooks/useLocationModal";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { link } = useLocationModal();
  const { changeTypeOfMenu, onCloseCatalog, onCloseMenu } = useCatalogModal();

  const onClickLink = () => {
    changeTypeOfMenu("");
    onCloseCatalog();
    onCloseMenu();
    document.body.style.overflowY = "auto";
  };
  return (
    <Link href={`/${link}`} onClick={onClickLink}>
      <Image src="/logo.png" alt="logo" width={135} height={68} priority />
    </Link>
  );
};

export default Logo;
