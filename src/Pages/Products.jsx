import ProductsIntro from "../Components/ProductPage/ProductsIntro";
import ProductCard from "../Components/ProductPage/ProductCard";
import ServicesSection from "../Components/ProductPage/ServicesSection";
import ClosingStatement from "../Components/ProductPage/ClosingStatement";

import foamingAgent from "../assets/images/services/foaming-agents.jpg";
import clcBlocks from "../assets/images/services/clc-blocks.jpg";
import lightweightConcrete from "../assets/images/services/lightweight-concrete.jpg";
import clcScreed from "../assets/images/services/clc-screed.jpg";

function Products() {
  return (
    <main>

      <ProductsIntro />

      <ProductCard
        number="01"
        title="CLC Foaming Agent"
        image={foamingAgent}
        description="Our high-performance CLC Foaming Agent is specially formulated to produce stable and uniform foam for manufacturing lightweight cellular concrete. It ensures consistent density, improved strength, and reliable performance in a wide range of construction applications."
        features={[
          "High Foam Stability",
          "Uniform Air Cell Formation",
          "Improves Concrete Quality",
          "Reduces Material Consumption",
        ]}
      />

      <ProductCard
        number="02"
        title="CLC Blocks"
        image={clcBlocks}
        reverse={true}
        description="CLC Blocks are lightweight, durable, and energy-efficient building blocks designed to reduce structural load while providing excellent thermal and sound insulation. They offer a sustainable alternative to conventional bricks for modern construction."
        features={[
          "Lightweight & Easy to Handle",
          "Excellent Thermal Insulation",
          "Fire Resistant",
          "Environment Friendly",
        ]}
      />

      <ProductCard
        number="03"
        title="Lightweight Concrete"
        image={lightweightConcrete}
        description="Our lightweight concrete solutions provide exceptional strength while significantly reducing dead load on structures. They are ideal for residential, commercial, and industrial projects where efficiency and long-term performance are essential."
        features={[
          "Reduced Structural Weight",
          "High Durability",
          "Energy Efficient",
          "Suitable for Modern Construction",
        ]}
      />

      <ProductCard
        number="04"
        title="CLC Screed"
        image={clcScreed}
        reverse={true}
        description="CLC Screed is a lightweight leveling solution designed for roofs, floors, and filling applications. It provides excellent insulation, minimizes structural load, and creates a smooth, stable surface for further construction work."
        features={[
          "Ideal for Floor Leveling",
          "Excellent Heat Insulation",
          "Reduces Roof Load",
          "Quick & Efficient Application",
        ]}
      />

      <ServicesSection />

      <ClosingStatement />

    </main>
  );
}

export default Products;