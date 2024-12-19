import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Heros from '../components/Heros'; 
import WilayahIndex from '../components/WilayahIndex'; 
import TentangIndex from '../components/TentangIndex';
import GaleriIndex from '../components/GaleriIndex'; 
import Footer from '../components/Footer'; 

const Beranda = () => {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Navbar />
      <Heros /> 
      <WilayahIndex /> 
      <TentangIndex /> 
      <GaleriIndex /> 
      <Footer /> 
    </div>
  );
};

export default Beranda;
