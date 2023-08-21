import ClientsMenu from "../components/Clients/ClinetsMenu";
import InformationMenu from "../components/Information/InformationMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center mt-[80px] sm:mt-[120px] xl:mt-[200px] mb-[50px] px-4 sm:px-8">
      <div className="max-w-[1300px] relative gap-8 flex flex-col lg:flex-row justify-between w-full md:border border-light-gray rounded-3xl py-[50px] px-[20px] md:px-[40px]">
        <InformationMenu />
        {children}
      </div>
    </section>
  );
}
