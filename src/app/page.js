import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ProfilDesa from "./components/ProfilDesa";
import KontakLokasi from "./components/KontakLokasi";
import BeritaKegiatan from "./components/BeritaKegiatan";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfilDesa />
      <Services />
      <BeritaKegiatan />
      <KontakLokasi />
      <Footer />
    </>
  );
}
