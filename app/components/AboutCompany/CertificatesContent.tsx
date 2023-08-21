import FilterSertificate from "./FilterSertificate";
import CertificatesComponents from "./CertificatesComponents";

const certificatesItems = [
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
  {
    label: "Название",
    href: "/",
  },
];

const CertificatesContent = () => {
  return (
    <div className="max-w-[1000px] flex gap-4 flex-wrap justify-center items-center">
      <FilterSertificate />
      <CertificatesComponents certificatesLinks={certificatesItems} />
    </div>
  );
};

export default CertificatesContent;
