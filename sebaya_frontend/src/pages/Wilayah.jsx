import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/ContainerWilayah'; 
import Footer from '../components/Footer'; 

const Beranda = () => {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Navbar />
      <ContainerWilayah />
      <Footer /> 
    </div>
  );
};

export default Beranda;
