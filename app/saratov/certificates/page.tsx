import CertifiictesContent from "../../../components/Home/Certificates/CertifiictesContent";

export default function CertificatesPage() {
  return (
    <main className="w-full mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full gap-6 px-2">
        <CertifiictesContent />
      </div>
    </main>
  );
}
