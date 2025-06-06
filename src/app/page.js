import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProfilDesa from "./components/ProfilDesa";
import BeritaKegiatan from "./components/BeritaKegiatan";
import LetakPage from "./page/letak/page";
import InformasiLayanan from "./components/InformasiLayanan";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfilDesa />
      <Services />
      <InformasiLayanan />
      <LetakPage />
      <BeritaKegiatan />
    
    </>
  );
}
