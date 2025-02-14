import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import BrandDetails from "@/components/BrandDetails";
import NewCeramics from "@/components/NewCeramics";
import OurProduct from "@/components/OurProduct";
import Club from "@/components/Club";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";




const Home =  () => {
  
  return (
    <>
        <NavBar />
        <Hero />
        <BrandDetails />
        <NewCeramics  />
        <OurProduct />
        <Club/>
        <GetInTouch/>
        <Footer/>
        
    </>
  );
};

export default Home;
