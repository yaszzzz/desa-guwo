import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ProfilDesa from "./components/ProfilDesa";
import KontakLokasi from "./components/KontakLokasi";

export default function Home() {
  return (
    <>
     
      <Hero />
      <ProfilDesa />
      <Services />
      <KontakLokasi />
      <Footer />
    </>
  );
}
