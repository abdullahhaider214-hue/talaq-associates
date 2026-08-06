import { Helmet } from "react-helmet-async";

import AboutIntro from '../Components/AboutPage/AboutIntro';
import AboutPurpose from '../Components/AboutPage/AboutPurpose';
import AboutApproach from '../Components/AboutPage/AboutApproach';
import AboutClosing from '../Components/AboutPage/AboutClosing';

function About() {
  return (
    <>
      <Helmet>

        <title>
          About Talaq Associates | Since 2017
        </title>

        <meta
          name="description"
          content="Learn about Talaq Associates, founded in 2017 by Muhammad Naeem Saeed and Mian Imran. We specialize in CLC Blocks, Lightweight Concrete, Building Construction, and innovative construction solutions across Pakistan."
        />

        <meta
          name="keywords"
          content="About Talaq Associates, Construction Company Pakistan, Lightweight Concrete, CLC Blocks, Building Construction"
        />

      </Helmet>


       <main className="about-page">

      <AboutIntro />

      <AboutPurpose />

      <AboutApproach />

      <AboutClosing />

    </main>


    </>

    
  );
}

export default About;