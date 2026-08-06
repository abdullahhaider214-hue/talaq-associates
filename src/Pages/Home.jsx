import { Helmet } from "react-helmet-async";

import Hero from '../Components/HomePage/Hero';
import AboutIntro from '../Components/HomePage/AboutHome';
import ServicesPreview from '../Components/HomePage/ServicesPreview';
import WhyChooseUs from '../Components/HomePage/WhyChooseUs';
import FutureStatement from '../Components/HomePage/FutureStatement';
import Applications from '../Components/HomePage/Applications';

function Home() {
  return (

    <>
  <Helmet>

    <title>
      Talaq Associates | CLC Blocks, Lightweight Concrete & Building Construction
    </title>

    <meta
      name="description"
      content="Talaq Associates provides CLC Blocks, CLC Foaming Agent, Lightweight Concrete, Building Construction, CLC Screed and Technical Support across Pakistan."
    />

    <meta
      name="keywords"
      content="CLC Blocks, Lightweight Concrete, Building Construction, CLC Foaming Agent, Pakistan"
    />

  </Helmet>

  <main>

    
      <Hero />
      <AboutIntro />
      <ServicesPreview />
      <WhyChooseUs />
      <FutureStatement />
      <Applications />
    

  </main>
</>

    
  );
}

export default Home;