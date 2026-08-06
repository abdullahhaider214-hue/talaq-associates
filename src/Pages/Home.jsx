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

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ConstructionCompany",

      name: "Talaq Associates",

      image: "https://talaq-associates.vercel.app/talaq-logo.jpeg",

      logo: "https://talaq-associates.vercel.app/talaq-logo.jpeg",

      url: "https://talaq-associates.vercel.app/",

      telephone: "+92-322-6060503",

      email: "talaqassociate@gmail.com",

      address: {
        "@type": "PostalAddress",

        addressLocality: "Lahore",

        addressCountry: "PK"
      },

      areaServed: {
        "@type": "Country",
        name: "Pakistan"
      },

      description:
        "Talaq Associates specializes in CLC Blocks, CLC Foaming Agent, Lightweight Concrete, Building Construction, CLC Screed, and technical support across Pakistan.",

      foundingDate: "2017",

      founder: [

        {
          "@type": "Person",
          name: "Muhammad Naeem Saeed"
        },

        {
          "@type": "Person",
          name: "Mian Imran"
        }

      ],

      sameAs: [
        "https://www.facebook.com/profile.php?id=61590908996064&rdid=E75qPMbJOYeETa3W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GG6CM48Ye%2F#"
      ],

      knowsAbout: [

        "CLC Blocks",

        "CLC Foaming Agent",

        "Lightweight Concrete",

        "Building Construction",

        "CLC Screed",

        "Technical Support"

      ]

    })}
  </script>


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