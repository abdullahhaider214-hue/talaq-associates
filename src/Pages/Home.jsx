import Hero from '../Components/Hero';
import AboutIntro from '../Components/AboutIntro';
import ServicesPreview from '../Components/ServicesPreview';
import WhyChooseUs from '../Components/WhyChooseUs';
import FutureStatement from '../Components/FutureStatement';
import Applications from '../Components/Applications';

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