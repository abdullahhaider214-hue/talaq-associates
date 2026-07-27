import Hero from '../Components/HomePage/Hero';
import AboutIntro from '../Components/HomePage/AboutHome';
import ServicesPreview from '../Components/HomePage/ServicesPreview';
import WhyChooseUs from '../Components/HomePage/WhyChooseUs';
import FutureStatement from '../Components/HomePage/FutureStatement';
import Applications from '../Components/HomePage/Applications';

function Home() {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <ServicesPreview />
      <WhyChooseUs />
      <FutureStatement />
      <Applications />
    </main>
  );
}

export default Home;